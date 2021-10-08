import styled from "styled-components";
import { motion } from "framer-motion";

const defaultStyle = (theme) => `
  display: flex;
  flex-direction: column;
  border-radius: ${theme.sizing.border.md};
  padding: ${theme.spacing.padding.lg};
  box-shadow: ${theme.colors.shadows.default}
  background: ${theme.colors.gradiant.default};
`;

export const BoxWrap = styled(motion.div)`
  ${({ theme }) => defaultStyle(theme)}
`;
