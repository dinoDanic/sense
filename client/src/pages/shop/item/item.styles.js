import styled from "styled-components";
import { motion } from "framer-motion";

export const ItemWrap = styled(motion.div)`
  flex: 1;
  min-width: 270px;
  max-width: 270px;
  cursor: pointer;
  margin-top: 60px;
  position: relative;
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

export const Info = styled(motion.div)``;

export const Name = styled(motion.div)`
  margin-top: 0px;
  color: ${(props) => props.theme.colors.ui.gray};
`;

export const Value = styled.div`
  color: ${(props) => props.theme.colors.ui.grayDark};
`;
