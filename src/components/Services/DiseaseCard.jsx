/* eslint-disable */
import styled from "styled-components";
import Button from "../../ui/Button";

const Card = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
  }
`;

const Image = styled.img`
  width: 90%;
  margin: 0 auto;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;

const DiseaseTitle = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: #444;
`;

const DiseaseCard = ({ disease, setOpenModal }) => {
  return (
    <Card onClick={() => setOpenModal({ state: true, disease })}>
      <Image src={disease.image} />
      <Details>
        <DiseaseTitle>{disease.title}</DiseaseTitle>
      </Details>
      {/* <Button onClick={() => setOpenModal({ state: true, disease })}>
        Click to know more
      </Button> */}
    </Card>
  );
};

export default DiseaseCard;
