import styled from "styled-components";

const Description = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
  color: #fff;
  line-height: 1.5;
  margin: 4px 6px 16px 6px;
  @media only screen and (max-width: 640px) {
    font-size: 1.4rem;
    margin: 6px 6px;
    line-height: 1.3;
  }
`;

export default Description;
