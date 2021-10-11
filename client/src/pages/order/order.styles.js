import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrap = styled(motion.div)`
  margin-top: 5%;
`;
export const ContentHold = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Title = styled.div`
  font-size: ${(props) => props.theme.sizing.font.lg};
`;

export const OrderId = styled.div`
  margin-top: 10px;
  font-size: ${(props) => props.theme.sizing.font.md};
`;

export const Image = styled.img`
  width: 100px;
  margin-bottom: 50px;
`;

export const CartItems = styled.div`
  margin-bottom: 20px;
`;

export const CartHold = styled.div`
  margin-bottom: 10px;
`;

export const SubTitle = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.ui.grayLight};
  font-weight: bold;
  padding-bottom: 6px;
  margin-bottom: 10px;
  margin-top: 50px;
`;

export const UserHold = styled.div``;
export const Row = styled.div`
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => props.theme.sizing.font.sm};
`;
export const Item = styled.div``;
export const Value = styled.div``;

export const HoldButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  button {
    margin-right: 10px;
  }
`;
