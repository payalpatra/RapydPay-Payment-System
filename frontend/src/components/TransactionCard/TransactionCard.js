import React, { useEffect, useState, useContext } from 'react'
import { Context } from "../../Store";
import { IconContext } from 'react-icons/lib';
import {
    TransactionsSection,
    WalletsWrapper,
    ProductsHeading,
    TransactionsContainer
} from '../ProductsCard/ProductCard.elements.js'
import TransactionInfo from "../TransactionCard/TransactionInfo"

function TransactionCard() {

    const [clickedWallet, setclickedWallet] = useContext(Context)

    const [Transactions, setTransactions] = useState([]);

    // listTransactions
    const fetchData = () => {
        return fetch("/listTransactions")
            .then((response) => response.json())
            .then((data) => setTransactions(data));
    }
    // fetchData()

    useEffect(() => {
        fetchData();
    }, []);



    return (
        <div id="TransactionsComponent" style={{ marginBottom: "50px" }}>
            <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
                <TransactionsSection>
                    <WalletsWrapper style={{ marginTop: "100px", flexDirection: "column" }}>
                        {clickedWallet.ewallet_id &&

                            <ProductsHeading style={{ marginBottom: "50px",color:"#101010" }}>Transactions</ProductsHeading>
                        }

                        <TransactionsContainer>
                            {

                                Transactions.map(Transaction =>
                                (

                                    <TransactionInfo
                                        key={Transaction._id}
                                        TransactionId={Transaction._id}
                                        destination_phone_number={Transaction.destination_phone_number}
                                        amount={Transaction.amount}
                                        source_ewallet_id={Transaction.source_ewallet_id}
                                        destination_ewallet_id={Transaction.destination_ewallet_id}
                                        balance={Transaction.balance}
                                        created_at={Transaction.created_at}


                                    />
                                )

                                )

                            }

                        </TransactionsContainer>


                    </WalletsWrapper>
                </TransactionsSection>
            </IconContext.Provider>

        </div>
    )
}

export default TransactionCard
