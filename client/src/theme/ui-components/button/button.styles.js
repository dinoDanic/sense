import styled from "styled-components";
import { motion } from "framer-motion";

const defaultStyle = (theme) => `
    padding: ${theme.spacing.padding.lg} ${theme.spacing.padding.lg};
    background-color: ${theme.colors.ui.primaryLight};
    border-radius: ${theme.sizing.border.sm};
    border: none;
    color: white;
    height: fit-content;
    cursor: pointer;
`;

const noValid = () => `
  background: rgba(0,0,0,0.1);
  color:rgba(255,255,255,0.4); 
  cursor: not-allowed;
`;

const green = (theme) => `
  background-color: ${theme.colors.ui.secondary};
`;

const sm = (theme) => `
padding: ${theme.spacing.padding.md} ${theme.spacing.padding.lg};
`;

const round = (theme) => `
  width: 30px;
  height: 30px;
  border-radius: 100%;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const colors = {
  green,
};

const sizes = {
  sm,
};

const variants = {
  round,
};

export const Btn = styled(motion.button)`
  ${({ theme }) => defaultStyle(theme)}
  ${({ color, theme }) => color && colors[color](theme)}
  ${({ size, theme }) => size && sizes[size](theme)}
  ${({ variant, theme }) => variant && variants[variant](theme)}
  ${({ validate, theme }) => !validate && noValid(theme)}
`;

Btn.defaultProps = {
  validate: true,
};
