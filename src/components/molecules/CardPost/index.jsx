import { Button } from '@/atoms';
import { CSSArticle, CSSImage, CSSInfo } from './styles';

const CardPost = ({ cover, title, description, href }) => {
  return (
    <CSSArticle>
      <CSSImage>
        <img src={cover} alt={title} />
      </CSSImage>
      <CSSInfo>
        <h2>{title}</h2>
        <p>{description}</p>
        <Button href={`/blog/${href}`}>Leer más</Button>
      </CSSInfo>
    </CSSArticle>
  );
};

export default CardPost;
