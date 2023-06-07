import React, { useEffect, useState } from "react";
import {
  SectionContainer,
  Header,
  FlexBox,
  ImageWrapper,
  WhiteButton,
  ButtonWrapper,
  SelectedWhiteButton,
  BolidViewFlex,
} from "../style";
import { LowerCaseH3, BoldText } from "../../../layouts/TextStyles";
import RightSideView from "../../../img/rightSideView.png";
import LeftSideView from "../../../img/leftSideView.png";
import FrontSideView from "../../../img/frontSideVew.png";
import RightAngularSideView from "../../../img/rightAngularSideView.png";
import styled from "@emotion/styled";

const BolidSideView = () => {
  const [image, setImage] = useState(RightSideView);
  const [selectedButton, setSelectedButton] = useState("Справа");

  const getButton = (
    selectedButton: React.SetStateAction<string>,
    buttonName: string
  ) => {
    if (selectedButton === buttonName)
      return <SelectedWhiteButton>{buttonName}</SelectedWhiteButton>;

    return (
      <WhiteButton onClick={() => setSelectedButton(buttonName)}>
        {buttonName}
      </WhiteButton>
    );
  };

  useEffect(() => {
    if (selectedButton === "Справа") setImage(RightSideView);
    if (selectedButton === "Слева ") setImage(LeftSideView);
    if (selectedButton === "Передний") setImage(FrontSideView);
    if (selectedButton === "Вид с угла") setImage(RightAngularSideView);
  }, [selectedButton]);

  return (
    <SectionContainer>
      <Header>
        <BolidViewFlex>
          <LowerCaseH3 style={{ color: "#C30303" }}>
            Рассмотрите ближе
          </LowerCaseH3>
          <LowerCaseH3>Болид от N1 Group</LowerCaseH3>
        </BolidViewFlex>
        <BoldText>со всех сторон</BoldText>
      </Header>
      <ButtonWrapper>
        {getButton(selectedButton, "Справа")}
        {getButton(selectedButton, "Слева ")}
        {getButton(selectedButton, "Передний")}
        {getButton(selectedButton, "Вид с угла")}
      </ButtonWrapper>
      <ImageWrapper>
        <ImageContainer src={image} style={{}} alt="Bolid Side View" />
      </ImageWrapper>
    </SectionContainer>
  );
};

export default BolidSideView;
const ImageContainer = styled.img`
  width: auto;
  height: auto;
  @media screen and (max-width: 1024px) {
    /* width: 100%; */
    height: 376px;
  }
  @media screen and (max-width: 768px) {
    /* width: 100%; */
    height: 250px;
  }
  @media screen and (max-width: 425px) {
    /* width: 100%; */
    height: 160px;
  }
  @media screen and (max-width: 375px) {
    /* width: 100%; */
    height: 130px;
  }
`;
