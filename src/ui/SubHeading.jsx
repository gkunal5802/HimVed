/*eslint-disable */
import styled from "styled-components";

const StyledSubHeading = styled.h2`
  font-size: 3.2rem;
  font-weight: 500;
  color: #28834a;
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 1.6rem;
    margin: 6px 6px 0px 6px;
  }
`;

function SubHeading({ children }) {
  return <StyledSubHeading>{children}</StyledSubHeading>;
}

export default SubHeading;
