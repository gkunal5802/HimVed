/*eslint-disable*/

import styled from "styled-components";
const ContactLinkBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: #51cf66;
  border-radius: 9px;
  padding: 1.2rem;
  box-shadow: 0 0 1.2rem #222;
  width: 90%;
  height: 12.5rem;
  align-items: center;
  justify-self: center;
  cursor: pointer;

  @media (max-width: 920px) {
    width: 120%;
  }
  @media (max-width: 640px) {
    width: 100%;
  }
`;

const Type = styled.h3`
  font-size: 1.8rem;
  display: flex;
  gap: 1.2rem;
  justify-self: center;
`;

const StyledContactLink = styled.p`
  font-size: 1.6rem;
  color: #222;
  font-weight: bold;
  grid-column: span 2;
  justify-self: center;
`;

function ContactLink({ info }) {
  return (
    <ContactLinkBox>
      <Type>
        <info.icon style={{ fontSize: "2.4rem" }} />
        {info.type}
      </Type>
      <StyledContactLink target={info?.target} href={info.link}>
        {info.name}
      </StyledContactLink>
    </ContactLinkBox>
  );
}

export default ContactLink;
