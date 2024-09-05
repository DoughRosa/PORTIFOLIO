import styled from "styled-components";

const ConteudoStyled = styled.div`
  color: ${(props) => props.theme.colors.quartiary};
  height: 100%;
  width: 40vw;
  background-color: #101010;
  margin-left: 50vw;
  align-items: center;

  @media (max-width: 768px) {
    width: 80vw;
    margin-left: 10vw;
  }

  @media (max-width: 425px) {
    position: relative;
    width: 102vw;
    margin: 0vw;
    padding: 5px;
  }
`;

export default ConteudoStyled;