import { Button } from '@/atoms';
import { CSSCardContainer, CSSCard } from './styles';

interface HomePostProps {
  cover: string;
  title: string;
  description: string;
  href: string;
}

const HomePost = ({ cover, title, description, href }: HomePostProps) => {
  return (
    <CSSCardContainer>
      <CSSCard>
        <div>
          <img
            src={cover}
            alt={title}
            loading="lazy" width="290"
            height="190"
          />
        </div>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <Button href={href}>LEER MÁS</Button>
        </div>
      </CSSCard>
    </CSSCardContainer>
  );
};

export default HomePost;
