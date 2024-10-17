import styled from "styled-components";

const ApresentacaoStyled = styled.div`
  color: ${(props) => props.theme.colors.terciary};
  background-color: black;
  position: fixed;
  width: 40vw;
  margin-left: 10vw;
  align-items: center;

  @media (max-width: 2560px) {
  }

  @media (max-width: 768px) {
    position: relative;
    width: 80vw;
  }

  @media (max-width: 425px) {
    position: relative;
    width: 428px;
    margin: 0vw;
    padding: 10px;
  }

  @media (max-width: 375px){
    width: 352px;
    margin: 0vw;
  }

  @media (max-width: 320px){
    width: 300px;
    margin: 0vw;
  }
`;

export default ApresentacaoStyled;