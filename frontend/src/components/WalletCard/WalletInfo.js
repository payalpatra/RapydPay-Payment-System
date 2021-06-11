import React, { useState } from 'react'
import {
    WalletsCard,
    ProductsCardInfo,
    ProductsCardPlan,
    ProductsCardFeatures,
    ProductsCardFeature,
} from "../ProductsCard/ProductCard.elements.js";
import { Button } from "../../globalStyles";
import Modal from "../PopUpForms/Modals/ShowTransactions";
import TransferModal from "../PopUpForms/Modals/TransferModel";


function WalletInfo({ fullName, phone_number, email, ewallet_id, rapydId, balance }) {

    const [showModal, setShowModal] = useState(false);
    const [show, set] = useState(false);
    const [clickedWallet, setclickedWallet] = useState({
        "fullName": "",
        "phone_number": "",
        "email": "",
        "ewallet_id": "",
        "rapydId": "",
        "balance": ""
    });


    // For Transaction
    const openModal = () => {
        setShowModal(prev => !prev);
    };

    // For Money Transfer
    const openTheModal = () => {
        set(prev => !prev);
    }




    //// Clicked Wallet 

    const transfer = () => {
        openTheModal()
        setclickedWallet({
            "fullName": fullName,
            "phone_number": phone_number,
            "email": email,
            "ewallet_id": ewallet_id,
            "rapydId": rapydId,
            "balance": balance
        })

    }




    // To Show Transactions Model and get the clicked ewallet_id
    const showTransaction = () => {
        openModal()
        console.log(ewallet_id)
    }





    return (
        <WalletsCard>
            <ProductsCardInfo>
                <ProductsCardPlan>{fullName}</ProductsCardPlan>
                <ProductsCardFeatures style={{ marginTop: "5px", marginBottom: "20px" }}>
                    <ProductsCardFeature style={{ fontSize: "18px", color: "#ffff", marginBottom: "20px" }}>Balance: ${balance}</ProductsCardFeature>
                    <ProductsCardFeature>{phone_number}</ProductsCardFeature>
                    <ProductsCardFeature>{ewallet_id}</ProductsCardFeature>
                    <ProductsCardFeature>{email}</ProductsCardFeature>
                </ProductsCardFeatures>

                <Button style={{ marginBottom: "12PX" }} primary onClick={transfer}>
                    Send Money</Button>
                <TransferModal clickedWallet={clickedWallet} ewallet_id={ewallet_id} rapydId={rapydId} showModal={show} setShowModal={set}

                />
                <Button primary onClick={showTransaction}>
                    View Transactions</Button>
                <Modal showModal={showModal} setShowModal={setShowModal} />
            </ProductsCardInfo>
        </WalletsCard>
    )
}

export default WalletInfo
