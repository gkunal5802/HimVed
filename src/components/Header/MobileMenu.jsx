/* eslint-disable */

import styled, { useTheme } from "styled-components";
import Button from "../../ui/Button";
const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 50px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: inherit;
  transition: all 0.6s linear;
  transform: ${({ isopen }) =>
    isopen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isopen }) => (isopen ? "90%" : "0")};
  z-index: ${({ isopen }) => (isopen ? "1000" : "-1000")};
`;

const MobileLink = styled.a`
  color: #222;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: #28834a;
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

function MobileMenuBar({ isopen, setIsOpen }) {
  const theme = useTheme();
  return (
    <MobileMenu isopen={isopen}>
      <MobileLink
        href="#about"
        onClick={() => {
          setIsOpen(!isopen);
        }}
      >
        About
      </MobileLink>
      <MobileLink
        href="#disease"
        onClick={() => {
          setIsOpen(!isopen);
        }}
      >
        Disease
      </MobileLink>
      <MobileLink
        href="#explore"
        onClick={() => {
          setIsOpen(!isopen);
        }}
      >
        Explore
      </MobileLink>
      <MobileLink
        href="#faq"
        onClick={() => {
          setIsOpen(!isopen);
        }}
      >
        Services
      </MobileLink>
      <MobileLink
        href="#faq"
        onClick={() => {
          setIsOpen(!isopen);
        }}
      >
        FAQ
      </MobileLink>
      <Button size="small" style={{ width: "20%" }}>
        <MobileLink
          href="#contact"
          onClick={() => {
            setIsOpen(!isopen);
          }}
        >
          Contact
        </MobileLink>
      </Button>
    </MobileMenu>
  );
}

export default MobileMenuBar;
