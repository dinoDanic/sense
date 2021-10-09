import styled from "styled-components";

export const Wrap = styled.div`
  font-size: ${(props) => props.theme.sizing.font.sm};
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
export const GotCoupon = styled.div``;
export const ActiveCoupons = styled.div`
  padding-bottom: 10px;
`;
