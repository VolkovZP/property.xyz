import styled from "styled-components";

export const StyledFormItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 20px;

  @media (min-width: 1024px) {
    gap: 5px;
    height: fit-content;
    padding: 0 30px;
  }

  span {
    display: inline-block;
    font-weight: bold;
    font-size: 14px;
    line-height: 25px;
    color: #363d52;
  }
  input {
    width: 100%;
    border: 0;
    margin: 5px 0;
    height: 25px;
    font-size: 16px;
    line-height: 19px;
    color: #bcbcbc;

    @media (min-width: 1024px) {
      font-size: 20px;
      line-height: 24px;
    }
    ::placeholder {
      color: #bcbcbc;
      opacity: 1;
    }
  }
  ::before {
    content: "";
    display: block;
    position: absolute;
    background-color: ${({ divider }:any) => (divider ? "#d8d8d8" : "transparent")};
    right: 0;
    bottom: 0;
    width: 100%;
    height: 1px;

    @media (min-width: 1024px) {
      width: 2px;
      height: 60px;
    }
  }
`;
