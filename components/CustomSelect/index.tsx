import React, { useState } from "react";

import DownArrow from "./DownArrow";

import {
  CustomSelectOptions,
  StyledCustomSelect,
} from "../../styles/CustomSelect.styles";


export interface IOptions {
  id: number,
  label: string,
  value: string,
}

interface ICustomeSelectProps {
  options: Array<IOptions>,
  defaultValue?: string,
  selectedOption: IOptions | null,
  onSelectOption: React.Dispatch<React.SetStateAction<null | IOptions>>,
}



const CustomSelect = ({
  options,
  defaultValue,
  selectedOption,
  onSelectOption,
}: ICustomeSelectProps) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  return (
    <>
      <StyledCustomSelect onClick={() => setShowOptions(!showOptions)}>
        <span>{selectedOption?.label || "Please select"}</span>
        <DownArrow color="#000000" />
      </StyledCustomSelect>
      {showOptions && (
        <CustomSelectOptions>
          {options?.length ? (
            options.map((option) => (
              <div
                key={option.id}
                onClick={() => {
                  onSelectOption(option);
                  setShowOptions(false);
                }}
              >
                {option.label}
              </div>
            ))
          ) : (
            <div>No options</div>
          )}
        </CustomSelectOptions>
      )}
    </>
  );
};

export default CustomSelect;
