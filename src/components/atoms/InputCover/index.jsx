import { BiImageAdd } from 'react-icons/bi';
import { CSSInputCover, CSSLabel } from './styles';

const InputForm = ({ name, label, cover, onHandleChange }) => {
  return (
    <div>
      <CSSLabel htmlFor={name}>{label}</CSSLabel>
      <CSSInputCover>
        <img src={cover} alt="cover" />
        <div>
          <BiImageAdd/>
          <p>PNG, JPG, GIF menor a 2MB</p>
          <input type="file" id={name} name={name} onChange={onHandleChange} />
        </div>
      </CSSInputCover>
    </div>
  );
}

export default InputForm;
/*
<p>

</p>*/