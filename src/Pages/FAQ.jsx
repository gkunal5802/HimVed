import { useState } from "react";
import styled from "styled-components";
import { faqs } from "../data/constants";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";
import Section from "../ui/Section";

const Container = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
`;

const FAQS = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4.2rem;
`;

const AccordionItem = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: space-between;
  align-items: center;
  border-radius: 11px;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.139);
  border-top: ${({ $active }) => $active && "4px solid rgb(41, 148, 52)"};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateX(-10px);
  }
`;

const Question = styled.span`
  font-size: 18px;
  margin: 0px 18px;
  font-weight: 600;
  color: ${({ $active }) => ($active ? "green" : "black")};
`;

const Icon = styled.button`
  margin: 12px;
  color: ${({ $active }) => ($active ? "green" : "black")};
  background: white;
  border: none;
`;

const Content = styled.div`
  border-radius: 11px;
  grid-column: span 2;
  color: black;
`;

const Answer = styled.p`
  font-size: 1.6rem;
  margin: 0px 18px 28px 18px;
  color: black;
`;

function FAQ() {
  const [isOpen, setIsOpen] = useState(1);

  function handleClick(id) {
    if (isOpen === id) setIsOpen(-1);
    else setIsOpen(id);
  }

  return (
    <Section id="faq">
      <Title>FAQ</Title>
      <Subtitle>Queries asked by our Customers frequently</Subtitle>

      <Container>
        <FAQS>
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              $active={isOpen === faq.id}
              onClick={() => handleClick(faq.id)}
            >
              <Question key={faq.question} $active={isOpen === faq.id}>
                {faq.question.toUpperCase()}
              </Question>
              <Icon $active={isOpen === faq.id}>
                <ExpandMoreIcon style={{ fontSize: "3.2rem" }} />
              </Icon>
              {isOpen === faq.id && (
                <Content key={i + 2}>
                  <Answer key={faq.answer}>{faq.answer} </Answer>
                </Content>
              )}
            </AccordionItem>
          ))}
        </FAQS>
      </Container>
    </Section>
  );
}

export default FAQ;
