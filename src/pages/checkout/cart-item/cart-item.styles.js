import styled from "styled-components";

export const Wrap = styled.div`
  border-radius: ${(props) => props.theme.sizing.border.md};
  padding: ${(props) => props.theme.spacing.padding.md};
  box-shadow: ${(props) => props.theme.colors.shadows.default};
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;
export const Info = styled.div`
  display: flex;
  align-items: center;
  min-width: 300px;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: ${(props) => props.theme.sizing.border.sm};
  margin-right: 10px;
`;

export const InfoText = styled.div``;
export const Name = styled.div``;
export const Description = styled.div`
  font-size: ${(props) => props.theme.sizing.font.sm};
  color: ${(props) => props.theme.colors.ui.gray};
`;

export const RightHold = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
`;
export const Delete = styled.div``;
export const Amount = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70px;
`;
export const Value = styled.div`
  font-weight: bold;
  margin: 0 20px;
`;
export const Remove = styled.div`
  margin-top: 4px;
  cursor: pointer;
`;
export const Add = styled.div`
  margin-top: 4px;
  cursor: pointer;
`;
export const AmountValue = styled.div`
  font-size: ${(props) => props.theme.sizing.font.sm};
  border: 1px solid ${(props) => props.theme.colors.ui.grayLight};
  border-radius: ${(props) => props.theme.sizing.border.sm};
  padding: 5px 10px;
`;

export const Trash = styled.img`
  cursor: pointer;
  width: 20px;
  margin-top: 3px;
  filter: grayscale(100%);
  opacity: 0.2;
  &:hover {
    opacity: 1;
    filter: grayscale(0%);
  }
`;

export const Holder = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  justify-content: flex-end;
`;
