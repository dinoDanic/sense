import { motion } from "framer-motion";
import styled from "styled-components";

export const BigItem = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;

export const Container = styled.div``;

export const Info = styled(motion.div)`
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
`;

export const Images = styled(motion.div)`
  flex: 1;
`;
export const Content = styled.div`
  flex: 1;
`;
export const EditName = styled.div`
  color: ${(props) => props.theme.colors.ui.primary};
  font-weight: bold;
`;

export const About = styled.div`
  font-size: 0.9rem;
  opacity: 0.8;
`;
export const AfterInfo = styled(motion.div)`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;
export const Price = styled.div`
  color: ${(props) => props.theme.colors.ui.primary};
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Currency = styled.div`
  font-size: 0.8rem;
  margin-left: 5px;
  margin-right: 5px;
  color: ${(props) => props.theme.colors.ui.gray};
  font-weight: normal;
`;

export const PriceText = styled.div`
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.ui.gray};
  font-weight: normal;
`;

export const HoldInfo = styled.div``;
