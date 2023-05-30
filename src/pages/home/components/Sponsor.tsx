import { Button } from "@mui/material";
import sponsorBanner from "../../../img/BeOurSponsorBanner.png";
import { SponsorButton, SectionContainer } from "../style";
import { relative } from "path";

const Sponsor = () => {
  const handleButtonClick = () => {
    window.location.href = "https://sdu.edu.kz/epay/";
  };
  return (
    <SectionContainer
      style={{
        maxWidth: "1360px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={sponsorBanner} style={{ width: "100%", height: "auto" }} />
      <SponsorButton
        variant="contained"
        size="large"
        color="warning"
        onClick={handleButtonClick}
      >
        Стать спонсором
      </SponsorButton>
    </SectionContainer>
  );
};
export default Sponsor;
