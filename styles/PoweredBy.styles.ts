import styled from "styled-components";

export const StyledPoweredByElement = styled.div`
  padding: 20px 0 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 7px;

  @media (min-width: 1024px) {
    padding: 40px 0;
  }

  span {
    display: inline-block;
    font-size: 14px;
    line-height: 30px;
    color: #2e3142;
  }
`;
