import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: #fff;
    background-color: #28834a;

    &:hover {
      color: #ffffff;
      background-color: #38ad63d3;
    }
  `,
  outline: css`
    color: #555;
    background-color: transparent;
    border: 2px solid #28834a;

    &:hover {
      color: #ffffff;
      background-color: #28834a;
    }
  `,
};

const Button = styled.button`
  display: inline-block;
  font-weight: 600;
  padding: 1.6rem 3.2rem;
  border-radius: 9px;
  margin: 2rem;

  border: none;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.3s ease;
  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  size: "medium",
  variation: "primary",
};

export default Button;
