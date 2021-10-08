import styled from "styled-components";

export const CartWrap = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  &:last-child {
    margin-bottom: 0;
  }
`;
export const Name = styled.div`
  font-size: 0.9rem;
  flex: 1;
`;

export const Remove = styled.div`
  width: 20px;
  font-size: 0.7rem;
  height: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid white; */
  border-radius: 100%;
  /* background-color: ${(props) => props.theme.colors.ui.primary}; */
  color: ${(props) => props.theme.colors.ui.primary};
  margin-left: 15px;
`;

export const Amount = styled.div`
  font-size: 0.9rem;
`;
