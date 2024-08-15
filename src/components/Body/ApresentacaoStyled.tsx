import styled from "styled-components";

const ApresentacaoStyled = styled.div`
  color: ${(props) => props.theme.colors.terciary};
  background-color: black;
  position: fixed;
  height: 950px;
  width: 40vw;
  margin-left: 10vw;
  align-items: center;

  @media (max-width: 2560px) {
    height: 100vh;
  }

  @media (max-width: 768px) {
    position: relative;
    width: 80vw;
    height: 750px;
  }

  @media (max-width: 425px) {
    position: relative;
    width: 100vw;
    height: 750px;
    margin: 0vw;
    padding: 10px;
  }

  @media (max-width: 320px){
    height: 800px;
    width: 90vw;
    margin: 0vw;
  }
`;

export default ApresentacaoStyled;