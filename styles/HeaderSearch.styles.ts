import styled from "styled-components";

export const StyledSearchGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1px;
  width: 100%;

  @media (min-width: 1024px) {
    max-width: 700px;
    width: 100%;
  }
`;

export const StyledHeaderSearch = styled.label`
  cursor: pointer;
  background-color: #363d52;

  width: 100%;
  height: 55px;
  padding: 20px;
  display: flex;
  align-items: center;

  @media (min-width: 1024px) {
    max-width: 545px;
  }

  input {
    border-radius: 0;
    border: 0;
    background-color: inherit;
    width: 100%;
    color: white;
    font-size: 14px;
    line-height: 16px;

    ::placeholder {
      color: #ffffff;
      font-size: 14px;
      line-height: 16px;
      opacity: 1;
    }
  }
`;

export const StyledHeaderSearchSelect = styled.div`
  cursor: pointer;
  position: relative;
  background-color: #363d52;

  height: 55px;
  display: flex;
  align-items: center;
  padding: 20px;

  .selectedValue {
    color: #ffffff;
    font-size: 14px;
    line-height: 16px;
    min-width: 70px;
    width: fit-content;
    padding: 0 20px;
  }
`;

export const StyledHeaderSearchSelectItems = styled.div`
  position: absolute;
  z-index:2;
  top: 55px;
  left: 0;

  width: 100%;
  background-color: #363d52;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;

  span {
    width: 100%;
    padding: 10px 20px;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 16px;
    text-align: center;

    :hover {
      cursor: pointer;
      background-color: #2c3142;
    }
  }
`;
