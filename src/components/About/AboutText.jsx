import styled from "styled-components";

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

  @media (max-width: 640px) {
    padding: 1.2rem;
  }
`;

const AboutHeading = styled.h2`
  color: #fff;
  font-size: 4.2rem;
  margin-bottom: 6.4rem;
  @media (max-width: 640px) {
    font-size: 2.8rem;
    margin-bottom: 3.2rem;
  }
`;

const AboutText = styled.p`
  font-size: 1.8rem;
  line-height: 1.8;
  color: #fff;
  margin-bottom: 3.2rem;
  @media (max-width: 640px) {
    font-size: 1.4rem;
  }
`;
function AboutTextBox() {
  return (
    <TextBox>
      <AboutHeading>About Us</AboutHeading>
      <AboutText>
        Welcome to HimVed, where Ayurveda meets modern science to revolutionize
        male sexual healthcare. Our expert team offers personalized solutions
        for sexual disorders, blending pure herbal remedies with advanced
        techniques. With a focus on quality care and client satisfaction, we aim
        to fill the void in men&apos;s sexual wellness. Trust HimVed for
        accessible, effective, and tailored healthcare solutions, ensuring your
        journey to optimal sexual health and wellbeing.
      </AboutText>
    </TextBox>
  );
}

export default AboutTextBox;
