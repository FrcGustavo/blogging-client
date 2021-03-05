import { Button } from '@/atoms';
import { optimizeImage } from 'root/utils';
import { CSSCardContainer, CSSCard } from './styles.js';

const HomePost = ({ cover, title, description, href }) => {
  return (
    <CSSCardContainer>
      <CSSCard>
        <div>
          <img src={optimizeImage(cover, 'w_290,h_190,c_scale')} alt={title} width="290px" height="190px" />
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
