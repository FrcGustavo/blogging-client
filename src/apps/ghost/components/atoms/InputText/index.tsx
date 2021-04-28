import { FC } from 'react';
import { CSSLabel, CSSInput } from './styles';

type InputTextProps = {
  type: string;
  label: string;
  placeholder: string;
  name: string,
  value?: string;
  onChange?: () => void;
}

const InputText: FC<InputTextProps> = ({ type, label, placeholder, value, name, onChange }) => {
  return (
    <div>
      <CSSLabel>{label}</CSSLabel>
      <CSSInput
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default InputText;
