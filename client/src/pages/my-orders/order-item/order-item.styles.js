import styled from "styled-components";

export const Wrap = styled.div`
  min-width: 200px;
  transition: 0.2s ease all;
  cursor: pointer;
  position: relative;
  &:hover {
    transform: scale(1.03);
  }
`;
export const Delete = styled.img`
  position: absolute;
  top: -8px;
  right: -8px;
  opacity: 0;
  cursor: pointer;
  transition: 0.2s ease all;
  pointer-events: none;
`;

export const Hold = styled.div`
  position: relative;
  &:hover ${Delete} {
    opacity: 1;
    pointer-events: all;
  }
`;
export const OrderI = styled.div`
  margin-bottom: 5px;
`;
export const OrderId = styled.div`
  margin-bottom: 5px;
  font-size: ${(props) => props.theme.sizing.font.sm};
  color: ${(props) => props.theme.colors.ui.gray};
`;
export const Length = styled.div`
  font-size: ${(props) => props.theme.sizing.font.sm};
  color: ${(props) => props.theme.colors.ui.gray};
`;
