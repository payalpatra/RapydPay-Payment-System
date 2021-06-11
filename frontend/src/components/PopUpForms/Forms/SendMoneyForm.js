import React, { useState } from 'react'

import {
    FormWrap,
    FormContent,
    Form3,
    FormLabel,
    FormInput,
    FormButton,


} from "../../SignUpForm/SignUp.elements";

function SendMoneyForm({ fullName, phone_number, email, ewallet_id, rapydId, balance }) {
    

    const [transferDetails, setTransferDetails] = useState({
        "first_name": "",

    });


    const InputEvent = (event) => {
        const { name, value } = event.target;
        setTransferDetails((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };

    const sendMoney = () => {
        console.log(ewallet_id)
        console.log("Money Transfer SUCCESS")
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
                        // value={wallet.first_name}
                        onChange={InputEvent}
                        placeholder="Enter Your First Name"
                        required
                    />

                    <FormLabel htmlFor="for">Last Name</FormLabel>
                    <FormInput
                        type="text"
                        id="Input2"
                        name="last_name"
                        // value={wallet.last_name}
                        onChange={InputEvent}
                        placeholder="Enter Your Last Name"
                        required
                    />

                    <FormLabel htmlFor="for">Phone No </FormLabel>
                    <FormInput
                        type="text"
                        id="Input3"
                        name="phone_number"
                        // value={wallet.phone_number}
                        onChange={InputEvent}
                        placeholder="Mobile Number in E.164 Format - +91 8140946256"
                        required
                    />
                    <FormLabel htmlFor="for">Email</FormLabel>
                    <FormInput
                        type="text"
                        id="Input4"
                        name="email"
                        // value={wallet.email}
                        onChange={InputEvent}
                        placeholder="Enter Your email"
                        required
                    />
                    <FormButton onClick={sendMoney}>
                        Send
                    </FormButton>

                </Form3>

            </FormContent>
        </FormWrap>
    )
}

export default SendMoneyForm
