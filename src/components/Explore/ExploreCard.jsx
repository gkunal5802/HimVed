/*eslint-disable*/

import styled from "styled-components";
export const ExploreItem = styled.div`
  border-radius: 11px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  &:hover div {
    height: 100%;
  }
`;

export const Image = styled.img`
  transition: transform 0.5s;
  width: 100%;
  border-radius: 11px;
  display: block;
`;

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 4rem;
  text-align: center;
  background: linear-gradient(
    225deg,
    hsla(147, 32%, 88%, 1) 0%,
    hsla(70, 49%, 80%, 1) 100%
  );
  transition: height 0.5s;
  overflow: hidden;
`;

export const OverlayTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 700;
  color: #0f3d17;
  margin-bottom: 2.4rem;
`;

export const OverlayText = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 2.4rem;
`;

export function ExploreCard({ info }) {
  return (
    <ExploreItem>
      <Image src={info.image} alt={info.title} />
      <Overlay>
        <OverlayTitle>{info.title}</OverlayTitle>
        <OverlayText>{info.content}</OverlayText>
      </Overlay>
    </ExploreItem>
  );
}
