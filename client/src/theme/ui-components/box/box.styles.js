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

const expand = (theme) => `
  width: 80%;
  max-width: 900px;
  position: fixed;
  top: 20%;
  z-index: 999;
  flex-direction: row;
  gap: 20px;
  min-height: 400px;
`;

const product = (theme) => `
  height: 150px;
  justify-content: flex-end;
  border: 1px solid ${theme.colors.ui.grayLight};
`;

const item = (theme) => `
  margin-bottom: 10px;
`;

const variants = {
  expand,
  product,
  item,
};

export const BoxWrap = styled(motion.div)`
  ${({ theme }) => defaultStyle(theme)};
  ${({ theme, variant }) => variant && variants[variant](theme)}
`;
