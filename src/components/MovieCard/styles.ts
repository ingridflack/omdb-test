import styled from "styled-components";

export const Poster = styled.img`
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  max-width: 100%;
`;

export const Overlay = styled.span`
  background-color: #192228;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 200ms ease;
  cursor: pointer;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  ${Overlay}:hover {
    opacity: 0.9;
  }
`;

export const FavoriteButton = styled.button`
  border: none;
  background-color: transparent;
`;

export const Title = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  color: #fff;
`;

export const Year = styled.p``;
