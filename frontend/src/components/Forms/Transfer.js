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



function Transfer() {

    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);
    const [Error, setError] = useState(false);



    /// Declaring State for Transaction Model

    const [transferDetails, setTransferDetails] = useState({
        source_ewallet: "",
        amount: "",
        destination_ewallet: "",
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


    // Posting Transfer Details
    const PostData = async () => {
        let Data = {
            source_ewallet: transferDetails.source_ewallet,
            amount: transferDetails.amount.toString(),
            destination_ewallet: transferDetails.destination_ewallet,
        };

        if (!Data.amount || !Data.destination_ewallet) {
            setFailure(true);

        } else {

            // Transfering Money Between Walllets !!
            const response = await fetch("/api/transfer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(Data)
            });

            /// Response Error Handling or Inproper Data
            if (response.status >= 200 && response.status <= 299) {
                setSuccess(true);
            } else {
                setError(true)

            }


            if (failure === true) {
                setFailure(false);
                setSuccess(true);
            } else {
                setSuccess(true);
            }




            /// Clearing the form Data
            setTransferDetails({
                source_ewallet: "",
                amount: "",
                destination_ewallet: "",
            });

            console.log(response);
            console.log("Transfer Succesfful");
        }
    };

    const sendMoney = (e) => {
        // Post Request to transfer
        e.preventDefault();
        PostData();

        // Vanishing Form Message
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
                        <Form post >
                            <FormH1>Wallet To Wallet Transfer</FormH1>
                            <FormLabel htmlFor="for">From Wallet ID</FormLabel>
                            <FormInput
                                type="text"
                                id="Input1"
                                name="source_ewallet"
                                value={transferDetails.ewallet_id}
                                onChange={InputEvent}
                                placeholder="Enter Wallet ID of the Sender"
                                required
                            />

                            <FormLabel htmlFor="for">Amount</FormLabel>
                            <FormInput
                                type="text"
                                autocomplete="off"
                                id="Input2"
                                name="amount"
                                value={transferDetails.amount}
                                onChange={InputEvent}
                                placeholder="Enter Amount"
                                required
                            />

                            <FormLabel htmlFor="for">To Wallet ID</FormLabel>
                            <FormInput
                                type="text"
                                id="Input3"
                                autoComplete="off"
                                name="destination_ewallet"
                                value={transferDetails.destination_ewallet}
                                onChange={InputEvent}
                                placeholder="Enter Wallet ID of the Reciever"
                                required
                            />



                            {Error === true && <p style={{ color: "#ffff" }}>Something went wrong! </p>}
                            {success === true && (
                                <p style={{ color: "#ffff" }}>Transaction Successfull</p>
                            )}
                            {failure === true && (
                                <p style={{ color: "#ffff" }}>
                                    Please Fill up Valid credentials
                                </p>
                            )}
                            <FormButton onClick={sendMoney}>Send</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Transfer
