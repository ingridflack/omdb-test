import styled, { css } from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import MoviePoster from "../../components/MoviePoster";

interface IContainer {
  backgroundImage: string;
}

export const Container = styled.div<IContainer>`
  position: relative;

  > * {
    position: relative;
    z-index: 2;
  }

  &::before {
    background: url(${({ backgroundImage }) => backgroundImage}) center
      no-repeat;
    background-size: cover;
  }

  &::after {
    background: linear-gradient(
      to top,
      hsl(207, 29%, 6%) 0%,
      hsla(207, 29%, 6%, 0.986) 18.7%,
      hsla(207, 29%, 6%, 0.948) 34.9%,
      hsla(207, 29%, 6%, 0.892) 48.8%,
      hsla(207, 29%, 6%, 0.82) 60.6%,
      hsla(207, 29%, 6%, 0.736) 70.4%,
      hsla(207, 29%, 6%, 0.644) 78.4%,
      hsla(207, 29%, 6%, 0.546) 84.8%,
      hsla(207, 29%, 6%, 0.447) 89.8%,
      hsla(207, 29%, 6%, 0.349) 93.6%,
      hsla(207, 29%, 6%, 0.257) 96.3%,
      hsla(207, 29%, 6%, 0.174) 98.1%,
      hsla(207, 29%, 6%, 0.103) 99.2%,
      hsla(207, 29%, 6%, 0.048) 99.8%,
      hsla(207, 29%, 6%, 0.013) 100%,
      hsla(207, 29%, 6%, 0) 100%
    );
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 300px;
    top: -25px;
    left: -30px;
    right: -30px;
    z-index: 1;

    @media (min-width: 768px) {
      content: none;
    }
  }
`;

export const Header = styled.div`
  margin-bottom: 16px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  margin-bottom: 16px;
  cursor: pointer;

  &:hover {
    svg {
      color: #fff;
    }
  }
`;
export const BackIcon = styled(BsArrowLeft)`
  color: #7b8c98;
  font-size: 20px;
  transition: color 200ms ease;

  @media (max-width: 768px) {
    color: #fff;
  }
`;

export const Info = styled.div`
  color: #7b8c98;
  display: flex;
  align-items: center;
  font-weight: 400;

  @media (max-width: 768px) {
    color: #fff;
  }
`;

export const InfoItem = styled.div`
  & + & {
    &::before {
      content: "•";
      font-size: 12px;
      margin: 0 8px;
    }
  }
`;

export const Span = styled.span`
  font-size: 12px;
  color: #000;
  background-color: #7b8c98;
  padding: 4px;
  border-radius: 4px;
  font-weight: 700;
`;

export const LeftSide = styled.div`
  width: 100%;

  @media (min-width: 1160px) {
    max-width: 512px;
  }
`;

export const MovieTitle = styled.h1`
  font-size: 60px;
  line-height: 80px;

  @media (max-width: 1160px) {
    font-size: 30px;
    line-height: 40px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 0;
  font-size: 12px;
  margin: 12px 0 32px 0;
`;

export const Col = styled.div`
  border-radius: 4px;
  display: flex;
  margin-right: 12px;
  height: 32px;
`;

const LogoContainer = styled.div`
  align-items: center;
  border-radius: 4px 0px 0px 4px;
  display: flex;
  padding: 0 10px;
`;

export const ImdbContainer = styled(LogoContainer)`
  background-color: #ff9b39;
`;

export const RTContainer = styled(LogoContainer)`
  background-color: #f93a1e;
`;

export const ImdbLogo = styled.img`
  height: 13px;
  width: 32px;
`;

export const ColValue = styled.div`
  align-items: center;
  border: 1px solid #171c21;
  border-radius: 0px 4px 4px 0px;
  display: flex;
  padding: 0 10px;

  @media (max-width: 768px) {
    background-color: #0b1014;
  }
`;

export const Logo = styled.img``;

interface IFavoriteButton {
  active: boolean;
}

export const FavoriteButton = styled.button<IFavoriteButton>`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  color: #7b8c98;
  border: 1px solid #171c21;
  padding: 9px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: color 200ms ease, border-color 200ms ease;

  &:hover {
    color: #fff;
    border-color: #fff;
  }

  > svg {
    margin-right: 6px;
  }

  ${({ active }) => {
    return (
      active &&
      css`
        &,
        &:hover {
          color: #fff;
          border-color: #fff;
        }
      `
    );
  }}

  @media (max-width: 768px) {
    border-color: #0b1014;
    background-color: #0b1014;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 769px) {
    flex-direction: column;
  }
`;
export const DetailsContainer = styled.div`
  @media (max-width: 1160px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Title = styled.p`
  color: #7b8c98;
  margin-top: 32px;
  margin-bottom: 8px;
  font-weight: 500;

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;

export const TextContent = styled.p`
  color: #fff;
  line-height: 1.25;
`;

export const ListContainer = styled.div`
  display: flex;
  gap: 64px;

  @media (max-width: 1160px) {
    min-width: 300px;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    gap: 10px;
    flex-wrap: wrap;
    min-width: auto;
  }
`;

export const List = styled.div`
  min-width: 128px;
`;

export const ListItem = styled.p`
  color: #fff;
  line-height: 1.5;
`;

export const RightSide = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Cover = styled(MoviePoster)`
  width: 360px;
  height: 508px;

  @media (max-width: 768px) {
    display: none;
  }
`;
