import styled from 'styled-components';

export const CSSFooter = styled.footer`
background: linear-gradient(90deg, #1C2237, #4B5A8A);
padding: 28px;
`
export const CSSSocialMedia = styled.div`
display: grid;
grid-template-columns: repeat(3, 28px);
gap: 0 14px;

a {
    font-size: 0;
}

a svg {
    font-size: 28px;
    color: #6EC6FF;
}
`;