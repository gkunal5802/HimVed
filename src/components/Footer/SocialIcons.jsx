import styled from "styled-components";
import { Bio } from "../../data/constants";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

function SocialIcons() {
  return (
    <SocialMediaIcons>
      <SocialMediaIcon href={Bio.twitter} target="display">
        <TwitterIcon style={{ fontSize: "2.4rem" }} />
      </SocialMediaIcon>
      <SocialMediaIcon href={Bio.linkedin} target="display">
        <LinkedInIcon style={{ fontSize: "2.4rem" }} />
      </SocialMediaIcon>
      <SocialMediaIcon href={Bio.insta} target="display">
        <InstagramIcon style={{ fontSize: "2.4rem" }} />
      </SocialMediaIcon>
      <SocialMediaIcon href={Bio.github} target="display">
        <GitHubIcon style={{ fontSize: "2.4rem" }} />
      </SocialMediaIcon>
    </SocialMediaIcons>
  );
}

export default SocialIcons;
