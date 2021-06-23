import React, { useState } from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
} from "../SignUpForm/SignUp.elements.js";

function Payment() {
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [Error, setError] = useState(false);

  /// Declaring State for Payment Model
  const [PaymentDetails, setPaymentDetails] = useState({
    customer: "",
    amount: "",
    ewallet: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setPaymentDetails((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  // Posting Payment Details
  const PostData = async () => {
    let Data = {
      customer: PaymentDetails.customer,
      amount: PaymentDetails.amount.toString(),
      ewallet: PaymentDetails.ewallet,
    };

    if (!Data.amount || !Data.ewallet) {
      setFailure(true);
    } else if (Data.ewallet.length < 40) {
      setFailure(true);
    } else {
      // Payments By Customer To e wallets
      const response = await fetch("/api/createPayment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Data),
      });

      //  Response Error Handling or Inproper Data
      if (response.status >= 200 && response.status <= 299) {
        setSuccess(true);
      } else {
        setError(true);
      }

      // Form Validations
      if (failure === true) {
        setFailure(false);
        setSuccess(true);
      } else {
        setSuccess(true);
      }

      /// Clearing the form Data
      setPaymentDetails({
        customer: "",
        amount: "",
        ewallet: "",
      });

      // console.log(response)
      console.log("Payment Succesfful");
    }
  };

  const sendPayment = (e) => {
    // Post Request to Payment
    e.preventDefault();
    PostData();
    setInterval(function () {
      setSuccess(false);
      setFailure(false);
    }, 2000);
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/wallet">RapydPay </Icon>
          <FormContent>
            <Form post>
              <FormH1>Customer Payment</FormH1>
              <FormLabel htmlFor="for">From Customer ID</FormLabel>
              <FormInput
                type="text"
                id="Input1"
                name="customer"
                value={PaymentDetails.customerId}
                onChange={InputEvent}
                placeholder="Enter Your CUSTOMER ID"
                required
              />

              <FormLabel htmlFor="for">Amount</FormLabel>
              <FormInput
                type="text"
                autocomplete="off"
                id="Input2"
                name="amount"
                value={PaymentDetails.amount}
                onChange={InputEvent}
                placeholder="Enter Amount"
                required
              />

              <FormLabel htmlFor="for">To wallet ID</FormLabel>
              <FormInput
                type="text"
                id="Input3"
                autoComplete="off"
                name="ewallet"
                value={PaymentDetails.ewallet}
                onChange={InputEvent}
                placeholder="Enter WALLET ID"
                required
              />

              {Error === true && (
                <p style={{ color: "#ffff" }}>Something went wrong! </p>
              )}

              {success === true && (
                <p style={{ color: "#ffff" }}>Payment Successfull</p>
              )}
              {failure === true && (
                <p style={{ color: "#ffff" }}>
                  Please Fill up Valid credentials
                </p>
              )}
              <FormButton onClick={sendPayment}>Send</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}

export default Payment;
