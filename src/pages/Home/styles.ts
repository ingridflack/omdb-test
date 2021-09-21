import styled from "styled-components";

export const SearchContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  position: relative;

  > svg,
  > div {
    color: #7b8c98;
    left: 10px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  > div > svg {
    color: inherit;
    font-size: 12px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 0 8px 32px;
  border-radius: 4px;
  min-height: 30px;
  outline: none;
  border: none;
`;

export const BoxContent = styled.div`
  text-align: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Results = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  margin-top: 30px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
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

export const Message = styled.h3`
  color: #fff;
  font-weight: 400;
`;
