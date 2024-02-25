/*eslint-disable*/

import styled from "styled-components";

const StyledBody = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

function Body({ children }) {
  return <StyledBody>{children}</StyledBody>;
}

export default Body;
