import styled from "styled-components";

export const Wrap = styled.div`
  margin-top: 100px;
`;
export const Title = styled.div`
  font-size: ${(props) => props.theme.sizing.font.md};
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${(props) => props.theme.colors.ui.grayLight};
`;

export const OrderItem = styled.div`
  margin-bottom: 10px;
`;
