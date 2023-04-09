import { createStore } from "solid-js/store";
import { createForm, Form, Field, required } from '@modular-forms/solid';
import { TextInput } from "./TextInput";

type CalculatorForm = {
  kcal: number;
  gram: number;
  phosPercent: number;
  name: string;
}

export default function Calculator() {
  const [saved, setSaved] = createStore([]);
  const calculatorForm = createForm<CalculatorForm>();

  // const addSaved = (text) => {
  //   setSaved([...saved, { id: ++itemId, energy: {}, archieved: false }]);
  // };

  return (
    <>
      <h2 class="color:primary-100">磷含量計算</h2>
      <div class="mb:16">
        <span></span>
        <span>mg/100 大卡</span>
      </div>
      <hr />
      <Form class="d:grid gap-y:16" of={calculatorForm}>
        <div>
          <strong class="f:24 color:primary-500">代謝能</strong>
          <div class="d:grid grid:auto/1fr|1fr gap-x:16 mx:-8">
            <div>
              <Field of={calculatorForm} name="kcal" validate={[required('Please enter your email.')]}>
                {(field) =>
                  <TextInput inputmode="decimal" pattern="[0-9]*" label="熱量" value={field.value} maxLength={5} error={field.error} {...field.props} required placeholder="大卡 (kcal)" />
                }
              </Field>
            </div>
            <div>
              <Field of={calculatorForm} name="gram" validate={[required('Please enter your email.')]}>
                {(field) =>
                  <TextInput inputmode="decimal" pattern="[0-9]*" label="重量" value={field.value} maxLength={5} error={field.error} {...field.props} required placeholder="公克 (g)" />
                }
              </Field>
            </div>
          </div>
        </div>
        <div class="mx:-8">
          <Field of={calculatorForm} name="phosPercent" validate={[required('Please enter your email.')]}>
            {(field) =>
              <>
                <label class="label ml:8" for={field.name}>磷含量</label>
                <input id={field.name} class="input" inputmode="decimal" pattern="[0-9]*" value={field.value} {...field.props} maxLength={5} required placeholder="百分比" />
              </>}
          </Field>
        </div>
        <div class="mx:-8">
          <Field of={calculatorForm} name="name" validate={[required('Please enter your email.')]}>
            {(field) =>
              <>
                <label class="label ml:8" for={field.name}>名稱</label>
                <input id={field.name} class="input" type="text" value={field.value} {...field.props} maxLength={12} placeholder="主食罐的名稱" />
              </>
            }
          </Field>
        </div>
        <div>
          <button type="button">記下來</button>
        </div>
      </Form>
    </>
  )
}
