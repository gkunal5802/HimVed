import styled from "styled-components";
import { Bio } from "../../data/constants";

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
  @media (max-width: 640px) {
    height: 1.6rem;
    width: 1.6rem;
  }
`;

function SocialIcons() {
  const styling = {
    fontSize: "2.4rem",
  };

  return (
    <SocialMediaIcons>
      {Bio.map((d, i) => (
        <SocialMediaIcon key={i} href={d.link} target="display">
          <d.icon style={styling} />
        </SocialMediaIcon>
      ))}
    </SocialMediaIcons>
  );
}

export default SocialIcons;
