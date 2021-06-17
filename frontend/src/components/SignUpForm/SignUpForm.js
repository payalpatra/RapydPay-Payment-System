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
} from "./SignUp.elements.js";

function SignUpForm() {

  const [success, setSuccess] = useState(false);
  const [Error, setError] = useState(false);


  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle Input Change
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const PostData = async () => {

    let {
      name,
      email,
      message,
    } = data;

    if (!name || !email || !message) {

    } else {// Transfering Money Between Walllets !!
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          { name, message, email }
        )
      });

      /// Response Error Handling or Inproper Data
      if (response.status >= 200 && response.status <= 299) {
        console.log({ name, message, email })
        console.log(data)
        setSuccess(true);
      } else {
        setError(true)

      }
    }



  }


  const sendMessage = (e) => {
    e.preventDefault();
    PostData()

  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">RapydPay </Icon>
          <FormContent>
            <Form post >
              <FormH1>Feedback</FormH1>
              <FormLabel htmlFor="for">Full Name</FormLabel>
              <FormInput
                type="text"
                id="Input1"
                name="name"
                value={data.name}
                onChange={InputEvent}
                placeholder="Enter Your Name"
                required
              />

              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                id="Input2"
                name="email"
                value={data.email}
                onChange={InputEvent}
                placeholder="Enter Your Email"
                required
              />

              <FormLabel autoComplete="off" htmlFor="for">Message</FormLabel>
              <FormInput
                type="text"
                autoComplete="off"
                id="Input3"
                name="message"
                value={data.message}
                onChange={InputEvent}
                placeholder="Enter Your message"
                required
              />



              {Error === true && <p style={{ color: "#ffff" }}>Something went wrong! </p>}
              {success === true && (
                <p style={{ color: "#ffff" }}>Thank your Feedback</p>
              )}
              <FormButton type="submit" onClick={sendMessage}>Send Your Feedback</FormButton>

            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}

export default SignUpForm;
// style={{marginLeft: "10px", padding:"2px", border: "1px solid grey",backgroundColor:"#4B59F7",textDecoration:"none",color:"#FFFFFF",borderRadius:"4px"}}