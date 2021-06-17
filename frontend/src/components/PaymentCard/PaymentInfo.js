import React, { useContext } from 'react'
import {
    TransactionsCard,
    ProductsCardInfo,
    ProductsCardPlan,
    ProductsCardFeatures,
    ProductsCardFeature,
} from "../ProductsCard/ProductCard.elements.js";
import { Context } from "../../Store";

function PaymentInfo({ paymentId, amount, ewallet_id, created_at }) {

    const [clickedWallet, setclickedWallet] = useContext(Context)



    return (
        <TransactionsCard>

            <ProductsCardInfo>
                <ProductsCardPlan  style={{ fontSize: "20px" }}>Payment Id : {paymentId.slice(8)}</ProductsCardPlan>
                <ProductsCardFeatures style={{ marginTop: "5px", marginBottom: "20px" }}>
                    {clickedWallet.customer.ewallet_id === ewallet_id ?
                        <ProductsCardFeature style={{ fontSize: "16px", color: "#228B22" }}>Paid To: {ewallet_id}</ProductsCardFeature> :
                        <ProductsCardFeature style={{ fontSize: "16px", color: "#EE4B2B" }}>Paid To: {ewallet_id}</ProductsCardFeature>
                    }
                    <ProductsCardFeature style={{ fontSize: "18px", color: "#ffff", marginBottom: "20px" }}>Amount: ${amount}</ProductsCardFeature>
                    <ProductsCardFeature> Date : {created_at} </ProductsCardFeature>
                </ProductsCardFeatures>
            </ProductsCardInfo>
        </TransactionsCard>
    )
}

export default PaymentInfo
