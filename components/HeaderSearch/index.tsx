import React, { ChangeEvent, MouseEventHandler, useState } from "react";

import DownArrow from "./DownArrow";
import SearchSVG from "./SearchSVG";
import TrendSVG from "./TrendSVG";

import {
  StyledHeaderSearch,
  StyledHeaderSearchSelect,
  StyledHeaderSearchSelectItems,
  StyledSearchGroup,
} from "../../styles/HeaderSearch.styles";

const HeaderSearch = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectValue, setSelectValue] = useState<string>("");
  const [showTrendList, setShowTrendList] = useState<boolean>(false);

  const handleSubmit = () => {
    console.log("SearchData: ", {
      inputValue,
      selectValue,
    });

    setInputValue("");
    setSelectValue("");
    setShowTrendList(false);
  };

  const onSelectChange: React.MouseEventHandler<HTMLSpanElement> = (e) => {
    setSelectValue(e.currentTarget.innerText);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <StyledSearchGroup>
      <StyledHeaderSearchSelect
        onClick={() => setShowTrendList(!showTrendList)}
      >
        <TrendSVG />
        <div className="selectedValue">
          {selectValue ? selectValue : "Research"}
        </div>
        <DownArrow color={"#ffffff"} />
        {showTrendList && (
          <StyledHeaderSearchSelectItems>
            <span onClick={onSelectChange}>Top</span>
            <span onClick={onSelectChange}>Down</span>
          </StyledHeaderSearchSelectItems>
        )}
      </StyledHeaderSearchSelect>
      <StyledHeaderSearch>
        <input
          type="text"
          value={inputValue}
          placeholder="Chester, Cheshire, UK"
          onChange={onInputChange}
        />
        <div onClick={handleSubmit}>
          <SearchSVG />
        </div>
      </StyledHeaderSearch>
    </StyledSearchGroup>
  );
};

export default HeaderSearch;
