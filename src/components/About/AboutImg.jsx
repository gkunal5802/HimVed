import styled from "styled-components";
import AboutImg from "../../images/Aboutimg.jpg";

const ImgBox = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  transition: all 0.4s;
  border-radius: 11px;
  &:hover {
    transform: scale(1.25);
    filter: contrast(130%);
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

function AboutImgBox() {
  return (
    <ImgBox>
      <Image src={AboutImg} alt="ayurvedic medicine" />
    </ImgBox>
  );
}

export default AboutImgBox;
