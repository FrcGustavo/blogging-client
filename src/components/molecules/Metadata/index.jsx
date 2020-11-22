import { InputCover, InputForm, Button } from '@/atoms';
import { CSSMetadata } from './styles';

const Metadata = ({ onHandleChange, data, isOpen, close }) => {
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
          name="title"
          label="Title"
          onHandleChange={onHandleChange}
          value={data.title}
        />
        <InputForm
          type="text"
          name="slug"
          label="Url"
          onHandleChange={onHandleChange}
          customPlaceholder="https://localhost:3000"
          value={data.slug}
        />
        <InputForm
          type="text"
          name="keywords"
          label="Keywords"
          onHandleChange={onHandleChange}
          value={data.keywords}
        />
        <InputForm
          type="textarea"
          name="description"
          label="Descripción"
          onHandleChange={onHandleChange}
          value={data.description}
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