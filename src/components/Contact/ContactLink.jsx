/*eslint-disable*/

import styled from "styled-components";
const ContactLinkBox = styled.div`
  background: #51cf66;
  border-radius: 9px;
  padding: 1.2rem;
  box-shadow: 0 0 2.4rem #222;
  transition: all 0.4s;

  :hover {
    box-shadow: 0 0 1.2rem #51cf66;
  }
`;

const StyledContactLink = styled.a`
  display: inline-block;
  text-decoration: none;
  font-size: 1.6rem;
  color: #222;
  font-weight: bold;
`;
function ContactLink({ info }) {
  return (
    <ContactLinkBox>
      <info.icon style={{ fontSize: "2.4rem" }} />
      <h3 style={{ fontSize: "1.8rem" }}>{info.type}</h3>
      <StyledContactLink target={info?.target} href={info.link}>
        {info.name}
      </StyledContactLink>
    </ContactLinkBox>
  );
}

export default ContactLink;
