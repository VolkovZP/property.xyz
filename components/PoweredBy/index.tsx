import React from "react";

import BitmapSVG from "./BitmapSVG";

import { StyledPoweredByElement } from "../../styles/PoweredBy.styles";

const PoweredBy = () => {
  return (
    <StyledPoweredByElement>
      <span>Powered by</span>
      <BitmapSVG />
    </StyledPoweredByElement>
  );
};

export default PoweredBy;
