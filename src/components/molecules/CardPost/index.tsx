import { ButtonLink } from '@/atoms';
import { CSSArticle, CSSImage, CSSInfo } from './styles';

interface CardPostProps {
  cover: string;
  title: string;
  description: string;
  slug: string;
}

const CardPost = ({ cover, title, description, slug }: CardPostProps) => {
  return (
    <CSSArticle>
      <CSSImage>
        <img src={cover} alt={title} loading="lazy" width="290" height="150" />
      </CSSImage>
      <CSSInfo>
        <h2>{title}</h2>
        <p>{description}</p>
        <ButtonLink to="/blog/$slug" params={{ slug }}>Leer más</ButtonLink>
      </CSSInfo>
    </CSSArticle>
  );
};

export default CardPost;
