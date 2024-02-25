import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../ui/Button";

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

const NavLink = styled.a`
  font-weight: 500;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

function Navbar() {
  return (
    <NavItems>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#explore">Explore</NavLink>
      <NavLink href="#services">Services</NavLink>
      <NavLink href="#faq">FAQ</NavLink>
      <Button variation="primary">
        <NavLink href="#contact">Contact</NavLink>
      </Button>
    </NavItems>
  );
}

export default Navbar;
