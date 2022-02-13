import styled from "styled-components";

export const StyledForm = styled.div`
  width: 100%;

  background-color: #ffffff;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    height: fit-content;
    padding: 20px 30px 20px 0;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const MainBtn = styled.button`
  cursor: pointer;
  background-color: #f95258;
  border: 0;
  border-radius: 0px 0px 10px 10px;
  padding: 20px 50px;
  color: #ffffff;
  font-size: 18px;

  @media (min-width: 1024px) {
    border-radius: 0;
  }

  :hover {
    background-color: #b92d32;
  }
`;
