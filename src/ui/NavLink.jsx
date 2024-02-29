/*eslint-disable*/

import styled from "styled-components";
const StyledNavLink = styled.a`
  font-weight: 600;
  cursor: pointer;
  color: #222;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #28834a;
  }
`;

function NavLink({ children, href, style }) {
  return (
    <StyledNavLink href={href} style={style}>
      {children}
    </StyledNavLink>
  );
}

export default NavLink;
