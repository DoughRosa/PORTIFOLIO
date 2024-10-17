import styled from "styled-components";

const ConteudoStyled = styled.div`
  color: ${(props) => props.theme.colors.quartiary};
  width: 40vw;
  background-color: #101010;
  margin-left: 50vw;
  align-items: center;

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