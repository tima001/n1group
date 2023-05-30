import React from "react";
import Slider from "react-slick";
import {
  Card,
  CardTextContainer,
  ContentText,
  FlexBox,
  Header,
  ImgContainer,
  SectionContainer,
  TeamWrapper,
  Title,
  TitleText,
  WhiteBG,
} from "../style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Agytai from "../../../img/Agytai.jpg";
import Dias from "../../../img/Dias.jpg";
import Dinmukhamed from "../../../img/Dinmukhamed.jpg";
import Elnur from "../../../img/Elnur.jpg";
import Myrzageldi from "../../../img/Myrzageldi.jpg";
import Rakhat from "../../../img/Rakhat.jpg";
import Kazhymukhan from "../../../img/kazhymukhan.jpg";
import styled from "@emotion/styled";
import { BoldText, LowerCaseH3 } from "../../../layouts/TextStyles";

const TeamMembersPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <WhiteBG>
      <SectionContainer>
        <TeamWrapper>
          <Header>
            <Title>
              <FlexBox>
                <LowerCaseH3>Наши специалисты</LowerCaseH3>
              </FlexBox>
            </Title>
          </Header>
          <Container>
            <Slider {...settings}>
              <div>
                <Card>
                  <ImgContainer src={Elnur} alt="Team Member" />
                  <CardTextContainer>
                    <TitleText>Елнұр Өтебай</TitleText>
                    <ContentText>Капитан команды</ContentText>
                  </CardTextContainer>
                </Card>
              </div>
              <div>
                <Card>
                  <ImgContainer src={Agytai} alt="Team Member" />
                  <CardTextContainer>
                    <TitleText>Ағытай Мұқатай</TitleText>
                    <ContentText>Инженер по электронике</ContentText>
                  </CardTextContainer>
                </Card>
              </div>
              <div>
                <Card>
                  <ImgContainer src={Rakhat} alt="Team Member" />
                  <CardTextContainer>
                    <TitleText>Рахат Амантай</TitleText>
                    <ContentText>Пилот, инженер</ContentText>
                  </CardTextContainer>
                </Card>
              </div>
              <div>
                <Card>
                  <ImgContainer src={Dias} alt="Team Member" />
                  <CardTextContainer>
                    <TitleText>Диас Кабдуалиев</TitleText>
                    <ContentText>Инженер по электронике</ContentText>
                  </CardTextContainer>
                </Card>
              </div>
              <div>
                <Card>
                  <ImgContainer src={Dinmukhamed} alt="Team Member" />
                  <CardTextContainer>
                    <TitleText>Динмухамед Сапыбек</TitleText>
                    <ContentText>Инженер по аэродинамике</ContentText>
                  </CardTextContainer>
                </Card>
              </div>
              <div>
                <Card>
                  <ImgContainer src={Myrzageldi} alt="Team Member" />
                  <CardTextContainer>
                    <TitleText>Рай Мырзагелді</TitleText>
                    <ContentText>Пилот, инженер</ContentText>
                  </CardTextContainer>
                </Card>
              </div>

              <div>
                <Card>
                  <ImgContainer src={Kazhymukhan} alt="Team Member" />
                  <CardTextContainer>
                    <TitleText>Реймбаев Кажымұқан</TitleText>
                    <ContentText>Инженер-электроник,</ContentText>
                  </CardTextContainer>
                </Card>
              </div>
            </Slider>
          </Container>
        </TeamWrapper>
      </SectionContainer>
    </WhiteBG>
  );
};

export default TeamMembersPage;

const Container = styled.div`
  max-width: 100%;
  position: relative;
  margin: 64px auto;
  * > {
    display: flex !important;
    justify-content: center;
  }

  .slick-track {
    display: flex !important;
  }

  .slick-slide-content {
    padding: 10px; /* Adjust the padding value according to your preference */
    margin: 10px; /* Adjust the margin value according to your preference */
  }

  .slick-slide {
    height: auto;
  }
  .slick-slider {
    /* display: flex; */
  }
  .slick-slide {
    height: auto;
  }

  .slick-dots {
    display: flex;
    justify-content: center;
    bottom: -50px !important;
  }

  .slick-list {
    display: flex !important;
    /* padding-left: 25px; */
  }

  .slick-arrow {
    color: #212121 !important;
    border-radius: 10px;
    top: 44% !important;
  }
  .slick-arrow:before {
    color: #212121 !important;
    border-radius: 10px;
    font-size: 25px;
  }

  .center {
    /* display: grid; */
    .slick-dots {
      display: flex !important;
      justify-content: space-around;
      list-style-type: circle;

      /* ::marker {
        list-style-type: circle;
      } */
    }
  }
`;
