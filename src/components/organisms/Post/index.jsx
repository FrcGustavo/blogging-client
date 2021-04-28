import {
  CSSPostContainer,
  CSSPostCard,
  CSSImage,
  CSSPostContent,
  CSSTitle,
  CSSPost,
} from './styles';

const Post = ({ cover, title, body }) => {
  return (
    <CSSPostContainer>
      <CSSPostCard>
        <CSSImage>
          <img src={cover} alt={title} />
        </CSSImage>
        <CSSPostContent>
          <CSSTitle>
            <h1>{title}</h1>
          </CSSTitle>
          <CSSPost dangerouslySetInnerHTML={{ __html: body }} />
        </CSSPostContent>
      </CSSPostCard>
    </CSSPostContainer>
  );
};
export default Post;
