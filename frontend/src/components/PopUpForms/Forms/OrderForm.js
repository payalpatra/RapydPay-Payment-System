import React, { useState } from 'react'

import {
    FormWrap,
    FormContent,
    Form2,
    FormLabel,
    FormInput,
    FormButton,


} from "../../SignUpForm/SignUp.elements";

function OrderForm() {
    const [data, setData] = useState({
        name: "",
        address: "",
        phone: "",
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

    const  click = () => {
        console.log(data)
    }

    // https://sandboxcheckout.rapyd.net?token=checkout_eb421dd93ddf1b10262b9fb7865a02fb

    return (


        <FormWrap>

            <FormContent>
                <Form2 >
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

                    <FormLabel htmlFor="for">Phone No </FormLabel>
                    <FormInput
                        type="text"
                        id="Input2"
                        name="phone"
                        value={data.phone}
                        onChange={InputEvent}
                        placeholder="Enter Your Phone phone"
                        required
                    />
                    <FormLabel htmlFor="for">Address</FormLabel>
                    <FormInput
                        type="text"
                        id="Input3"
                        name="address"
                        value={data.address}
                        onChange={InputEvent}
                        placeholder="Enter Your address"
                        required
                    />
                    <FormButton>
                        Make Payment
                    </FormButton>

                </Form2>

            </FormContent>
        </FormWrap>


    )
}

export default OrderForm
