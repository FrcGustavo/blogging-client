import { Button } from '@/atoms';
import { CSSArticle, CSSImage, CSSInfo } from './styles';

interface CardPostProps {
  cover: string;
  title: string;
  description: string;
  href: string;
}

const CardPost = ({ cover, title, description, href }: CardPostProps) => {
  return (
    <CSSArticle>
      <CSSImage>
        <img src={cover} alt={title} loading="lazy" width="290" height="150" />
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
