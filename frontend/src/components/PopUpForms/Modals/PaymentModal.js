import React, { useRef, useEffect, useState, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

import {
    FormWrap,
    FormContent,
    Form4,
    FormLabel,
    FormInput,
    FormButton,
} from "../../SignUpForm/SignUp.elements";

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

const ModalWrapper = styled.div`
  width: auto;
  height: auto;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #010101;
  color: #000;
  display: grid;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  border-radius: 10px;

  @media screen and (max-width: 964px) {
    top: 40px;
    width: auto;
    height: auto;
  }
  @media screen and (max-width: 415px) {
    top: 70px;
    width: auto;
    height: auto;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

function PaymentModal({ showModal, setShowModal, clickedTcustomer }) {
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);

    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250,
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
    });

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(
        (e) => {
            if (e.key === "Escape" && showModal) {
                setShowModal(false);
                console.log("I pressed");
            }
        },
        [setShowModal, showModal]
    );

    useEffect(() => {
        document.addEventListener("keydown", keyPress);
        return () => document.removeEventListener("keydown", keyPress);
    }, [keyPress]);

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
            customer: clickedTcustomer.customerId,
            amount: PaymentDetails.amount.toString(),
            ewallet: PaymentDetails.ewallet,
        };
        console.log(Data);

        if (!Data.amount || !Data.ewallet) {
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



            console.log(response)
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
            {showModal ? (
                <Background onClick={closeModal} ref={modalRef}>
                    <animated.div style={animation}>
                        <ModalWrapper showModal={showModal}>
                            {/* Form */}
                            <FormWrap>
                                <FormContent>
                                    <Form4 autoComplete="off">
                                        <FormLabel htmlFor="for">From Customer ID</FormLabel>
                                        <FormInput
                                            type="text"
                                            id="Input1"
                                            name="customer"
                                            value={clickedTcustomer.customerId}
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
                                            placeholder=""
                                            required
                                        />

                                        {success === true && (
                                            <p style={{ color: "#ffff" }}>Transaction Successfull</p>
                                        )}
                                        {failure === true && (
                                            <p style={{ color: "#ffff" }}>
                                                Please Fill up Valid credentials
                                            </p>
                                        )}
                                        <FormButton onClick={sendPayment}>Send</FormButton>
                                    </Form4>
                                </FormContent>
                            </FormWrap>
                            <CloseModalButton
                                aria-label="Close modal"
                                onClick={() => setShowModal((prev) => !prev)}
                            />
                        </ModalWrapper>
                    </animated.div>
                </Background>
            ) : null}
        </>
    );
}

export default PaymentModal;
