import { motion } from "framer-motion";
import styled from "styled-components";

export const Preview = styled(motion.div)`
  position: absolute;
  width: fit-content;
  background-color: ${(props) => props.theme.colors.ui.primaryLight};
  padding: ${(props) => props.theme.spacing.padding.lg};
  border-radius: ${(props) => props.theme.sizing.border.md};
  color: white;
  width: 200px;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 36px;
  opacity: 0;
  pointer-events: none;
  transition: 0.2s ease-in-out;
  transform: translateY(0px);
`;

export const Wrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 200;
  margin-left: 20px;
  &:hover ${Preview} {
    opacity: 1;
    pointer-events: all;
    transform: translateY(10px);
  }
`;
export const Image = styled.img`
  width: 36px;
`;

export const CartCount = styled(motion.div)`
  position: absolute;
  bottom: -5px;
  right: -5px;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.65rem;
  color: white;
  background-color: ${(props) => props.theme.colors.ui.primaryLight};
`;

export const Arrow = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.theme.colors.ui.primaryLight};
  transform: rotate(45deg);
  top: -5px;
`;

export const ExtandHold = styled.div`
  background-color: red;
  position: absolute;
  width: 100%;
  height: 30px;
  top: -20px;
  opacity: 0;
  /* pointer-events: none; */
`;
