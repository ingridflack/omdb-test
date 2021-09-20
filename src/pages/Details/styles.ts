import styled from "styled-components";
import { BsHeart, BsHeartFill, BsArrowLeft } from "react-icons/bs";

export const Container = styled.div`
  color: #fff;
  margin: 60px 120px;
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
`;

export const Info = styled.div`
  color: #7b8c98;
  display: flex;
  align-items: center;
  font-weight: 400;
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
  max-width: 512px;
`;

export const MovieTitle = styled.h1`
  font-size: 60px;
  line-height: 80px;
`;

export const Row = styled.div`
  display: flex;
  font-size: 12px;
  height: 32px;
  margin: 12px 0 32px 0;
`;

export const Col = styled.div`
  border-radius: 4px;
  display: flex;
  margin-right: 12px;
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
`;

export const Logo = styled.img``;

export const FavoriteButton = styled.button`
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
`;

export const HeartIcon = styled(BsHeart)`
  margin-right: 6px;
`;

export const DetailsContainer = styled.div``;

export const Title = styled.p`
  color: #7b8c98;
  margin-top: 32px;
  margin-bottom: 8px;
  font-weight: 500;
`;

export const TextContent = styled.p`
  color: #fff;
  line-height: 1.25;
`;

export const ListContainer = styled.div`
  display: flex;
  gap: 64px;
`;

export const List = styled.div`
  min-width: 128px;
`;

export const ListItem = styled.p`
  color: #fff;
  line-height: 1.5;
`;

export const RightSide = styled.div``;

export const Cover = styled.img`
  border-radius: 8px;
  max-width: 360px;
`;
