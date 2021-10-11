import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrap = styled(motion.div)`
  display: flex;
  gap: 20px;
  margin-top: 100px;
`;

export const Left = styled.div`
  flex: 0.7;
`;
export const Right = styled.div`
  flex: 0.3;
`;

export const ContinueShopping = styled.div`
  color: ${(props) => props.theme.colors.ui.gray};
  border-bottom: 1px solid ${(props) => props.theme.colors.ui.grayLight};
  padding-bottom: 20px;
  margin-bottom: 20px;
  cursor: pointer;
`;
export const CartItems = styled.div``;
export const CartInfo = styled.div`
  margin-bottom: 20px;
`;
export const Text = styled.div`
  font-weight: 800;
  font-size: ${(props) => props.theme.sizing.font.lg};
`;
export const Message = styled.div`
  font-size: ${(props) => props.theme.sizing.font.sm};
  color: ${(props) => props.theme.colors.ui.gray};
  margin-top: 5px;
`;
export const CreditCard = styled.div``;
export const Items = styled.div``;
