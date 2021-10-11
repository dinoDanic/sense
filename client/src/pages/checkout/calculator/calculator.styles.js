import styled from "styled-components";

export const Wrap = styled.div`
  font-size: ${(props) => props.theme.sizing.font.sm};
  padding-top: 10px;
  margin-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;
export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export const Name = styled.div``;
export const Value = styled.div``;
export const Coupon = styled.div``;
export const AddCoupon = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
  button {
    margin-top: 5px;
  }
`;
export const GotCoupon = styled.div`
  font-size: ${(props) => props.theme.sizing.font.xs};
  padding: ${(props) => props.theme.spacing.padding.md};
  border-radius: ${(props) => props.theme.sizing.border.sm};
  width: fit-content;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.1);
  transition: 0.2s ease all;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  margin-bottom: 10px;
`;
export const ActiveCoupons = styled.div`
  padding-bottom: 10px;
`;
