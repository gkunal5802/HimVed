/*eslint-disable*/

import styled from "styled-components";
import DiseaseCards from "../components/Services/DiseasesCards";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";
import Section from "../ui/Section";

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
