import React from "react";
import { SectionContainer } from "../style";
import styled from "@emotion/styled";
import logo from "../../../img/logo.png";
import { Button } from "@mui/material";
import { H6 } from "../../../layouts/TextStyles";

const Navbar = () => {
  return (
    <NavBarSection>
      <SectionContainer style={{ marginTop: 0, marginBottom: 0 }}>
        <NavbarWrapper>
          <LogoWrapper src={logo}></LogoWrapper>
          <PhoneNumberWrapper>
            <PhoneNumber href="tel:88003506087">8 (776) 667-64-65</PhoneNumber>
            <CallUsButton variant="outlined">Перезвоните нам</CallUsButton>{" "}
          </PhoneNumberWrapper>
        </NavbarWrapper>
      </SectionContainer>
    </NavBarSection>
  );
};

export default Navbar;

const PhoneNumberWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;
const PhoneNumber = styled.a`
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  color: #212121;
`;
const CallUsButton = styled(Button)`
  text-transform: lowercase;
  font-size: 16px;
  line-height: 20px;
  text-transform: lowercase;
  letter-spacing: 0.02em;
  cursor: pointer;
`;
const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const NavBarSection = styled.div`
  background-color: #e9eaec;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
`;
const LogoWrapper = styled.img`
  width: 50px;
  height: 100%;
`;
