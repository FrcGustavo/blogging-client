import Link from 'next/link';
import { CSSPost } from 'root/styles';
import { CSSEditor, CSSMarkdown, CSSHeader, CSSHtml } from './styles';

const Editor = ({
  data,
  html,
  lang,
  onHandleChange,
  onSave,
  onPublic,
  onMetadata,
  onLanguage,
  disabledButtons,
}) => {
  return (
    <CSSEditor>
      <CSSHeader>
        <button onClick={onSave} disabled={disabledButtons}>
          Guardar
        </button>
        <button onClick={onPublic} disabled={disabledButtons}>
          {data.isPublic ? 'Borrador' : 'Publicar'}
        </button>
        <button onClick={onMetadata} disabled={disabledButtons}>
          Metadata
        </button>
        <button onClick={onLanguage} disabled={disabledButtons}>
          {lang === 'en' ? 'Epañol' : 'Ingles'}
        </button>
        <Link href={`/dashboard/posts/${data.id}/draft`}>
          <a target="_blank">Leer</a>
        </Link>
      </CSSHeader>
      <CSSMarkdown>
        <textarea
          name={`${lang}.body`}
          onChange={onHandleChange}
          value={data[lang].body}
        />
      </CSSMarkdown>
      <CSSHtml>
        <CSSPost dangerouslySetInnerHTML={{ __html: html }} />
      </CSSHtml>
    </CSSEditor>
  );
};

export default Editor;
