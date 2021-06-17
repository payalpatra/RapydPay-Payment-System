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
import TransferModal from "../PopUpForms/Modals/TransferModel";
import { Context } from "../../Store";

function WalletInfo({ fullName, phone_number, email, ewallet_id, rapydId, balance }) {

    const [show, set] = useState(false);
    const [isClicked, setIsClicked] = useState(false)
    const [clickedTWallet, setclickedTWallet] = useState({
        "fullName": "",
        "phone_number": "",
        "email": "",
        "ewallet_id": "",
        "rapydId": "",
        "balance": ""
    })
    const [clickedWallet, setclickedWallet] = useContext(Context)



    // For Money Transfer
    const openTheModal = () => {
        set(prev => !prev);
    }


    //// Clicked Wallet 
    const transfer = () => {
        openTheModal()
        setclickedTWallet({
            "fullName": fullName,
            "phone_number": phone_number,
            "email": email,
            "ewallet_id": ewallet_id,
            "rapydId": rapydId,
            "balance": balance
        })

    }



    // To Show Transactions and get the clicked ewallet_id
    const showTransaction = () => {
        setIsClicked(true)
        // send clickedWallet Details to Transaction Card or to List Transactions Backend
        setclickedWallet({
            "fullName": fullName,
            "phone_number": phone_number,
            "email": email,
            "ewallet_id": ewallet_id,
            "rapydId": rapydId,
            "balance": balance
        })
        console.log("I am the clicked wallet ", clickedWallet);

    }

    const closeTransaction = () => {
        setIsClicked(false)
        setclickedWallet({
            "fullName": "",
            "phone_number": "",
            "email": "",
            "ewallet_id": "",
            "rapydId": "",
            "balance": ""
        })
    }


    return (

        <WalletsCard >
            <ProductsCardInfo>
                <ProductsCardPlan>{fullName}</ProductsCardPlan>
                <ProductsCardFeatures style={{ marginTop: "5px", marginBottom: "20px" }}>
                    <ProductsCardFeature style={{ fontSize: "18px", color: "#ffff", marginBottom: "20px" }}>Balance: ${balance}</ProductsCardFeature>
                    <ProductsCardFeature>{phone_number}</ProductsCardFeature>
                    <ProductsCardFeature>{email}</ProductsCardFeature>
                    <ProductsCardFeature style = {{fontSize: "14px"}}>{ewallet_id}</ProductsCardFeature>
                </ProductsCardFeatures>

                <Button style={{ marginBottom: "12px" }} primary onClick={transfer}>
                    Send Money</Button>
                <TransferModal clickedTWallet={clickedTWallet} ewallet_id={ewallet_id} rapydId={rapydId} showModal={show} setShowModal={set}

                />
                {isClicked === true ? (<Button style={{ backgroundColor: "rgb(238, 75, 43)" }} primary onClick={closeTransaction}>
                    Close Transactions</Button>) : (<Scroll spy={true} smooth={true} to="TransactionsComponent">
                        <Button primary onClick={showTransaction}>
                            View Transactions</Button>
                    </Scroll>)}


            </ProductsCardInfo>
        </WalletsCard>




    )
}

export default WalletInfo
