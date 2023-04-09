import { JSX, splitProps } from 'solid-js';

type TextInputProps = {
  name: string;
  // type: 'text' | 'email' | 'tel' | 'password' | 'url' | 'number' | 'date';
  inputmode?: 'decimal' | undefined;
  pattern?: string;
  label?: string;
  placeholder?: string;
  value: string | number | undefined;
  maxLength?: number;
  error: string;
  required?: boolean;
  ref: (element: HTMLInputElement) => void;
  onInput: JSX.EventHandler<HTMLInputElement, InputEvent>;
  onChange: JSX.EventHandler<HTMLInputElement, Event>;
  onBlur: JSX.EventHandler<HTMLInputElement, FocusEvent>;
};

export function TextInput(props: TextInputProps) {
  const [, inputProps] = splitProps(props, ['value', 'label', 'error']);
  return (
    <div>
      {props.label && (
        <label class="label ml:8" for={props.name}>
          {props.label} {props.required && <span>*</span>}
        </label>
      )}
      <input
        id={props.name}
        class="input"
        type="text"
        value={props.value || ''}
        aria-invalid={!!props.error}
        aria-errormessage={`${props.name}-error`}
        {...inputProps}
      />
      {props.error && <div id={`${props.name}-error`}>{props.error}</div>}
    </div>
  );
}
