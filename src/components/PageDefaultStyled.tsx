import styled from "styled-components";

const PageDefaultStyled = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default PageDefaultStyled;
