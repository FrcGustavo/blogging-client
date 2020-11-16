import {CSSPostContainer, CSSImage, CSSTitle, CSSPost} from './styles';

const Post = ({ cover, title, body }) => {
  return (
    <CSSPostContainer>
      <div>
        <CSSImage>
          <img src={cover} alt={title} />
        </CSSImage>
        <CSSTitle>
          <h1>{title}</h1>
        </CSSTitle>
        <CSSPost dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </CSSPostContainer>
  );
}
 export default Post;
 