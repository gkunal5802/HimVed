import styled from "styled-components";
import AboutImg from "../components/About/AboutImg";
import AboutTextBox from "../components/About/AboutText";
import Section from "../ui/Section";

const AboutContainer = styled.div`
  display: flex;
  gap: 6.2rem;
  margin: 1.2rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

function About() {
  return (
    <Section id="about">
      <AboutContainer>
        <AboutImg />
        <AboutTextBox />
      </AboutContainer>
    </Section>
  );
}

export default About;
