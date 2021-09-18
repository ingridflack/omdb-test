import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  margin: 50px 120px 0 120px;
  padding: 8px;
  border-radius: 4px;
  min-height: 30px;
  outline: none;
  border: none;
  /* position: absolute; */
`;

export const SearchIcon = styled(AiOutlineSearch)`
  /* color: #7b8c98; */
  /* position: relative; */
`;
export const BoxContent = styled.div`
  margin-top: 175px;
  text-align: center;
`;
export const Image = styled.img``;
export const Title = styled.h3`
  margin-top: 24px;
  color: #fff;
  line-height: 30px;
  font-weight: 700;
  font-size: 24px;
`;
export const Subtitle = styled.p`
  color: #7b8c98;
  line-height: 16px;
  margin-top: 8px;
`;
