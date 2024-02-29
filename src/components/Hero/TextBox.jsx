import styled from "styled-components";
import NavButton from "../../ui/NavButton";
import { ImgArr } from "../../data/constants";

const Heading = styled.h1`
  font-size: 32px;
  line-height: 1.05;
  margin-bottom: 3.2rem;
  @media (max-width: 640px) {
    font-size: 20px;
    margin-bottom: 2.4rem;
  }
`;

const Description = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  margin-bottom: 4.8rem;
  @media (max-width: 640px) {
    font-size: 1.2rem;
    margin-bottom: 3.2rem;
  }
`;

const GroupButton = styled.div`
  display: flex;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
const Tagline = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin-top: 8rem;
  @media (max-width: 640px) {
    flex-direction: column;
    margin-top: 3.2rem;
  }
`;

const ImageRow = styled.div`
  display: flex;
`;

const Images = styled.img`
  height: 4.8rem;
  width: 4.8rem;
  border-radius: 50%;
  margin-right: -1.2rem;
  border: 3px solid #a7cb51;
  transition: all 0.3s ease-in-out;

  :last-child {
    margin: 0;
  }
  &:hover {
    transform: scale(1.2);
  }
`;

const TaglineText = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  margin-left: 1rem;
`;

const Span = styled.span`
  color: #27834a;
`;

const HeroTextBox = styled.div`
  @media (max-width: 640px) {
    width: 90%;
    grid-row: 2;
  }
`;

function TextBox() {
  return (
    <HeroTextBox>
      <Heading>
        <Span>&quot;HimVed&quot;</Span> &nbsp; is a pioneer of Ayurveda-based
        herbal treatments
      </Heading>
      <Description>
        Ayurvedic Treatment for the well-being of mankind. All our Herbal
        Supplements are made from Natural Herbs with ancient time-tested
        formulas. We Provide personalized treatment to maintain overall health.
        Our wide range of herbal products includes herbal Tablets, Herbal
        Powder, Essential Oils, Herbal Natural Beauty, Cosmetic Products, etc.
      </Description>
      <GroupButton>
        <NavButton href="#contact">Book an Appointment</NavButton>
        <NavButton href="#footer" variation="outline" size="large">
          Contact Us
        </NavButton>
      </GroupButton>
      <Tagline>
        <ImageRow>
          {ImgArr.map((img, i) => (
            <Images key={i} src={img} alt="Customer Photo" />
          ))}
        </ImageRow>
        <TaglineText>
          <span style={{ color: "#455e0b", fontSize: "26px" }}>Free</span>{" "}
          Consultation Available
        </TaglineText>
      </Tagline>
    </HeroTextBox>
  );
}

export default TextBox;
