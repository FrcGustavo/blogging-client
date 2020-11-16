import { CSSCardContainer, CSSCard, CSSButton } from  './styles.js';

const HomePost = () => {
  return (
    <CSSCardContainer>
      <CSSCard>
        <div>
          <img src="https://res.cloudinary.com/dwapbqqbo/image/upload/v1592516373/ppyvrszlr0s2wxigqpae.jpg" alt=""/>
        </div>
        <div>
          <h3>Como crear el juego de la vida en JavaScript</h3>
          <p>El juego de la vida es un sistema que puede evolucionar como la vida, pero desde tu computadora.</p>
          <CSSButton>
            LEER MÁS
          </CSSButton>
        </div>
      </CSSCard>
    </CSSCardContainer>
  );
}

export default HomePost;
