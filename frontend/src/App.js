import React from "react";
import Store from "./Store";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import Wallet from "./pages/Wallet/Wallet";
import SignUp from "./pages/SignUp/SignUp";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Navbar, Footer } from "./components";



function App() {

  return (
    <Store>
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/wallet" component={Wallet} />
          <Route path="/cart" component={CheckoutPage} />
        </Switch>
        <Footer />
      </Router>

    </Store>
  );
}

export default App;

