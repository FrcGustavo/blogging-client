import Link from 'next/link';
import { CSSPost } from 'root/styles';
import { CSSEditor, CSSMarkdown, CSSHeader, CSSHtml } from './styles';

const Editor = ({ data, html, onHandleChange, onSave, onPublic, onMetadata, disabled }) => {
  return (
    <CSSEditor>
      <CSSHeader>
        <button onClick={onSave} disabled={disabled}>Guardar</button>
        <button onClick={onPublic} disabled={disabled}>{data.isPublic ? 'Borrador' : 'Publicar'}</button>
        <button onClick={onMetadata} disabled={disabled}>Metadata</button>
        <Link href={`/dashboard/posts/${data.id}/draft`}>
          <a target="_blank">Leer</a>
        </Link>
      </CSSHeader>
      <CSSMarkdown>
        <textarea name="body" onChange={onHandleChange} defaultValue={data.body}/>
      </CSSMarkdown>
      <CSSHtml>
        <CSSPost dangerouslySetInnerHTML={{ __html: html }}/>
      </CSSHtml>
    </CSSEditor>
  );
}

export default Editor;