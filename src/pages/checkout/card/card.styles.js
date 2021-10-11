import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Wrap = styled.div`
  background-color: ${(props) => props.theme.colors.ui.primaryLight};
  border-radius: ${(props) => props.theme.sizing.border.md};
  min-height: 200px;
  padding: ${(props) => props.theme.spacing.padding.lg};
  color: white;
  position: relative;
  input {
    margin-bottom: 15px;
  }
`;

export const Text = styled.div`
  font-size: ${(props) => props.theme.sizing.font.md};
`;

export const DetailsWrap = styled(motion.div)`
  position: relative;
  overflow: hidden;
`;
export const Slider = styled(motion.div)`
  display: flex;
  min-width: 100%;
`;
export const DetailsHolder = styled.div`
  min-width: 100%;
`;
export const ButtonsHolder = styled.div`
  display: flex;
  gap: 10px;
  button {
    flex: 1;
  }
`;

export const Next = styled.div`
  margin-right: -14px;
`;
export const Prev = styled.div`
  margin-left: -14px;
  transform: rotate(180deg);
`;

const arrowStyle = css`
  width: 13px;
  height: 13px;
`;

export const ArrowNext = styled.img`
  ${arrowStyle}
`;
export const ArrowPrev = styled.img`
  ${arrowStyle}
`;
