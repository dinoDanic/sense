import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrap = styled(motion.div)`
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const Content = styled(motion.div)`
  width: 300px;
  background-color: ${(props) => props.theme.colors.ui.danger};
  padding: ${(props) => props.theme.spacing.padding.lg};
  border-radius: ${(props) => props.theme.sizing.border.md};
  color: white;
  margin-top: 20px;
`;
export const Title = styled.div`
  font-weight: bold;
`;
export const Message = styled.div``;
