import styled from "styled-components";

export const Inp = styled.input`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  padding: ${(props) => props.theme.spacing.padding.md}
    ${(props) => props.theme.spacing.padding.lg};
  outline: none;
  border-radius: ${(props) => props.theme.sizing.border.sm};
  color: rgba(255, 255, 255, 0.7);
  margin-top: 5px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

export const Label = styled.label`
  font-size: ${(props) => props.theme.sizing.font.xs};
`;

export const Wrap = styled.div``;
