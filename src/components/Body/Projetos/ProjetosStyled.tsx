import styled from 'styled-components';

const ProjetosStyled = styled.div`
  color: ${props => props.theme.colors.quartiary};
  width: 36vw;
  padding: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    width: 80vw;
  }

  @media (max-width: 425px) {
    width: 100vw;
  }

  @media (max-width: 375px) {
    width: 90vw;
  }
`;

export default ProjetosStyled;
