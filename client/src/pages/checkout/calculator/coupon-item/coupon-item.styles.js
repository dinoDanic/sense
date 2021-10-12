import styled from "styled-components";

export const Hold = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 20px;
  z-index: 100;
`;

const withOrder = (theme) => `
  &:hover ${Value} {
    transform: translateX(-0px) !important;
    pointer-events: none;
  }
  &:hover ${Remove} {
    opacity: 0 !important;
    pointer-events: none;
  }
`;

export const Value = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  width: 100px;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  z-index: 900;
  transition: 0.2s ease-in-out all;
  right: 0;
`;
export const Remove = styled.div`
  position: absolute;
  z-index: 50;
  margin-top: 2px;
  top: 0;
  z-index: 200;
  cursor: pointer;
  opacity: 0;
  right: 0;
  transition: 0.3s ease all;
`;
export const Wrap = styled.div`
  ${({ order, theme }) => order && withOrder(theme)};

  overflow: hidden;
  height: 20px;
  width: 100%;
  position: relative;
  &:hover ${Value} {
    transform: translateX(-55px);
    pointer-events: none;
  }
  &:hover ${Remove} {
    opacity: 1;
  }
`;

export const Name = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
