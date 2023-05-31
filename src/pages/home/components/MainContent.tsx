import React from "react";
import Title from "../../../img/n1grouptitle.svg";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import {
  AllMainContent,
  ContentButton,
  ContentDescription,
  ContentTitle,
  ContentWrapper,
  FirstMainContent,
  ImgBaleetView,
  MainSectionContainer,
} from "../style";
import BaleetView from "../../../img/MainContentBaleet.png";
const MainContent = () => {
  const handleButtonClick = () => {
    window.location.href = "https://sdu.edu.kz/epay/";
  };
  return (
    <MainSectionContainer>
      <AllMainContent>
        <FirstMainContent>
          <ContentWrapper>
            <ContentTitle src={Title} />
            <ContentDescription>
              Мы первые участники гонок Formula Student в КЗ. Предлогаем узнать
              об инженерном проекте tima loh
            </ContentDescription>

            <ContentButton onClick={handleButtonClick}>
              Стать спонсором
            </ContentButton>
          </ContentWrapper>
        </FirstMainContent>
        <ImgBaleetView src={BaleetView} />
      </AllMainContent>
    </MainSectionContainer>
  );
};

export default MainContent;
