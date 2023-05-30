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

const BolidSideView = () => {
  const [image, setImage] = useState(RightSideView);
  const [selectedButton, setSelectedButton] = useState("Right Side");

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
    if (selectedButton === "Right Side") setImage(RightSideView);
    if (selectedButton === "Left Side") setImage(LeftSideView);
    if (selectedButton === "Front Side") setImage(FrontSideView);
    if (selectedButton === "Back Side") setImage(RightAngularSideView);
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
        {getButton(selectedButton, "Right Side")}
        {getButton(selectedButton, "Left Side")}
        {getButton(selectedButton, "Front Side")}
        {getButton(selectedButton, "Back Side")}
      </ButtonWrapper>
      <ImageWrapper>
        <img
          src={image}
          style={{ width: "100%", height: "auto" }}
          alt="Bolid Side View"
        />
      </ImageWrapper>
    </SectionContainer>
  );
};

export default BolidSideView;
