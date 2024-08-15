import styled from "styled-components";

const GifStyled = styled.img`
    width: 600px;
    box-shadow: rgba(6, 0, 182, 0.25) 0px 14px 28px, rgba(6, 0, 182, 0.22) 0px 10px 10px;

    @media (max-width: 2560px) {
    width: 900px;
  }

  @media (max-width: 1920px) {
    width: 700px;
  }

  @media (max-width: 1740px) {
    width: 600px;
  }
  
    @media (max-width: 1440px) {
    width: 500px;
  }
  @media (max-width: 1024px) {
    width: 350px;
  }

  @media (max-width: 768px) {
    width: 500px;
  }

  @media (max-width: 425px) {
    width: 380px;
  }

  @media (max-width: 375px) {
    width: 300px;
  }
`;

export default GifStyled;