import React, { useState } from "react";

import {
    FormWrap,
    FormContent,
    Form3,
    FormLabel,
    FormInput,
    FormButton,
} from "../../SignUpForm/SignUp.elements";

function CreateCustomerForm() {
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);
    const [fail, setFail] = useState(false);
    const [Error, setError] = useState(false);


    const [customer, setCustomer] = useState({
        name: "",
        email: "",
        ewallet: "",
        number: "",
        expiration_month: "",
        expiration_year: "",
        cvv: "",
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setCustomer((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };

    const getCustomerDetails = () => {
        const {
            name,
            email,
            ewallet,
            number,
            expiration_month,
            expiration_year,
            cvv,
        } = customer;

        // console.log(customer);

        if (
            !name ||
            !email ||
            !ewallet ||
            !number ||
            !expiration_month ||
            !expiration_year ||
            !cvv
        ) {
            setFailure(true);
            console.log("customer Creation Failed");
        } else if (number.length < 16 || (expiration_month.length || expiration_year) > 2 || (expiration_month.length || expiration_year) < 2 || cvv.length < 3 || cvv.length > 3) {
            setFail(true);
            console.log("customer Creation Failed");
        } else {
            const response = fetch("/api/createCustomer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    ewallet,
                    number,
                    expiration_month,
                    expiration_year,
                    cvv,
                }),
            });

            /// Response Error Handling or Inproper Data
            if (response.status >= 200 && response.status <= 299) {
                setSuccess(true);
            } else if (response.status >= 400) {
                setError(true)

            }


            if (failure === true || fail === true) {
                setFail(false);
                setFailure(false);
                setSuccess(true);
            } else if (success === true) {
                setSuccess(true);
            } else {
                setSuccess(true);
            }



            /// Clearing The Form Data
            setCustomer({
                name: "",
                email: "",
                ewallet: "",
                number: "",
                expiration_month: "",
                expiration_year: "",
                cvv: "",
            });

            console.log(customer, "Customer Created");
            console.log(response);
        }
    };

    const createCustomer = (e) => {
        e.preventDefault();
        getCustomerDetails();

        // Vanishing Form Message
        setInterval(function () {
            setSuccess(false);
            setFailure(false);
            setFail(false)
        }, 2000);
    };



    return (
        <FormWrap>
            <FormContent>
                <Form3 style={{ marginTop: "200px", paddingTop: "0px" }}>
                    <FormLabel htmlFor="for">Full Name</FormLabel>
                    <FormInput
                        type="text"
                        id="Input1"
                        name="name"
                        value={customer.name}
                        onChange={InputEvent}
                        placeholder="Enter Your Full Name"
                        required
                    />

                    <FormLabel htmlFor="for">Email</FormLabel>
                    <FormInput
                        type="text"
                        id="Input2"
                        name="email"
                        value={customer.email}
                        onChange={InputEvent}
                        placeholder="Enter Your Email"
                        required
                    />

                    <FormLabel htmlFor="for">Wallet ID </FormLabel>
                    <FormInput
                        type="text"
                        id="Input3"
                        name="ewallet"
                        value={customer.ewallet}
                        onChange={InputEvent}
                        placeholder="Enter a Wallet ID - ewallet_8a695b403979fb788f59acf134b7e30b"
                        required
                    />
                    <FormLabel htmlFor="for">Card Number</FormLabel>
                    <FormInput
                        type="text"
                        id="Input4"
                        name="number"
                        value={customer.number}
                        onChange={InputEvent}
                        placeholder="Enter Your Card Number"
                        required
                    />

                    <FormLabel htmlFor="for">Expiration Month</FormLabel>
                    <FormInput
                        type="text"
                        id="Input5"
                        name="expiration_month"
                        value={customer.expiration_month}
                        onChange={InputEvent}
                        placeholder="Enter Expiration Month in Number - 10"
                        required
                    />
                    <FormLabel htmlFor="for">Expiration Year</FormLabel>
                    <FormInput
                        type="text"
                        id="Input6"
                        name="expiration_year"
                        value={customer.expiration_year}
                        onChange={InputEvent}
                        placeholder="Enter Last two digit of Expiration Year - 23"
                        required
                    />
                    <FormLabel htmlFor="for">CVV</FormLabel>
                    <FormInput
                        type="text"
                        id="Input7"
                        name="cvv"
                        value={customer.cvv}
                        onChange={InputEvent}
                        placeholder="Enter 3 digit CVV"
                        required
                    />

                    {Error === true && <p style={{ color: "#ffff" }}>Something went wrong! </p>}
                    {success === true && (
                        <p style={{ color: "#ffff" }}>Customer Created Successfully</p>
                    )}
                    {failure === true && (
                        <p style={{ color: "#ffff" }}>Please Fill up all the credentials</p>
                    )}
                    {fail === true && (
                        <p style={{ color: "#ffff" }}>Invalid Card Credentials</p>
                    )}
                    <FormButton onClick={createCustomer}>Create Customer</FormButton>
                </Form3>
            </FormContent>
        </FormWrap>
    );
}

export default CreateCustomerForm;
