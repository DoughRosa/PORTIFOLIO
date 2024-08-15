import styled from "styled-components";

const ConteudoStyled = styled.div`
  color: ${(props) => props.theme.colors.quartiary};
  height: 4500px;
  width: 40vw;
  background-color: #101010;
  margin-left: 50vw;
  align-items: center;

  @media (max-width: 2560px) {
    height: 6000px;
  }

  @media (max-width: 1920px) {
    height: 5400px;
  }

  @media (max-width: 1760px) {
    height: 4650px;
  }

  @media (max-width: 1440px) {
    height: 4500px;
  }

  @media (max-width: 1024px) {
    height: 4400px;
  }

  @media (max-width: 768px) {
    width: 80vw;
    height: 4200px;
    margin-left: 10vw;
  }

  @media (max-width: 425px) {
    position: relative;
    width: 102vw;
    height: 4250px;
    margin: 0vw;
    padding: 5px;
  }
`;

export default ConteudoStyled;