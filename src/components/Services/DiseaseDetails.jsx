/* eslint-disable */
import { CloseRounded } from "@mui/icons-material";
import { Modal } from "@mui/material";
import { useId } from "react";
import styled from "styled-components";
import Description from "../../ui/Description";
import Heading from "../../ui/Heading";
import SubHeading from "../../ui/SubHeading";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow-y: scroll;
  transition: all 0.5s ease;
`;

const Wrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  border-radius: 16px;
  margin: 50px 12px;
  height: min-content;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Image = styled.img`
  width: 50%;
  height: 50%;
  object-fit: cover;
  border-radius: 12px;
  margin: 35px auto;
`;

const List = styled.ul`
  list-style: square;
  font-size: 1.8rem;
  margin: 8px 0px 14px 26px;
`;

const StyledListItem = styled.li`
  color: #ddd;
  font-weight: 400;
  margin-bottom: 10px;
`;

const DiseaseDetails = ({ openModal, setOpenModal }) => {
  const disease = openModal?.disease;
  const uniqueId = useId();

  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <Container>
        <Wrapper key={uniqueId}>
          <CloseRounded
            style={{
              position: "absolute",
              backgroundColor: "rgba(255, 255, 255)",
              borderRadius: "50%",
              padding: "5px",
              fontSize: "36px",
              top: "10px",
              right: "-200px",
              cursor: "pointer",
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <Heading>{disease.title}</Heading>
          <Image src={disease?.image} />
          {disease.subtitles.map((subtitle, index) => (
            <>
              <SubHeading key={subtitle}>{subtitle}</SubHeading>
              <Description key={index}>
                {disease.Description[index]}
              </Description>
              {disease.Lists[index].length > 0 && (
                <List>
                  {disease.Lists[index].map((item, i) => (
                    <StyledListItem key={i}>{item}</StyledListItem>
                  ))}
                </List>
              )}
            </>
          ))}
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default DiseaseDetails;
