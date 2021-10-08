import { Route } from "react-router-dom";
import { Holder, Container } from "./app.styles";

import Header from "./components/header/header.component";

import Shop from "./pages/shop/shop.page";

function App() {
  return (
    <Holder>
      <Container>
        <Header />
        <Route path="/" component={Shop} />
      </Container>
    </Holder>
  );
}

export default App;
