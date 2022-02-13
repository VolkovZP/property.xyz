import styled from "styled-components";

export const StyledServiceFeedback = styled.div`
  padding: 8px 0;

  display: flex;
  align-items: center;
  gap: 10px;
  color: #474747;
  font-size: 12px;

  @media (min-width: 1024px) {
    padding: 8px 0;
    font-size: 16px;
  }

  span {
    display: inline-block;
    padding: 2px 7px;
    background-color: #ff8400;
    color: #ffffff;
    font-size: 12px;
    text-transform: uppercase;
    border-radius: 3px;
  }

  a {
    cursor: pointer;
    color: inherit;
    text-decoration: underline;
  }
`;
