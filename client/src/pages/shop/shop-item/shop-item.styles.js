import styled from "styled-components";
import { motion } from "framer-motion";

export const AddToCart = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.theme.sizing.border.sm};
  width: 36px;
  padding: 5px;
  right: 20px;
  bottom: 20px;
  transition: 0.2s ease-in-out all;
  opacity: 0;
  z-index: 200;
  position: absolute;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    opacity: 1 !important;
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const Wrap = styled.div`
  position: relative;
  &:hover ${AddToCart} {
    opacity: 0.5;
  }
`;

export const ItemWrap = styled(motion.div)`
  flex: 1;
  min-width: 270px;
  max-width: 270px;
  cursor: pointer;
  margin-top: 60px;
  position: relative;

  @media ${(props) => props.theme.sizing.screen.sm} {
    max-width: 100%;
  }
`;

export const Image = styled(motion.img)`
  width: 70px;
  object-fit: contain;
`;

export const HoldImage = styled(motion.div)`
  position: absolute;
  right: 20px;
  top: -30px;
`;

export const Info = styled(motion.div)`
  margin-top: 80px;
`;

export const Name = styled(motion.div)`
  margin-top: 0px;
  color: ${(props) => props.theme.colors.ui.gray};
`;

export const Value = styled.div`
  color: ${(props) => props.theme.colors.ui.grayDark};
  span {
    font-size: ${(props) => props.theme.sizing.font.sm};
    color: ${(props) => props.theme.colors.ui.grayDark};
  }
`;

export const CartImage = styled.img`
  width: 100%;
`;

export const Promotion = styled.div`
  font-size: ${(props) => props.theme.sizing.font.sm};
  padding: 4px 10px;
  background-color: ${(props) => props.theme.colors.ui.primaryLight};
  color: white;
  width: fit-content;
  border-radius: ${(props) => props.theme.sizing.border.sm};
  opacity: 0.6;
  position: absolute;
`;
