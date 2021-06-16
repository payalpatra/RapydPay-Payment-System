import React, { useState } from 'react'

import {
    FormWrap,
    FormContent,
    Form3,
    FormLabel,
    FormInput,
    FormButton,


} from "../../SignUpForm/SignUp.elements";

function CreateWalletForm() {
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);
    const [fail, setFail] = useState(false);
    const [Error, setError] = useState(false);

    let ewallet_reference_id = Math.floor(Math.random() * 1000000000) + 1 + Math.floor(Math.random() * 1000000000) + 1
    let balance = 0;

    const [wallet, setWallet] = useState({
        "first_name": "",
        "last_name": "",
        "ewallet_reference_id": ewallet_reference_id,
        "type": "person",
        "phone_number": "",
        "email": "",
        "balance": balance
    });


    const InputEvent = (event) => {
        const { name, value } = event.target;
        setWallet((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };


    const getWalletDetails = () => {


        const { first_name, last_name, ewallet_reference_id, type, phone_number, email, balance } = wallet;
        console.log(wallet);

        if (!first_name || !last_name || !phone_number || !email) {
            setFailure(true)
            console.log("Wallet Creation Failed")

        } else if (phone_number.slice(0, 1) !== "+" || phone_number.length < 10) {
            setFail(true)
            console.log("Wallet Creation Failed")

        } else {

            const response = fetch("/api/ewallet", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    first_name, last_name, ewallet_reference_id, type, phone_number, email, balance
                })
            });

            /// Response Error Handling or Inproper Data
            if (response.status >= 200 && response.status <= 299) {
                setSuccess(true);
            } else {
                setError(true)

            }


            // Form Validation 
            if (failure === true || fail === true) {
                setFail(false);
                setFailure(false)
                setSuccess(true);
            } else if (success === true) {
                setSuccess(true);

            } else {
                setSuccess(true);
            }



            /// Clearing The Form Data 
            setWallet({
                "first_name": "",
                "last_name": "",
                "ewallet_reference_id": ewallet_reference_id,
                "type": "person",
                "phone_number": "",
                "email": "",
                "balance": balance
            })


            console.log("Wallet Created")
            console.log(response)
        }



    }

    const createWallet = (e) => {
        e.preventDefault();
        getWalletDetails()
        setInterval(function () {
            setSuccess(false);
            setFailure(false);
        }, 2000);

    }


    return (

        <FormWrap>

            <FormContent>
                <Form3 style={{ marginTop: "50px", paddingTop: "0px" }}>
                    <FormLabel htmlFor="for">First Name</FormLabel>
                    <FormInput
                        type="text"
                        id="Input1"
                        name="first_name"
                        value={wallet.first_name}
                        onChange={InputEvent}
                        placeholder="Enter Your First Name"
                        required
                    />

                    <FormLabel htmlFor="for">Last Name</FormLabel>
                    <FormInput
                        type="text"
                        id="Input2"
                        name="last_name"
                        value={wallet.last_name}
                        onChange={InputEvent}
                        placeholder="Enter Your Last Name"
                        required
                    />

                    <FormLabel htmlFor="for">Phone No </FormLabel>
                    <FormInput
                        type="text"
                        id="Input3"
                        name="phone_number"
                        value={wallet.phone_number}
                        onChange={InputEvent}
                        placeholder="Mobile Number in E.164 Format - +91 8140946256"
                        required
                    />
                    <FormLabel htmlFor="for">Email</FormLabel>
                    <FormInput
                        type="text"
                        id="Input4"
                        name="email"
                        value={wallet.email}
                        onChange={InputEvent}
                        placeholder="Enter Your email"
                        required
                    />
                    {Error === true && <p style={{ color: "#ffff" }}>Something went wrong! </p>}
                    {success === true && <p style={{ color: "#ffff" }}>Your Wallet Created</p>}
                    {failure === true && <p style={{ color: "#ffff" }}>Please Fill up all the credentials</p>}
                    {fail === true && <p style={{ color: "#ffff" }}>Invalid Phone Number</p>}
                    <FormButton onClick={createWallet}>
                        Create Wallet
                    </FormButton>

                </Form3>

            </FormContent>
        </FormWrap>
    )
}

export default CreateWalletForm;
