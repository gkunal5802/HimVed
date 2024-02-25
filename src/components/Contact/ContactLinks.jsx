import styled from "styled-components";
import { contactInfo } from "../../data/constants";
import ContactLink from "./ContactLink";

const StyledContactLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4.2rem;
  padding: 3.2rem;
  align-items: center;
  justify-content: center;
`;

function ContactLinks() {
  return (
    <StyledContactLinks>
      {contactInfo.map((info) => (
        <ContactLink key={info.id} info={info} />
      ))}
    </StyledContactLinks>
  );
}

export default ContactLinks;
