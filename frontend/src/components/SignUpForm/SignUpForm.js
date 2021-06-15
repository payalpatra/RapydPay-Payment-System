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
  const [isClicked, setIsClicked] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
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

  const PostData = () => {
    console.log("User Login")
  }


  const RegisterUser = (e) => {
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
              <FormH1>Register</FormH1>
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

              <FormLabel autoComplete="off" htmlFor="for">Password</FormLabel>
              <FormInput
                type="text"
                id="Input3"
                name="password"
                value={data.password}
                onChange={InputEvent}
                placeholder="Enter Your Password"
                required
              />
              <FormButton type="submit" onClick={RegisterUser}>Register</FormButton>
              {isClicked ? (<FormH1 style={{ marginTop: "15px" }} >Already Have an account ?
                <FormButton2>
                  <Link style={{ color: "#fff", textDecoration: "none" }} exact to="/login"  >
                    Login
                  </Link>
                </FormButton2>
              </FormH1>) :
                (<FormH1 style={{ marginTop: "15px" }} >You are Logged In !
                  <FormButton2>
                    <Link style={{ color: "#fff", textDecoration: "none" }} exact to="/services"  >
                      Explore Services
                    </Link>
                  </FormButton2>
                </FormH1>
                )}

            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}

export default SignUpForm;
// style={{marginLeft: "10px", padding:"2px", border: "1px solid grey",backgroundColor:"#4B59F7",textDecoration:"none",color:"#FFFFFF",borderRadius:"4px"}}