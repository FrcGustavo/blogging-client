import { Button } from '@/atoms';
import { optimizeImage } from 'root/utils';
import { CSSArticle, CSSImage, CSSInfo } from './styles';

const CardPost = ({ cover, title, description, href }) => {

  return (
    <CSSArticle>
      <CSSImage>
        <img
          src={cover}
          alt={title}
          width="290px"
          height="150px"
        />
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
