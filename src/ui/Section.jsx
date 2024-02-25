import styled from "styled-components";

/*eslint-disable*/
const StyledSection = styled.section`
  margin-top: 9.6rem;
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;
  padding-bottom: 9.6rem;
`;

function Section({ children, id }) {
  return <StyledSection id={id}>{children}</StyledSection>;
}

export default Section;
