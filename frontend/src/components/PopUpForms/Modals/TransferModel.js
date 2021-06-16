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

function TransferModel({ showModal, setShowModal, clickedTWallet }) {
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);
    const [Error, setError] = useState(false);

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
            source_ewallet: clickedTWallet.ewallet_id,
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
        console.log("I am the clicked wallet ", clickedTWallet);
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
                                        <FormLabel htmlFor="for">From Wallet ID</FormLabel>
                                        <FormInput
                                            type="text"
                                            id="Input1"
                                            name="source_ewallet"
                                            value={clickedTWallet.ewallet_id}
                                            onChange={InputEvent}
                                            placeholder="Enter Your First Name"
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

                                        <FormLabel htmlFor="for">To</FormLabel>
                                        <FormInput
                                            type="text"
                                            id="Input3"
                                            autoComplete="off"
                                            name="destination_ewallet"
                                            value={transferDetails.destination_ewallet}
                                            onChange={InputEvent}
                                            placeholder=""
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

export default TransferModel;
