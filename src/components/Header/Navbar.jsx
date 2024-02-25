import styled from "styled-components";
import NavButton from "../../ui/NavButton";
import NavLink from "../../ui/NavLink";

const NavItems = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  gap: 3.8rem;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

function Navbar() {
  return (
    <NavItems>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#explore">Explore</NavLink>
      <NavLink href="#services">Services</NavLink>
      <NavLink href="#faq">FAQ</NavLink>
      <NavButton href="#contact" style={{ color: "#fff" }}>
        Contact
      </NavButton>
    </NavItems>
  );
}

export default Navbar;
