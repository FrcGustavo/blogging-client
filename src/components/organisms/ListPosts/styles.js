import styled from 'styled-components';

export const CSSList = styled.div`
  padding: 28px;

  > div {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 56px;
  }

  > div article {
    justify-self: center;
  }

  @media screen and (min-width: 680px) {
    > div {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (min-width: 1000px) {
    > div {
      grid-template-columns: 1fr 1fr 1fr;
    }

    article:nth-child(1),
    article:nth-child(4),
    article:nth-child(7) {
      justify-self: start;
    }

    article:nth-child(2),
    article:nth-child(5),
    article:nth-child(8) {
      justify-self: center;
    }

    article:nth-child(3),
    article:nth-child(6),
    article:nth-child(9) {
      justify-self: end;
    }
  }
`;
