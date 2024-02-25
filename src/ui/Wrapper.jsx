/*eslint-disable */

import styled from "styled-components";
const StyledWrapper = styled.div`
  background: hsla(147, 32%, 88%, 1);

  background: linear-gradient(
    225deg,
    hsla(147, 32%, 88%, 1) 0%,
    hsla(70, 49%, 80%, 1) 100%
  );

  background: -moz-linear-gradient(
    225deg,
    hsla(147, 32%, 88%, 1) 0%,
    hsla(70, 49%, 80%, 1) 100%
  );

  background: -webkit-linear-gradient(
    225deg,
    hsla(147, 32%, 88%, 1) 0%,
    hsla(70, 49%, 80%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#D6EADF", endColorstr="#DDE5B4", GradientType=1 );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function Wrapper({ children }) {
  return <StyledWrapper>{children}</StyledWrapper>;
}

export default Wrapper;
