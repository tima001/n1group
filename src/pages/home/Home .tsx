import { Main, Wrapper } from "./style";
import Contacts from "./components/ContactForm";
import CarCharacteristics from "./components/CarCharacteristics";
import InformationOfBolid from "./components/InformationOfBolid";
import BolidSideView from "./components/BolidSideView";
import InformationAboutTeam from "./components/InformationAboutTeam";
import Footer from "./components/Footer";
import Sponsor from "./components/Sponsor";
import Partners from "./components/Partners";
import FAQs from "./components/FAQs";
import TeamMembers from "./components/OurTeam";
import MockupWithVideo from "./components/mockupvideo/MockupVideo";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
const Home = () => {
  return (
    <Wrapper>
      {/* <Navbar /> */}
      <Main>
        <MainContent />
        <MockupWithVideo />
        <InformationAboutTeam />
        <CarCharacteristics />
        <BolidSideView />
        <InformationOfBolid />
        <Contacts />
        <TeamMembers />
        <Partners />
        <Sponsor />
        <FAQs />
        <Footer />
      </Main>
    </Wrapper>
  );
};

export default Home;
