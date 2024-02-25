import styled from "styled-components";
import { ExploreInfo } from "../data/constants";
import Section from "../ui/Section";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";
import { ExploreCard } from "../components/Explore/ExploreCard";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 4rem;
  margin-top: 2.4rem;
`;

function Explore() {
  return (
    <Section id="explore">
      <Title>Why</Title>
      <Subtitle>HimVed</Subtitle>

      <Container>
        {ExploreInfo.map((info, i) => (
          <ExploreCard info={info} key={i} />
        ))}
      </Container>
    </Section>
  );
}

export default Explore;
