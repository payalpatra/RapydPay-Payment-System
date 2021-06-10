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


function WalletInfo({ fullName, phone_number, email, ewallet_id, rapydId, balance }) {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };


    
    
    
    
    
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
                    <ProductsCardFeature>{rapydId}</ProductsCardFeature>
                    <ProductsCardFeature>{email}</ProductsCardFeature>
                </ProductsCardFeatures>

                <Button style={{ marginBottom: "12PX" }} primary onClick="">
                    Send Money</Button>
                <Button primary onClick={showTransaction}>
                    View Transactions</Button>
                <Modal showModal={showModal} setShowModal={setShowModal} />
            </ProductsCardInfo>
        </WalletsCard>
    )
}

export default WalletInfo
