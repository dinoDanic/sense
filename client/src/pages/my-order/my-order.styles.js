import styled from "styled-components";

export const Wrap = styled.div`
  margin-top: 100px;
`;
export const Title = styled.div`
  font-size: ${(props) => props.theme.sizing.font.lg};
  margin-bottom: 20px;
`;

export const OrderItem = styled.div`
  margin-bottom: 10px;
`;

export const OrderBy = styled.div`
  margin-bottom: 10px;
  padding-bottom: 10px;
  margin-top: 10px;
  border-bottom: 1px solid ${(props) => props.theme.colors.ui.grayLight};
`;
export const Row = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.sizing.font.sm};
`;
export const Item = styled.div`
  width: 100px;
`;
export const Value = styled.div``;
