import React, { useState, useContext } from 'react'
import {
    WalletsCard,
    ProductsCardInfo,
    ProductsCardPlan,
    ProductsCardFeatures,
    ProductsCardFeature,
} from "../ProductsCard/ProductCard.elements.js";
import { Button } from "../../globalStyles";
import { Link } from "react-router-dom"
import { Link as Scroll } from "react-scroll";
import { Context } from "../../Store";

function CustomerInfo({ name, email, customerId, ewallet_id }) {

    const [isClicked, setIsClicked] = useState(false)
    const [clickedWallet, setclickedWallet] = useContext(Context)


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

                <Link to="/payment" style={{ marginBottom: "12px" }} primary >
                    <Button primary >
                        Send Payment</Button></Link>

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
