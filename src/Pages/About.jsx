import styled from "styled-components";
import AboutImg from "../images/Aboutimg.jpg";
import Section from "../ui/Section";

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.2rem;
  margin: 3.2rem;
  align-items: center;
  justify-content: center;
`;

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
`;

const TextBox = styled.div`
  background: hsla(78, 54%, 56%, 1);

  background: radial-gradient(
    circle,
    hsla(78, 54%, 56%, 1) 5%,
    hsla(142, 53%, 34%, 1) 100%
  );

  background: -moz-radial-gradient(
    circle,
    hsla(78, 54%, 56%, 1) 5%,
    hsla(142, 53%, 34%, 1) 100%
  );

  background: -webkit-radial-gradient(
    circle,
    hsla(78, 54%, 56%, 1) 5%,
    hsla(142, 53%, 34%, 1) 100%
  );
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#A7CB51", endColorstr="#28834A", GradientType=1 );

  padding: 3.2rem;
  border-radius: 11px;
  max-width: 100%;
`;
const AboutHeading = styled.h2`
  color: #fff;
  font-size: 4.2rem;
  margin-bottom: 6.4rem;
`;

const AboutText = styled.p`
  font-size: 1.8rem;
  line-height: 1.8;
  color: #fff;
  margin-bottom: 3.2rem;
`;

function About() {
  return (
    <Section id="about">
      <AboutContainer>
        <ImgBox>
          <Image src={AboutImg} alt="ayurvedic medicine" />
        </ImgBox>

        <TextBox>
          {/* <span class="sub-heading">About Me</span> */}
          <AboutHeading>About Us</AboutHeading>
          <AboutText>
            Welcome to HimVed, where Ayurveda meets modern science to
            revolutionize male sexual healthcare. Our expert team offers
            personalized solutions for sexual disorders, blending pure herbal
            remedies with advanced techniques. With a focus on quality care and
            client satisfaction, we aim to fill the void in men&apos;s sexual
            wellness. Trust HimVed for accessible, effective, and tailored
            healthcare solutions, ensuring your journey to optimal sexual health
            and wellbeing.
          </AboutText>
        </TextBox>
      </AboutContainer>
    </Section>
  );
}

export default About;
