import styled from "styled-components";
import { motion } from "framer-motion";

const defaultStyle = (theme) => `
    padding: 12px ${theme.spacing.padding.lg};
    background-color: ${theme.colors.ui.primaryLight};
    border-radius: ${theme.sizing.border.sm};
    border: none;
    color: white;
    cursor: pointer;
`;

export const Btn = styled(motion.button)`
  ${({ theme }) => defaultStyle(theme)}
`;
