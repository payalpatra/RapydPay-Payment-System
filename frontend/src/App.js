import React from "react";
import Store from "./Store";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import Wallet from "./pages/Wallet/Wallet";
import Customer from "./pages/Customer/Customer";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Navbar, Footer } from "./components";

//  Rapyd Interaction Forms
import CreateCustomer from "./components/Forms/CreateCustomer"
import Transfer from "./components/Forms/Transfer"
import CreateWallet from "./components/Forms/CreateWallet"
import Payment from "./components/Forms/Payment"




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
          <Route path="/sign-up" component={SignUpForm} />
          <Route path="/wallet" component={Wallet} />
          <Route path="/customer" component={Customer} />

          {/* Forms */}
          <Route path="/createCustomer" component={CreateCustomer} />
          <Route path="/transfer" component={Transfer} />
          <Route path="/createWallet" component={CreateWallet} />
          <Route path="/payment" component={Payment} />
          
       
        </Switch>
        <Footer />
      </Router>
    </Store>
  );
}

export default App;
