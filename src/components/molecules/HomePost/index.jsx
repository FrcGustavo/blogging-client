import { Button } from '@/atoms';
import { CSSCardContainer, CSSCard } from  './styles.js';

const HomePost = ({ cover, title, description, href }) => {
  return (
    <CSSCardContainer>
      <CSSCard>
        <div>
          <img src={cover} alt={title} />
        </div>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <Button href={href}>
            LEER MÁS
          </Button>
        </div>
      </CSSCard>
    </CSSCardContainer>
  );
}

export default HomePost;
