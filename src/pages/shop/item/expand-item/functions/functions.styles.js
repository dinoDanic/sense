import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  button {
    margin-left: 5px;
  }
`;
export const Add = styled.div`
  border: 1px solid ${(props) => props.theme.colors.ui.grayLight};
  border-radius: ${(props) => props.theme.sizing.border.sm};
  height: 100%;
  padding: 10px;
  width: 40px;
  display: flex;
  justify-content: center;
  font-size: 0.9rem;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.theme.colors.ui.grayDark};
  transition: 0.2s ease all;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }
`;
export const Amount = styled.div`
  font-size: 0.9rem;
  margin: 0 10px;
`;
