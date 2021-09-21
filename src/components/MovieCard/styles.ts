import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Poster = styled.img``;

export const Overlay = styled.span`
  border-radius: 8px;

  background-color: #192228;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 200ms ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Container = styled(Link)`
  position: relative;

  ${Overlay}:hover {
    opacity: 0.9;
  }
`;

interface IFavoriteButton {
  active: boolean;
}

export const FavoriteButton = styled.button<IFavoriteButton>`
  border: none;
  background-color: transparent;
  color: #fff;
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  cursor: pointer;

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
`;

export const Title = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  color: #fff;
  margin-left: 10px;
`;

export const Year = styled.p`
  color: #62717b;
  font-size: 12px;
  margin-left: 10px;
  margin-bottom: 7px;
`;
