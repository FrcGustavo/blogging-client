import Image from 'next/image';
import { Button } from '@/atoms';
import { optimizeImage } from 'root/utils';
import { CSSArticle, CSSImage, CSSInfo } from './styles';

const CardPost = ({ cover, title, description, href }) => {
  return (
    <CSSArticle>
      <CSSImage>
        <Image src={cover} alt={title} width={290} height={150} />
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
