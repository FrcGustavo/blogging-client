import { InputCover, InputForm, Button } from '@/atoms';
import { CSSMetadata } from './styles';

const Metadata = ({ onHandleChange, data, isOpen, close, lang }) => {
  if (!isOpen) return null;

  return (
    <CSSMetadata>
      <div>
        <InputCover
          name="cover"
          label="Portada"
          cover={data.cover}
          onHandleChange={onHandleChange}
        />
        <InputForm
          type="text"
          name={`${lang}.title`}
          label="Title"
          onHandleChange={onHandleChange}
          value={data[lang].title}
        />
        <InputForm
          type="text"
          name="slug"
          label="Url"
          onHandleChange={onHandleChange}
          customPlaceholder="/blog/"
          value={data.slug}
        />
        <InputForm
          type="text"
          name={`${lang}.keywords`}
          label="Keywords"
          onHandleChange={onHandleChange}
          value={data[lang].keywords}
        />
        <InputForm
          type="textarea"
          name={`${lang}.description`}
          label="Descripción"
          onHandleChange={onHandleChange}
          value={data[lang].description}
        />
        <div>
          <Button onHandleClick={close}>
            Aceptar
          </Button>
        </div>
      </div>
    </CSSMetadata>
  );
}

export default Metadata;