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
import SduLogo from "../../../img/sdu_logo.png";
import SduFacultyLogo from "../../../img/FOEsdu.png";
import TapTati from "../../../img/tap-tatti_logo.png";
import styled from "@emotion/styled";
import { BoldText, LowerCaseH3 } from "../../../layouts/TextStyles";

const Partners = () => {
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
    <SectionContainer style={{ marginTop: "80px" }}>
      <TeamWrapper>
        <Header>
          <Title>
            <FlexBox>
              <LowerCaseH3>Наши спонсоры</LowerCaseH3>
            </FlexBox>
          </Title>
        </Header>
        <Container>
          <Slider {...settings}>
            <div>
              <Card>
                <ImgContainer src={SduLogo} alt="Team Member" />
              </Card>
            </div>
            <div>
              <Card>
                <div
                  style={{
                    width: "270px",
                    height: "260px",
                    borderRadius: "16px",
                    alignContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <ImgContainer
                    style={{ height: "150px" }}
                    src={SduFacultyLogo}
                    alt="Team Member"
                  />
                </div>
              </Card>
            </div>
            <div>
              <Card>
                <ImgContainer src={TapTati} alt="Team Member" />
              </Card>
            </div>
          </Slider>
        </Container>
      </TeamWrapper>
    </SectionContainer>
  );
};

export default Partners;

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
