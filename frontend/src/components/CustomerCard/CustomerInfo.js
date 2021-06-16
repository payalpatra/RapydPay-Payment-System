import React, { useState, useContext } from 'react'
import {
    WalletsCard,
    ProductsCardInfo,
    ProductsCardPlan,
    ProductsCardFeatures,
    ProductsCardFeature,
} from "../ProductsCard/ProductCard.elements.js";
import { Button } from "../../globalStyles";
import { Link as Scroll } from "react-scroll";
import PaymentModal from "../PopUpForms/Modals/PaymentModal";
import { Context } from "../../Store";

function CustomerInfo({ name, email, customerId, ewallet_id }) {



    const [show, set] = useState(false);
    const [isClicked, setIsClicked] = useState(false)
    const [clickedTcustomer, setclickedTcustomer] = useState({
        "name": "",
        "email": "",
        "customerId": "",
        "ewallet_id": "",
    })
    const [clickedWallet, setclickedWallet] = useContext(Context)



    // For Money Transfer
    const openTheModal = () => {
        set(prev => !prev);
    }


    //// Clicked Wallet 
    const payment = () => {
        openTheModal()
        setclickedTcustomer({
            "name": name,
            "email": email,
            "customerId": customerId,
            "ewallet_id": ewallet_id,
        })

    }



    // To Show Payments and get customer id
    const showPayments = () => {
        setIsClicked(true)
        // send clickedWallet Details to Transaction Card or to List Transactions Backend
        setclickedWallet({
            "fullName": "",
            "phone_number": "",
            "email": "",
            "ewallet_id": "",
            "rapydId": "",
            "balance": "",
            "customer": {
                "name": name,
                "email": email,
                "customerId": customerId,
                "ewallet_id": ewallet_id,
            }
        })

        console.log("I am the clicked wallet ", clickedWallet);
       
    }

    const closePayments = () => {
        setIsClicked(false)
        setclickedWallet({
            "fullName": "",
            "phone_number": "",
            "email": "",
            "ewallet_id": "",
            "rapydId": "",
            "balance": "",
            "customer": {
                "name": "",
                "email": "",
                "customerId": "",
                "ewallet_id": "",
            }
        })
    }


    return (
        <WalletsCard >
            <ProductsCardInfo>
                <ProductsCardPlan>{name}</ProductsCardPlan>
                <ProductsCardFeatures style={{ marginTop: "5px", marginBottom: "20px" }}>
                    <ProductsCardFeature style={{ fontSize: "13px", color: "#ffff", marginBottom: "20px" }}> {ewallet_id}</ProductsCardFeature>
                    <ProductsCardFeature>{email}</ProductsCardFeature>
                    <ProductsCardFeature>{customerId}</ProductsCardFeature>

                </ProductsCardFeatures>

                <Button style={{ marginBottom: "12PX" }} primary onClick={payment}>
                    Send Payment</Button>
                <PaymentModal clickedTcustomer={clickedTcustomer} showModal={show} setShowModal={set}

                />
                {isClicked === true ? (<Button style={{ backgroundColor: "rgb(238, 75, 43)" }} primary onClick={closePayments}>
                    Close Payments</Button>) : (<Scroll spy={true} smooth={true} to="PaymentsComponent">
                        <Button primary onClick={showPayments}>
                            View Payments</Button>
                    </Scroll>)}


            </ProductsCardInfo>
        </WalletsCard>


    )
}

export default CustomerInfo
