import styled from "styled-components";
import SocialIcons from "../components/Footer/SocialIcons";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 3.2rem;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 640px) {
    font-size: 1.6rem;
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer id="footer">
      <FooterWrapper>
        <Logo>HimVed</Logo>
        <SocialIcons />
        <Copyright>&copy; HimVed. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
