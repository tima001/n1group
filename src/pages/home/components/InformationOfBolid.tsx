import React from "react";
import { InfoSectionContainer, Header, FlexBox, Title } from "../style";
import { LowerCaseH3, BoldText } from "../../../layouts/TextStyles";
import ImgOfInformation from "../../../img/bolidInformation.png";

const InformationOfBolid = () => {
  return (
    <InfoSectionContainer>
      <Header>
        <Title>
          <FlexBox>
            <LowerCaseH3>Информация О БОЛИДЕ</LowerCaseH3>
          </FlexBox>
          <BoldText>
            поскольку требования к болиду очень строгие постройка требует
            <br />
            скрупулезного расчета
          </BoldText>
        </Title>
      </Header>
      <img src={ImgOfInformation} style={{ width: "100%", height: "auto" }} />
    </InfoSectionContainer>
  );
};

export default InformationOfBolid;
