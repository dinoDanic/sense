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

const green = (theme) => `
  background-color: ${theme.colors.ui.secondary};
`;

const sm = (theme) => `
padding: ${theme.spacing.padding.md} ${theme.spacing.padding.lg};
`;

const colors = {
  green,
};

const sizes = {
  sm,
};

export const Btn = styled(motion.button)`
  ${({ theme }) => defaultStyle(theme)}
  ${({ color, theme }) => color && colors[color](theme)}
  ${({ size, theme }) => size && sizes[size](theme)}
`;
