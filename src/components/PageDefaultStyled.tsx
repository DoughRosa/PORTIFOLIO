import styled from "styled-components";

const PageDefaultStyled = styled.div`
    display: flex;
    justify-content: space-between;

  @media (max-width: 2560px) {
    height: 300px;
    width: 280px;
  }
  @media (max-width: 1920px) {
    height: 200px;
    width: 200px;
  }
  @media (max-width: 1740px) {
    height: 170px;
    width: 170px;
  }
  @media (max-width: 1440px) {
    height: 150px;
    width: 150px;
  }
  @media (max-width: 1024px) {
    height: 100px;
    width: 100px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    height: 175px;
    width: 175px;
  }
  @media (max-width: 425px) {
    width: 105px;
    height: 115px;
  }
  @media (max-width: 375px) {
    width: 75px;
    height: 100px;
  }
`;

export default PageDefaultStyled;
