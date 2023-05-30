import React from "react";
import {
  SectionContainer,
  Header,
  FlexBox,
  Title,
  ColumnGap,
  LeftTitle,
  FlexSpaceBtwn,
  RightTitle,
} from "../style";
import { LowerCaseH3, BoldText, H4, H1 } from "../../../layouts/TextStyles";
import characteristics from "../../../img/characteristics.png";

const CarCharacteristics = () => {
  return (
    <SectionContainer>
      <Header>
        <Title>
          <FlexBox>
            <LowerCaseH3 style={{ color: "#C30303" }}>
              Характеристики
            </LowerCaseH3>
            <LowerCaseH3>болида</LowerCaseH3>
          </FlexBox>
          <BoldText>по проектировочным данным</BoldText>
        </Title>
      </Header>

      <img src={characteristics} style={{ width: "100%", height: "auto" }} />
    </SectionContainer>
  );
};

export default CarCharacteristics;
