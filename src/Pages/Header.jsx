import { useState } from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import Logo from "../components/Header/Logo";
import MobileMenuBar from "../components/Header/MobileMenu";
import Navbar from "../components/Header/Navbar";
import { AiOutlineClose } from "react-icons/ai";
const Nav = styled.div`
  background-color: rgb(217, 232, 204);
  font-size: 1.5rem;
  width: 100%;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  height: 80px;

  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  padding: 0 24px;
  width: 100%;
  max-width: 1200px;
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 5px;
    right: 5px;
    transform: translate(-100%, 50%);
    transition: all 0.3s ease-in;
    color: #222;
    cursor: pointer;
  }
`;

function Header() {
  const [isopen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        <Logo />

        <MobileIcon>
          {isopen ? (
            <AiOutlineClose
              style={{ fontSize: "26px", fontWeight: "bold" }}
              onClick={(open) => setIsOpen(!open)}
            />
          ) : (
            <FaBars
              style={{ fontSize: "26px" }}
              onClick={() => {
                setIsOpen(!isopen);
              }}
            />
          )}
        </MobileIcon>

        <Navbar />
      </NavContainer>
      {open && <MobileMenuBar isopen={isopen} setIsOpen={setIsOpen} />}
    </Nav>
  );
}

export default Header;
