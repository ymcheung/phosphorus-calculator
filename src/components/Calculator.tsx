import { createStore } from "solid-js/store";
import { createForm, Form, Field, required, setValue, getValue, getValues, SubmitHandler } from '@modular-forms/solid';
import { TextInput } from "./TextInput";

type CalculatorForm = {
  kcal?: number;
  gram?: number;
  phosPercent?: number;
  name?: string;
}

type OnBlurProps = {
  name: 'kcal' | 'gram' | 'phosPercent';
  value: number;
}

export default function Calculator() {
  // const [temp, setTemp] = createStore({});
  const calculatorForm = createForm<CalculatorForm>({
    validateOn: 'blur'
  });
  // const addSaved = (text) => {
  //   setSaved([...saved, { energy: {}, archieved: false }]);
  // };


  const handleOnBlur = ({ name, value }: OnBlurProps) => {
    const valueIsNumber = !isNaN(value) ? value : 0;
    setValue(calculatorForm, name, valueIsNumber);
  };

  const handleCalculation = () => {
    if (!getValue(calculatorForm, 'kcal') || !getValue(calculatorForm, 'gram') || !getValue(calculatorForm, 'phosPercent')) return '?';

    const formValues = getValues(calculatorForm, { shouldActive: false }) || {};
    const energy = (formValues.gram * 100 / formValues.kcal) || 0;
    const phosPercent = formValues.phosPercent / 100;

    const result = energy * phosPercent * 1000;

    return result;
  }

  // const handleSubmit: SubmitHandler<CalculatorForm> = (values, event) => {
  // Runs on client
  // console.log({ values })
  // };

  return (
    <>
      <h2 class="color:primary-100 f:20">磷含量</h2>
      <div class="mb:16">
        <span>{handleCalculation()}</span>
        <span>mg/100 大卡</span>
      </div>
      <hr />
      <Form class="d:grid gap-y:16" of={calculatorForm}>
        <div>
          <strong class="color:primary-500 f:20">代謝能</strong>
          <div class="d:grid grid:auto/1fr|1fr gap-x:16">
            <div>
              <Field
                of={calculatorForm}
                name="kcal"
                validate={[
                  required('Please enter your email.')
                ]}>
                {(field) => {
                  return (
                    <TextInput
                      inputmode="decimal"
                      pattern="[0-9]*"
                      label="熱量"
                      value={field.value}
                      maxLength={5}
                      error={field.error}
                      {...field.props}
                      required
                      placeholder="大卡 (kcal)"
                      onBlur={() =>
                        handleOnBlur('kcal', field.value)
                      }
                    />
                  )
                }}
              </Field>
            </div>
            <div>
              <Field
                of={calculatorForm}
                name="gram"
                validate={[required('Please enter your email.')]}
              >
                {(field) =>
                  <TextInput
                    inputmode="decimal"
                    pattern="[0-9]*"
                    label="重量"
                    value={field.value}
                    maxLength={5}
                    error={field.error}
                    {...field.props}
                    required
                    placeholder="公克 (g)"
                    onBlur={() =>
                      handleOnBlur('gram', field.value)
                    }
                  />
                }
              </Field>
            </div>
          </div>
        </div>
        <div>
          <Field of={calculatorForm} name="phosPercent" validate={[required('Please enter your email.')]}>
            {(field) =>
              <TextInput
                inputmode="decimal"
                pattern="[0-9]*"
                label="磷含量"
                value={field.value}
                maxLength={5}
                error={field.error}
                {...field.props}
                required
                placeholder="百分比"
                onBlur={() =>
                  handleOnBlur('phosPercent', field.value)
                }
              />
            }
          </Field>
        </div>
        {/* <div>
          <Field of={calculatorForm} name="name" validate={[required('Please enter your email.')]}>
            {(field) =>
              <>
                <label class="label" for={field.name}>名稱</label>
                <input id={field.name} class="input" type="text" value={field.value} {...field.props} maxLength={12} placeholder="主食罐的名稱" />
              </>
            }
          </Field>
        </div> */}
        {/* <div>
          <button class="button-submit" type="submit">記下來</button>
        </div> */}
      </Form >
    </>
  )
}
