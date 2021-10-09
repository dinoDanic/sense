import { Route } from "react-router-dom";
import { Holder, Container } from "./app.styles";
import { AnimatePresence } from "framer-motion";

import Header from "./components/header/header.component";

import Shop from "./pages/shop/shop.page";
import Checkout from "./pages/checkout/checkout.page";

function App() {
  return (
    <Holder>
      <Container>
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Route exact path="/" component={Shop} />
          <Route path="/checkout" component={Checkout} />
        </AnimatePresence>
      </Container>
    </Holder>
  );
}

export default App;
