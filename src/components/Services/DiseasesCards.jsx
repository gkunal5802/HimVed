/*eslint-disable*/

import styled from "styled-components";
import { diseases } from "../../data/constants";
import DiseaseCard from "./DiseaseCard";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 4.2rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

function DiseasesCards({ openModal, setOpenModal }) {
  return (
    <CardContainer>
      {diseases.map((disease, index) => (
        <DiseaseCard
          key={index}
          disease={disease}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      ))}
    </CardContainer>
  );
}

export default DiseasesCards;
