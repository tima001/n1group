import React from "react";
import {
  SectionContainer,
  FlexBox,
  FooterWrapper,
  FlexSpaceBtwn,
  FooterContent,
  FooterLogo,
} from "../style";
import { Body1 } from "../../../layouts/TextStyles";
import roundInstagramLogo from "../../../logo/roundInstagramLogo.svg";
import roundTelegramLogo from "../../../logo/roundTelegramLogo.svg";
import roundTwitterLogo from "../../../logo/roundTwitterLogo.svg";
import Logo from "../../../img/demoLogo.png";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#091114" }}>
      <SectionContainer style={{ marginBottom: "0px" }}>
        <FooterWrapper>
          <FooterContent>
            <img style={{ width: "50px", height: "100%" }} src={Logo} />
            <Body1 style={{ color: "#FFF", lineHeight: "50px" }}>О нас</Body1>
            <Body1 style={{ color: "#FFF", lineHeight: "50px" }}>
              Наши особенности
            </Body1>
            <Body1 style={{ color: "#FFF", lineHeight: "50px" }}>
              Характеристики болида
            </Body1>
            <Body1 style={{ color: "#FFF", lineHeight: "50px" }}>
              Наши условия
            </Body1>
            <Body1 style={{ color: "#FFF", lineHeight: "50px" }}>
              Контакты
            </Body1>
          </FooterContent>

          <FooterLogo>
            <img src={roundInstagramLogo} />
            <img src={roundTelegramLogo} />
            <img src={roundTwitterLogo} />
          </FooterLogo>
        </FooterWrapper>
      </SectionContainer>
    </div>
  );
};

export default Footer;
