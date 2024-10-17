import styled from "styled-components";

const PageDefaultStyled = styled.div`
    display: flex;
    justify-content: space-between;

  @media (max-width: 2560px) {
    width: 280px;
  }
  @media (max-width: 1920px) {
    width: 200px;
  }
  @media (max-width: 1740px) {
    width: 170px;
  }
  @media (max-width: 1440px) {
    width: 150px;
  }
  @media (max-width: 1024px) {
    width: 100px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: 175px;
  }
  @media (max-width: 425px) {
    width: 105px;
  }
  @media (max-width: 375px) {
    width: 75px;
  }
`;

export default PageDefaultStyled;
