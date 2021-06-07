import React, { useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
// import faker from "faker";

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
  FormButton2,
} from "./SignUp.elements.js";

function SignUpForm() {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  // let id = faker.random.uuid();
  const formSubmit = (e) => {
    e.preventDefault();
    // const userdata = {
    //   id: id,
    //   fullName: data.fullName,
    //   email: data.email,
    //   message: data.message,
    // };
    // await axios
    //   .post("/.netlify/functions/addData", userdata)
    //   .then((response) => {
    //     window.location.href = "/ThankYou";
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">RapydPay </Icon>
          <FormContent>
            <Form post action onSubmit={formSubmit}>
              <FormH1>Register</FormH1>
              <FormLabel htmlFor="for">Full Name</FormLabel>
              <FormInput
                type="text"
                id="Input1"
                name="fullName"
                value={data.fullName}
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
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                type="text"
                id="Input3"
                name="password"
                value={data.password}
                onChange={InputEvent}
                placeholder="Enter Your Password"
                required
              />
              <FormButton type="submit">Register</FormButton>
              <FormH1 style={{ marginTop: "15px" }} >Already Have an account ?
              <FormButton2>
                  <Link style={{ color:"#fff",textDecoration:"none" }}exact to="/login"  >
                    Login
              </Link>
                </FormButton2>
              </FormH1>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}

export default SignUpForm;
// style={{marginLeft: "10px", padding:"2px", border: "1px solid grey",backgroundColor:"#4B59F7",textDecoration:"none",color:"#FFFFFF",borderRadius:"4px"}}