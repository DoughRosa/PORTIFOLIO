import styled from "styled-components";

const ConteudoStyled = styled.div`
  color: ${(props) => props.theme.colors.quartiary};
  width: 40vw;
  background-color: #101010;
  margin-left: 50vw;
  align-items: center;

  @media (max-width: 2560px) {
    height: 6600px;
  }

  @media (max-width: 1948px) {
    height: 6000px;
  }

  @media (max-width: 1724px) {
    height: 5100px;
  }

  @media (max-width: 1440px) {
    height: 4850px;
  }

  @media (max-width: 1024px) {
    height: 4650px;
  }

  @media (max-width: 768px) {
    margin-left: 10vw;
    width: 614px;
  }

  @media (max-width: 425px) {
    margin: 0vw;
    width: 434px;
    padding: 5px;
  }

  @media (max-width: 375px) {
    position: relative;
    width: 362px;
    margin: 0vw;
    padding: 5px;
  }

  @media (max-width: 320px) {
    position: relative;
    width: 308px;
    margin: 0vw;
    padding: 5px;
  }
`;

export default ConteudoStyled;