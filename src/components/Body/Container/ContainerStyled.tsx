import styled from "styled-components";

const ContainerStyled = styled.div`
    color: ${(props) => props.theme.colors.quartiary};
    width: 36vw;
    padding: 2vw;
    justify-content: center;
    
    @media screen and (max-width: 1024px) {
        flex-direction: column;
    }

    @media (max-width: 768px) {
    width: 80vw;
  }

  @media (max-width: 425px) {
    width: 98vw;
  }

  @media (max-width: 375px) {
    width: 98vw;
  }
`

export default ContainerStyled;