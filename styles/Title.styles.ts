import styled from "styled-components";

export const StyledTitle = styled.div`
  width: 100%;
  padding: 15px 0 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (min-width: 1024px) {
    padding: 85px 0 30px;
  }

  h1 {
    width: 100%;
    color: #343434;
    font-weight: bold;
    text-align: center;
    font-size: 25px;
    line-height: 30px;

    @media (min-width: 1024px) {
      width: 780px;
      font-size: 45px;
      line-height: 55px;
    }
  }
  h2 {
    display: none;
    width: 780px;
    color: #343434;
    font-size: 20px;
    line-height: 30px;
    text-align: center;

    @media (min-width: 1024px) {
      display: block;
    }
  }
`;
