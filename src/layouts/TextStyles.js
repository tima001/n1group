import styled from "@emotion/styled";

export const H1 = styled.h1`
  font-family: "Gilroy";

  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;
  color: ${(props) => (props.color ? props.color : "#000000")};
  margin: 0;

  @media screen and (max-width: 480px) {
    font-size: 34px;
    line-height: 130%;
  }
`;
export const H2 = styled.h2`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 64px;
  color: ${(props) => (props.color ? props.color : "#000000")};
  margin: 0;

  @media screen and (max-width: 480px) {
    font-size: 34px;
    line-height: 130%;
  }
`;

export const Body1 = styled.p`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  color: ${(props) => (props.color ? props.color : "#000000")};
`;

export const Body2 = styled.p`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  margin: 0;
  color: ${(props) => (props.color ? props.color : "#000000")};

  @media screen and (max-width: 480px) {
    font-size: 14px;
    /* line-height: 130%; */
  }
`;

export const H3 = styled.h3`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: ${(props) => (props.theme.weight ? props.theme.weight : 700)};
  font-size: 32px;
  line-height: 48px;
  margin: 0;
  color: ${(props) => (props.color ? props.color : "#000000")};
`;

export const H4 = styled.h4`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 140%;
  margin: 0;
  color: ${(props) => (props.color ? props.color : "#000000")};
`;
export const H5 = styled.h5`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 140%;
  margin: 0;
  color: ${(props) => (props.color ? props.color : "#000000")};
`;

export const H6 = styled.h6`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  margin: 0;
  color: ${(props) => (props.color ? props.color : "#000000")};
`;

export const BoldText = styled.p`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  margin: 0;
  color: ${(props) => (props.color ? props.color : "#000000")};
`;

export const Caption = styled.p`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => (props.size ? props.size : "14px")};
  line-height: 140%;
  margin: 0;
  color: ${(props) => (props.color ? props.color : "#000000")};
`;
export const LowerCaseH3 = styled.h3`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: auto;
  text-transform: lowercase;
  margin: 0;
  letter-spacing: 0.02em;
  color: ${(props) => (props.color ? props.color : "#000000")};
  @media screen and (max-width: 970px) {
    font-size: 36px;
  }
  @media screen and (max-width: 475px) {
    font-size: 28px;
  }
`;
