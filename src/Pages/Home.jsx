import styled from "styled-components";
import Customer1 from "../images/HeroSection/Customer1.jpg";
import Customer2 from "../images/HeroSection/Customer2.jpg";
import Customer3 from "../images/HeroSection/Customer3.jpg";
import Customer4 from "../images/HeroSection/Customer4.jpg";
import Customer5 from "../images/HeroSection/Customer5.jpg";
import Customer6 from "../images/HeroSection/Customer6.jpg";
import HeroImg from "../images/HeroImg2.jpg";
import Button from "../ui/Button";
import NavButton from "../ui/NavButton";

const ImgArr = [
  Customer1,
  Customer2,
  Customer3,
  Customer4,
  Customer5,
  Customer6,
];

const Section = styled.div`
  background: hsla(147, 32%, 88%, 1);

  background: linear-gradient(
    225deg,
    hsla(147, 32%, 88%, 1) 0%,
    hsla(70, 49%, 80%, 1) 100%
  );

  background: -moz-linear-gradient(
    225deg,
    hsla(147, 32%, 88%, 1) 0%,
    hsla(70, 49%, 80%, 1) 100%
  );

  background: -webkit-linear-gradient(
    225deg,
    hsla(147, 32%, 88%, 1) 0%,
    hsla(70, 49%, 80%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#D6EADF", endColorstr="#DDE5B4", GradientType=1 );
  padding: 4.8rem 0 9.6rem 0;
`;

const Hero = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 3.2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9.6rem;
  align-items: center;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

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
  margin-right: -1.6rem;
  border: 3px solid #a7cb51;

  :last-child {
    margin: 0;
  }
`;

const TaglineText = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  margin-left: 1rem;
`;

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

const Span = styled.span`
  color: #27834a;
`;

const HeroTextBox = styled.div`
  @media (max-width: 640px) {
    width: 90%;
    grid-row: 2;
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
    /* width: 80%; */
    margin-top: 0;
    grid-row: 1;
  }
`;
function Home() {
  return (
    <Section>
      <Hero>
        <HeroTextBox>
          <Heading>
            <Span>&quot;HimVed&quot;</Span> &nbsp; is a pioneer of
            Ayurveda-based herbal treatments
          </Heading>
          <Description>
            Ayurvedic Treatment for the well-being of mankind. All our Herbal
            Supplements are made from Natural Herbs with ancient time-tested
            formulas. We Provide personalized treatment to maintain overall
            health. Our wide range of herbal products includes herbal Tablets,
            Herbal Powder, Essential Oils, Herbal Natural Beauty, Cosmetic
            Products, etc.
          </Description>
          <GroupButton>
            <NavButton href="#contact">Book an Appointment</NavButton>
            <NavButton href="#contact" variation="outline" size="large">
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
              <span style={{ color: "#455e0b" }}>Free</span> Consultation
              Available
            </TaglineText>
          </Tagline>
        </HeroTextBox>
        <HeroImgBox>
          <StyledHeroImg src={HeroImg} alt="Ayurvedic ingredients" />
          {/* <picture>
          </picture> */}
        </HeroImgBox>
      </Hero>
    </Section>
  );
}

export default Home;
