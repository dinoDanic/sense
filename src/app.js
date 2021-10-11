import { Route } from "react-router-dom";
import { Holder, Container } from "./app.styles";
import { AnimatePresence } from "framer-motion";

import Header from "./components/header/header.component";
import Error from "./components/error/error.component";

import Shop from "./pages/shop/shop.page";
import Checkout from "./pages/checkout/checkout.page";
import Order from "./pages/order/order.page";
import MyOrders from "./pages/my-orders/my-orders.page";

function App() {
  return (
    <Holder>
      <Container>
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Route exact path="/" component={Shop} key="shop" />
          <Route exact path="/checkout" component={Checkout} key="checkout" />
          <Route exact path="/checkout/order" component={Order} key="orders" />
          <Route exact path="/my-orders" component={MyOrders} key="my-orders" />
        </AnimatePresence>
      </Container>
      <Error />
    </Holder>
  );
}

export default App;
