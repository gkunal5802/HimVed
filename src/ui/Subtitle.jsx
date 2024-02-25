/*eslint-disable*/

import styled from "styled-components";

const StyledSubtitle = styled.h2`
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  color: #aaa;
  margin-bottom: 84px;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 18px;
  }
`;

function Subtitle({ children }) {
  return <StyledSubtitle>{children}</StyledSubtitle>;
}
export default Subtitle;
