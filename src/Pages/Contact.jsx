import styled from "styled-components";
import Button from "../ui/Button";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";
import ContactForm from "../components/Contact/ContactForm";
import ContactLinks from "../components/Contact/ContactLinks";
import Section from "../ui/Section";
import { contactInfo } from "../data/constants";

const SubHeading = styled.span`
  display: block;
  font-size: 2.4rem;
  font-weight: 500;
  margin-bottom: 2.5rem;
  color: #555;
  text-align: center;
`;

const ContactMe = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4.8rem;
`;

const WriteMe = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4.8rem;
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
`;

function Contact() {
  return (
    <Section id="contact">
      <Title>Contact Us</Title>
      <Subtitle>Book an Appointment with Us</Subtitle>

      <ContactMe>
        <ContactLinks />
        <WriteMe>
          <SubHeading>Write to Me</SubHeading>
          <ContactForm />
        </WriteMe>
      </ContactMe>
    </Section>
  );
}

export default Contact;
