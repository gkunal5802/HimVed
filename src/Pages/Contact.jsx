import styled from "styled-components";
import ContactForm from "../components/Contact/ContactForm";
import ContactLinks from "../components/Contact/ContactLinks";
import Section from "../ui/Section";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";

const SubHeading = styled.span`
  display: block;
  font-size: 2.4rem;
  font-weight: 500;
  margin-bottom: 2.5rem;
  color: #555;
  text-align: center;
  align-self: center;
`;

const ContactMe = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4.8rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.2rem;
  align-items: center;
  justify-content: center;
`;

function Contact() {
  return (
    <Section id="contact">
      <Title>Contact Us</Title>
      <Subtitle>Book an Appointment with Us</Subtitle>

      <ContactMe>
        <Container>
          <SubHeading>Talk to Me</SubHeading>
          <ContactLinks />
        </Container>
        <Container>
          <SubHeading>Write to Me</SubHeading>
          <ContactForm />
        </Container>
      </ContactMe>
    </Section>
  );
}

export default Contact;
