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
    let ewallet_reference_id = Math.floor(Math.random() * 1000000000) + 1 + Math.floor(Math.random() * 1000000000) + 1
    let balance = 0;
    const [wallet, setWallet] = useState({
        "first_name": "",
        "last_name": "",
        "ewallet_reference_id": ewallet_reference_id,
        "type": "person",
        "phone_number": "",
        "email": "",
        "balance":balance
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


        const { first_name, last_name, ewallet_reference_id, type, phone_number, email,balance } = wallet;
        console.log(wallet);

        const response = fetch("ewallet", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                first_name, last_name, ewallet_reference_id, type, phone_number, email, balance
            })
        });

        console.log(response)


    }

    const createWallet = (e) => {
        e.preventDefault();
        getWalletDetails()

    }


    return (

        <FormWrap>

            <FormContent>
                <Form3 >
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
                    <FormButton onClick={createWallet}>
                        Create Wallet
                    </FormButton>

                </Form3>

            </FormContent>
        </FormWrap>
    )
}

export default CreateWalletForm
