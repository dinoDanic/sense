import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const OrderImg = styled.img`
  width: 25px;
  opacity: 0.8;
  transition: 0.2s ease all;
  &:hover {
    transform: scale(1.1) rotate(7deg);
  }
`;
