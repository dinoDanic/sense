import styled from "styled-components";

export const Wrap = styled.div`
  background-color: ${(props) => props.theme.colors.ui.primaryLight};
  border-radius: ${(props) => props.theme.sizing.border.md};
  width: 100%;
  min-height: 200px;
  padding: ${(props) => props.theme.spacing.padding.lg};
  color: white;
  input {
    margin-bottom: 15px;
  }
`;

export const Text = styled.div`
  font-size: ${(props) => props.theme.sizing.font.md};
`;

export const CardType = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const CardImage = styled.img`
  width: 55px;
  border-radius: ${(props) => props.theme.sizing.border.sm};
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 10px 10px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.4);
  }
`;
export const Inputs = styled.div`
  display: flex;
  gap: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;
