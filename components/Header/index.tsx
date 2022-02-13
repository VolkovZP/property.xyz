import React from "react";
import Link from "next/link";

import HeaderSearch from "../HeaderSearch";
import MainLogoSVG from "./MainLogoSVG";

import { StyledHeader } from "../../styles/Header.styles";
import { HeaderContainer, Background } from "../../styles/Global.styles";

const Header = () => {
  return (
    <Background color="#2c3142">
      <HeaderContainer>
        <StyledHeader>
          <Link href="/">
            <a>
              <MainLogoSVG />
            </a>
          </Link>
          <HeaderSearch />
        </StyledHeader>
      </HeaderContainer>
    </Background>
  );
};

export default Header;
