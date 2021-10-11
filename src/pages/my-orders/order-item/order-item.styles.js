import styled from "styled-components";

export const Wrap = styled.div`
  min-width: 200px;
  transition: 0.2s ease all;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
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
