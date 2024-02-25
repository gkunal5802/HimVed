/*eslint-disable*/
import styled from "styled-components";

const Desc = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
  color: #fff;
  line-height: 1.5;
  margin: 4px 6px 16px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    margin: 6px 6px;
  }
`;

function Description({ children }) {
  return <Desc>{children}</Desc>;
}

export default Description;
