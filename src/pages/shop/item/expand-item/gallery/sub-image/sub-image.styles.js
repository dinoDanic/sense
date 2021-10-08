import styled from "styled-components";

export const SubHolder = styled.div`
  flex: 1;
`;
export const SubImage = styled.img`
  width: 100%;
  border-radius: ${(props) => props.theme.sizing.border.md};
  margin-top: 5px;
  max-height: 80px;
  object-fit: cover;
`;
