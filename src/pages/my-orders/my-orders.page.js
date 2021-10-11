import React from "react";
import TransitionPage from "../../components/transition-page/transition-page.component";
import { Title, Wrap } from "./my-orders.styles";

const MyOrders = () => {
  return (
    <TransitionPage>
      <Wrap>
        <Title>My Orders</Title>
      </Wrap>
    </TransitionPage>
  );
};

export default MyOrders;
