import styled from "styled-components";

export const StyledBackgroundElement = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  padding: 10px 0 0;
  background-color: #f3f4fa;
  display: flex;
  justify-content: center;

  svg {
    position: relative;
    min-width: 700px;
    bottom: 0;
    height: 150px;
  }

  @media (min-width: 1024px) {
    padding: 100px 0 0;

    svg {
      position: relative;
      width: 100%;
      bottom: 0;
    }
  }
`;
