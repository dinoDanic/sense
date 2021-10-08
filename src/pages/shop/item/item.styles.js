import styled from "styled-components";
import { motion } from "framer-motion";

export const ItemWrap = styled(motion.div)`
  flex: 1;
  min-width: 270px;
  max-width: 270px;
  cursor: pointer;
  margin-top: 60px;
`;

export const Image = styled.img`
  width: 60px;
  object-fit: contain;
  margin-top: -30%;
`;

export const HoldImage = styled(motion.div)`
  display: flex;
  height: 50px;
  justify-content: flex-end;
`;

export const Info = styled(motion.div)``;

export const Name = styled(motion.div)`
  margin-top: 30px;
  color: ${(props) => props.theme.colors.ui.gray};
`;

export const Value = styled.div`
  color: ${(props) => props.theme.colors.ui.grayDark};
`;
