import React from "react";
import styled from "styled-components";
import { contactInfo } from "../../data/constants";
import ContactLink from "./ContactLink";

const StyledContactLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4.8rem;
  padding: 3.2rem;
  text-align: center;
`;
const SubHeading = styled.span`
  display: block;
  font-size: 2.4rem;
  font-weight: 500;
  margin-bottom: 2.5rem;
  color: #555;
  text-align: center;
`;

function ContactLinks() {
  return (
    <StyledContactLinks>
      <SubHeading>Talk to Me</SubHeading>
      {contactInfo.map((info) => (
        <ContactLink key={info.id} info={info} />
      ))}
    </StyledContactLinks>
  );
}

export default ContactLinks;
