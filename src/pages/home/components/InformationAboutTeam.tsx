import React from "react";
import {
  SectionContainer,
  LeftTitle,
  LittleDarkButton,
  ImgAboutUs,
  AboutUsWrapper,
  AboutUsTitle,
  AboutUsContent,
} from "../style";
import BannerImg from "../../../img/bannerPhoto.png";
import { FlyingSaucer } from "@phosphor-icons/react";

const InformationAboutTeam = () => {
  return (
    <SectionContainer>
      <AboutUsWrapper>
        <ImgAboutUs src={BannerImg} />

        <LeftTitle
          style={{
            gap: "35px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <AboutUsTitle>Мы первые во всем!</AboutUsTitle>
          <AboutUsContent>
            из 240 команд мира мы прошли в топ 100 мира по отборочному экзамену
            в Германии и топ 15 России
          </AboutUsContent>
        </LeftTitle>
      </AboutUsWrapper>
    </SectionContainer>
  );
};

export default InformationAboutTeam;
