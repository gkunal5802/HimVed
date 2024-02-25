/*eslint-disable*/

import styled from "styled-components";
import DiseaseCards from "../components/Services/DiseasesCards";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";
import Section from "../ui/Section";

const Container = styled.div`
  background: linear-gradient(
    343.07deg,
    rgba(132, 59, 206, 0.06) 5.71%,
    rgba(132, 59, 206, 0) 64.83%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 10px 0px 100px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Services = ({ openModal, setOpenModal }) => {
  return (
    <Section id="services">
      <Wrapper>
        <Title>Services</Title>
        <Subtitle>Some of the diseases that HimVed Cure</Subtitle>
        <DiseaseCards openModal={openModal} setOpenModal={setOpenModal} />
      </Wrapper>
    </Section>
  );
};

export default Services;
