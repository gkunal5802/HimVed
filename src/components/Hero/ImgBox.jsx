import styled from "styled-components";
import HeroImg from "../../data/constants";

const StyledHeroImg = styled.img`
  width: 100%;
  border-radius: 10px;
  box-shadow: 15px 15px 0 #27834a;
  @media (max-width: 640px) {
    width: 70%;
    margin-left: 6rem;
    box-shadow: 12px 12px 0 #27834a;
  }

  @media (max-width: 425px) {
    width: 90%;
    margin-left: 3rem;
    box-shadow: 8px 8px 0 #27834a;
  }
`;

const HeroImgBox = styled.div`
  width: 100%;
  height: 100%;
  align-self: center;
  @media (max-width: 960px) {
    margin-top: 30rem;
  }
  @media (max-width: 640px) {
    margin-right: 1.2rem;
    margin-top: 0;
    grid-row: 1;
  }
`;
function ImgBox() {
  return (
    <HeroImgBox>
      <StyledHeroImg src={HeroImg} alt="Ayurvedic ingredients" />
    </HeroImgBox>
  );
}

export default ImgBox;
