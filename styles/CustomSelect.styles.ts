import styled from "styled-components";

export const StyledCustomSelect = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px 0;

  span {
    display: inline-block;
    font-weight: normal;
    font-size: 20px;
    color: #bcbcbc;
  }
`;

export const CustomSelectOptions = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  left: 0;
  top: 80px;

  display: flex;
  flex-direction: column;
  align-items: left;

  background-color: #ffffff;
  border-radius: 0 0 10px 10px;

  @media (min-width: 1024px) {
    top: 76px;
  }

  div {
    cursor: pointer;
    padding: 5px 30px;
    font-size: 16px;
    line-height: 28px;
    color: #2c3142;

    :hover {
      background-color: #f7f7f7;
    }
  }
`;
