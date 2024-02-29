import styled from "styled-components";

import Button from "../ui/Button";
import NavButton from "../ui/NavButton";
import TextBox from "../components/Hero/TextBox";
import ImgBox from "../components/Hero/ImgBox";

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

function Home() {
  return (
    <Section>
      <Hero>
        <TextBox />
        <ImgBox />
      </Hero>
    </Section>
  );
}

export default Home;
