import styled from "@emotion/styled";
import { Button } from "@mui/material";
import halfOfFrontCar from "../../img/front-half-of-car.png";

export const Main = styled.main`
  height: 100%;
  justify-content: center;
`;

export const Wrapper = styled.div`
  background-color: #e9eaec;
  min-height: 100vh;
  height: 100%;
`;

export const CallbackInput = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const SponsorLogo = styled.img`
  width: 300px;
  height: fit-content;
`;
export const SponsorList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const ContactsContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin-right: auto;
`;

export const ContactsForm = styled.div`
  display: flex;
  width: 100%;
  max-width: 500px;
  @media (max-width: 800px) {
    width: auto;
    max-width: none;
  }
`;

export const ContactsText = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #6d6d6d;
  opacity: 0.88;
  @media (max-width: 1040px) {
    font-size: 18px;
    line-height: 22px;
    margin: 0;
  }
  @media (max-width: 800px) {
    margin: 0;
  }
  @media (max-width: 1279px) {
    font-size: 20px;
    line-height: 24px;
    margin-top: 8px;
  }
`;

export const ContactsTitle = styled.h2`
  font-family: "Gilroy";
  font-size: 48px;
  font-weight: 500;
  line-height: 48px;
  margin: 0;
  @media (max-width: 1040px) {
    font-size: 28px;
    line-height: 34px;
  }
  @media (max-width: 1279px) {
    font-size: 38px;
    line-height: 44px;
    letter-spacing: 0.02em;
  }
  @media (max-width: 376px) {
    font-size: 28px;
    letter-spacing: 0;
    line-height: auto;
  }
`;

export const ContactsWrapper = styled.div`
  position: relative;
  padding: 48px 102px 20px 76px;
  border-radius: 24px;
  justify-content: space-between;
  display: flex;
  margin: 0;
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 40px;
    padding: 20px 24px 28px;
    border-radius: 16px;
  }

  @media (max-width: 1280px) {
    padding: 48px 80px 40px 40px;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  @media (max-width: 440px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const InputTextInput = styled.input`
  font-weight: 500;
  font-size: 24px;
  padding: 8px 0px 8px 16px;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: 0.02em;
  border: 1px solid #000000;
  border-radius: 12px;
  @media (max-width: 1040px) {
    padding: 9px 14px 11px;
    font-size: 20px;
    line-height: 24px;
  }
  :focus-visible {
    outline: #000 auto 1px;
  }
`;

export const SectionContainer = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  margin-bottom: 150px;
  padding-right: 20px;
  padding-left: 20px;
  @media screen and (max-width: 950px) {
    margin: 0;
    margin-bottom: 100px;
  }
`;
export const InfoSectionContainer = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  margin-bottom: 150px;
  padding-right: 20px;
  padding-left: 20px;
  margin-top: 200px;
  @media screen and (max-width: 950px) {
    margin: 0;
    margin-top: 100px;
    margin-bottom: 100px;
  }
`;
export const MainSectionContainer = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  margin-bottom: 150px;
  padding-right: 20px;
  padding-left: 20px;

  @media screen and (max-width: 950px) {
    padding: 0;
    margin: 0;
    margin-bottom: 100px;
  }
`;

export const FrontCarImg = styled.div`
  background-image: url(${halfOfFrontCar});
  position: absolute;
  bottom: 0px;
  right: 0;
  width: 270px;
  height: 101px;
  background-repeat: no-repeat;

  @media (max-width: 1040px) {
    display: none;
  }
`;

export const DarkButton = styled(Button)`
  background-color: #000;
  color: #fff;
  text-transform: lowercase;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  padding: 24px 0px;
  width: 250px;
  border-radius: 10px;

  &:hover {
    background-color: #000 !important;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const HeaderTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 42.6344px;
  line-height: 52px;
  letter-spacing: 0.04em;
`;

export const Title = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const LeftTitle = styled.div`
  text-align: left;
  gap: 24px !important;
  @media screen and (max-width: 1000px) {
    gap: 16px !important;
  }
`;

export const RightTitle = styled.div`
  text-align: right;
  gap: 8px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const ColumnGap = styled.header`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 88px;
`;

export const FlexSpaceBtwn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FlexSpaceAround = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 120px;
  margin-top: 80px;
  @media screen and (max-width: 1024px) {
    margin-bottom: 80px;
    margin-top: 60px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
    margin-top: 50px;
  }
  @media screen and (max-width: 425px) {
    margin-bottom: 40px;
    margin-top: 30px;
  }
  @media screen and (max-width: 375px) {
    margin-bottom: 30px;
    margin-top: 28px;
  }
`;
export const WhiteButton = styled(Button)`
  background-color: #fff;
  color: #000;
  text-transform: lowercase;
  font-weight: 600;
  font-size: 24px;
  line-height: 40px;
  padding: 28px;
  width: 250px;

  &:hover {
    outline: #000 auto 1px;
    background-color: #fff;
    transform: translateZ(0) rotate(3deg);
  }
  @media (max-width: 1024px) {
    width: 200px;
    font-weight: 500;
    font-size: 20px;
    line-height: 40px;
    padding: 24px;
  }
  @media (max-width: 768px) {
    width: 170px;
    font-weight: 400;
    font-size: 18px;
    line-height: 40px;
    padding: 24px;
  }
  @media (max-width: 425px) {
    padding: 0px;
    width: 80px;
    font-size: 14px;
  }
  @media (max-width: 375px) {
    padding: 0px;
    width: 76px;
    font-size: 14px;
  }
  @media (max-width: 375px) {
    padding: 0px;
    width: 60px;
    font-size: 12px;
  }
`;
export const SelectedWhiteButton = styled(Button)`
  background-color: #000;
  color: #fff;
  text-transform: lowercase;
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  padding: 28px;
  width: 250px;

  &:hover {
    outline: #000 auto 1px;
    background-color: #000;
    color: #fff;
    transform: translateZ(0) rotate(3deg);
  }

  @media (max-width: 1024px) {
    width: 205px;
    font-weight: 500;
    font-size: 20px;
    line-height: 40px;
    padding: 24px;
  }

  @media (max-width: 768px) {
    width: 170px;
    font-weight: 400;
    font-size: 18px;
    line-height: 40px;
    padding: 24px;
  }
  @media (max-width: 425px) {
    padding: 0px;
    width: 80px;
    font-size: 14px;
  }
  @media (max-width: 375px) {
    padding: 0px;
    width: 76px;
    font-size: 14px;
  }
  @media (max-width: 375px) {
    padding: 0px;
    width: 60px;
    font-size: 12px;
  }
`;
export const LittleDarkButton = styled(Button)`
  background-color: #000;
  color: #fff;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  &:hover {
    background-color: #000 !important;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 75px 0px;
  justify-content: space-between;
  @media screen and (max-width: 1400px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (max-width: 1156px) {
    flex-direction: column;
  }
`;
export const FooterLogo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 56px;
  align-items: center;
  @media screen and (max-width: 1156px) {
    flex-direction: column;
    gap: 16px;
    margin-bottom: 16px;
    align-items: flex-start;
  }
`;

export const WhiteBG = styled.div`
  background-color: #f4f4f5;
  padding-top: 100px;
  padding-bottom: 20px;
`;
export const ImgContainer = styled.img`
  width: 270px;
  height: 260px;
  border-radius: 16px;
  overflow: hidden;
`;

export const Card = styled.div`
  display: grid;
  justify-items: center;
  gap: 24px;
`;
export const CardTextContainer = styled.div`
  display: grid;
  justify-items: center;
  gap: 8px;
`;

export const TitleText = styled.h5`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  margin: 0;
  color: #212121;
`;
export const ImgAboutUs = styled.img`
  width: 628px;
  height: 459px;
  @media screen and (max-width: 1170px) {
    width: 450px;
    height: auto;
  }
  @media screen and (max-width: 475px) {
    width: 350px;
    height: auto;
  }
`;
export const AboutUsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 0;
  @media screen and (max-width: 877px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;

export const AboutUsTitle = styled.h3`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;
  text-transform: lowercase;
  margin: 0;
  letter-spacing: 0.02em;
  color: ${(props) => (props.color ? props.color : "#000000")};
  @media screen and (max-width: 1000px) {
    font-size: 36px;
  }
  @media screen and (max-width: 475px) {
    font-size: 28px;
    text-align: center;
  }
`;

export const AboutUsContent = styled.h3`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: auto;
  max-width: 400px;
  margin: 0;
  letter-spacing: 0.02em;
  color: ${(props) => (props.color ? props.color : "#000000")};
  @media screen and (max-width: 1000px) {
    font-size: 16px;
    max-width: 350px;
  }
  @media screen and (max-width: 877px) {
    text-align: justify;
  }
  @media screen and (max-width: 475px) {
    font-size: 16px;
    text-align: left;
    max-width: 300px;
  }
`;

export const ContentText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: auto;
  margin: 0;
  text-align: center;
  color: #a3a3a4;
`;

export const BolidViewFlex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  @media screen and (max-width: 739px) {
    flex-direction: column;
    gap: 0px;
    align-items: center;
  }
`;
export const TeamWrapper = styled.div`
  padding: 0;
  @media screen and (max-width: 1540px) {
    padding-left: 80px;
    padding-right: 80px;
  }
  @media screen and (max-width: 563px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (max-width: 440px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;
export const AllMainContent = styled.div`
  display: flex;
  height: max-content;
  min-height: 720px;
  position: relative;
  @media screen and (max-width: 932px) {
    min-height: 660px;
  }
  @media screen and (max-width: 479px) {
    min-height: 550px;
  }
`;
export const ImgBaleetView = styled.img`
  width: 750px;
  height: 345px;
  position: absolute;
  right: 100px;
  bottom: 60px;
  @media screen and (max-width: 932px) {
    width: 600px;
    height: 276px;
    right: 50px;
    bottom: 0px;
  }
  @media screen and (max-width: 742px) {
    width: 500px;
    height: 230px;
    right: 50px;
    bottom: 0px;
  }
  @media screen and (max-width: 590px) {
    width: 400px;
    height: 184px;
    right: 8px;
    bottom: 0px;
  }
  @media screen and (max-width: 480px) {
    width: 350px;
    height: 161px;
  }
  @media screen and (max-width: 480px) {
    width: 300px;
    height: 138px;
  }
`;

export const FirstMainContent = styled.div`
  width: 50%;
  display: flex;
  padding-left: 20px;
  align-items: center;
  background-color: #091114;
  padding: 0;
  @media screen and (max-width: 950px) {
    width: 100%;
    align-items: flex-start;
    padding-top: 150px;
    padding-left: 20px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-left: 50px;
  @media screen and (max-width: 425px) {
    margin-left: 0;
  }
`;

export const ContentTitle = styled.img`
  width: 594px;
  height: 118px;
  @media screen and (max-width: 1230px) {
    width: 400px;
    height: 75px;
  }
  @media screen and (max-width: 480px) {
    width: 320px;
    height: 62px;
  }
`;
export const ContentDescription = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: auto;
  color: #ffffff;
  max-width: 500px;
  @media screen and (max-width: 480px) {
    max-width: 300px;
    font-size: 16px;
  }
`;

export const SponsorButton = styled(Button)`
  background: #ffffff;
  border-radius: 16px;
  padding: 22px 25px;
  width: 200px;
  font-weight: 500;
  font-size: 18px;
  color: #191a1b;
  text-transform: lowercase;
  position: absolute;
  margin-bottom: 5em;
  stroke: 3px solid #fff;
  &:hover {
    outline: #fff auto 1px;
    background-color: #fff;
    color: #000;
    scale: 1;
  }
  @media screen and (max-width: 550px) {
    margin-bottom: 3em;
  }
  @media screen and (max-width: 441px) {
    margin-bottom: 2em;
  }
  @media screen and (max-width: 376px) {
    margin-bottom: 1em;
  }
`;
export const ContentButton = styled(Button)`
  background: #ffffff;
  border-radius: 16px;
  padding: 22px 25px;
  width: 200px;
  font-weight: 500;
  font-size: 18px;
  color: #191a1b;
  text-transform: lowercase;

  &:hover {
    outline: #fff auto 1px;
    background-color: #fff;
    color: #000;
    scale: 1;
  }
`;
