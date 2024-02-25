/*eslint-disable */

import styled from "styled-components";

const StyledHeading = styled.h1`
  font-size: 4.2rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 6px 6px 0px 6px;
  }
`;

function Heading({ children }) {
  return <StyledHeading>{children}</StyledHeading>;
}

export default Heading;
