import { CSSLabel, CSSInput } from './styles';

const InputForm = ({ type, name, label, placeholder = '', value, onHandleChange, customPlaceholder = false }) => {
  return (
    <div>
      <CSSLabel htmlFor={name}>{label}</CSSLabel>
      <CSSInput>
        {
          customPlaceholder !== false
            ? <span>{customPlaceholder}</span>
            : null 
        }
        {
          type === 'textarea' 
            ? <textarea
                name={name}
                onChange={onHandleChange}
                defaultValue={value}
                placeholder={placeholder}
              />
            : <input 
                type={type}
                name={name}
                id={name}
                onChange={onHandleChange}
                value={value}
                placeholder={placeholder}
              />
        }
      </CSSInput>
    </div>
  );
}

export default InputForm;