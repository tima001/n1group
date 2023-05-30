import React from "react";
import Mockup from "../../../../img/mockup.png";
import BottomMockup from "../../../../img/Base.png";
import styled from "@emotion/styled";
import { SectionContainer } from "../../style";
const VideoPlayer = () => {
  const videoId = "GHaVodfniRE";
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <SectionContainer>
      <MockupWrapper>
        <YoutubeVideoPlayer
          title="YouTube Video"
          src={youtubeUrl}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        <BottomImg src={BottomMockup} />
      </MockupWrapper>
    </SectionContainer>
  );
};

export default VideoPlayer;
const YoutubeVideoPlayer = styled.iframe`
  position: relative;
  width: 735px;
  height: 500px;
  z-index: 2;
  border: 8px solid #9fa2a5;
  border-radius: 16px 16px 0px 0px;
  @media screen and (max-width: 921px) {
    width: 550px;
    height: 375px;
  }
  @media screen and (max-width: 720px) {
    width: 350px;
    height: 240px;
  }
  @media screen and (max-width: 480px) {
    width: 300px;
    height: 205px;
  }
  @media screen and (max-width: 388px) {
    width: 270px;
    height: 184px;
  }
`;

const BottomImg = styled.img`
  position: relative;
  z-index: 2;
  width: 900px;
  height: 100%;
  @media screen and (max-width: 921px) {
    width: 700px;
  }
  @media screen and (max-width: 720px) {
    width: 450px;
  }
  @media screen and (max-width: 480px) {
    width: 370px;
  }
  @media screen and (max-width: 388px) {
    width: 340px;
  }
`;

const MockupWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
