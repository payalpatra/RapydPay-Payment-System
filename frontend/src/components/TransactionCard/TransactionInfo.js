import React, { useContext } from 'react'
import {
    TransactionsCard,
    ProductsCardInfo,
    ProductsCardPlan,
    ProductsCardFeatures,
    ProductsCardFeature,
} from "../ProductsCard/ProductCard.elements.js";
import { Context } from "../../Store";

function TransactionInfo({ amount, source_ewallet_id, destination_ewallet_id, TransactionId, created_at }) {

    const [clickedWallet, setclickedWallet] = useContext(Context)

    // let requestedWalletId = "ewallet_16ed8aef3d84d50ca86a2cc7fd576dba"
    let requestedWalletId = clickedWallet.ewallet_id;

    return requestedWalletId && (
        <TransactionsCard>

            <ProductsCardInfo>
                <ProductsCardPlan>Transaction Id : {TransactionId}</ProductsCardPlan>
                <ProductsCardFeatures style={{ marginTop: "5px", marginBottom: "20px" }}>
                    {requestedWalletId === source_ewallet_id ?
                        <ProductsCardFeature style={{ fontSize: "17px", color: "#EE4B2B" }}>Paid To: {destination_ewallet_id.slice(8)}</ProductsCardFeature> :
                        <ProductsCardFeature style={{ fontSize: "17px", color: "#228B22" }}>Recieved From: {destination_ewallet_id.slice(8)}</ProductsCardFeature>
                    }
                    <ProductsCardFeature style={{ fontSize: "18px", color: "#ffff", marginBottom: "20px" }}>Amount: ${amount}</ProductsCardFeature>
                    <ProductsCardFeature> Date : {created_at} </ProductsCardFeature>
                </ProductsCardFeatures>
            </ProductsCardInfo>
        </TransactionsCard>
    )
}

export default TransactionInfo
