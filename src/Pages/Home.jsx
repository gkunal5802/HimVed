import styled from "styled-components";
import Customer1 from "../images/HeroSection/Customer1.jpg";
import Customer2 from "../images/HeroSection/Customer2.jpg";
import Customer3 from "../images/HeroSection/Customer3.jpg";
import Customer4 from "../images/HeroSection/Customer4.jpg";
import Customer5 from "../images/HeroSection/Customer5.jpg";
import Customer6 from "../images/HeroSection/Customer6.jpg";
import HeroImg from "../images/HeroImg2.jpg";
import Button from "../ui/Button";

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
`;

const Heading = styled.h1`
  font-size: 3.2rem;
  line-height: 1.05;
  margin-bottom: 3.2rem;
`;

const Description = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  margin-bottom: 4.8rem;
`;

const Tagline = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin-top: 8rem;
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

const DeliveredText = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  margin-left: 1rem;
`;

const StyledHeroImg = styled.img`
  width: 100%;
  border-radius: 10px;
  box-shadow: 15px 15px 0 #27834a;
`;

const Span = styled.span`
  color: #27834a;
`;

function Home() {
  return (
    <Section>
      <Hero>
        <div>
          <Heading>
            <Span>&quot;HimVeda&quot;</Span> &nbsp; is a pioneer of
            Ayurveda-based herbal treatments
          </Heading>
          <Description>
            Ayurvedic Treatment” for the well-being of mankind. All our Herbal
            Supplements are made from Natural Herbs with ancient time-tested
            formulas. We Provide personalized treatment to maintain overall
            health. Our wide range of herbal products includes herbal Tablets,
            Herbal Powder, Essential Oils, Herbal Natural Beauty, Cosmetic
            Products, etc.
          </Description>
          <Button variation="primary" size="medium">
            Book an Appointment
          </Button>

          <Button variation="outline" size="large">
            Contact Us
          </Button>
          <Tagline>
            <ImageRow>
              {ImgArr.map((img, i) => (
                <Images key={i} src={img} alt="Customer Photo" />
              ))}
            </ImageRow>
            <DeliveredText>
              <span style={{ color: "#455e0b" }}>Free</span> Consultation
              Available
            </DeliveredText>
          </Tagline>
        </div>
        <div>
          <picture>
            <StyledHeroImg
              src={HeroImg}
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            />
          </picture>
        </div>
      </Hero>
    </Section>
  );
}

export default Home;
