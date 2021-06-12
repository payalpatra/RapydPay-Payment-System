import React, { useEffect, useState } from 'react'
import { IconContext } from 'react-icons/lib';
import {
    WalletsSection,
    WalletsWrapper,
    TransactionsContainer
} from '../ProductsCard/ProductCard.elements.js'
import TransactionInfo from "../TransactionCard/TransactionInfo"

function TransactionCard() {
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


    let sortedTransactions = Transactions.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    console.log(sortedTransactions)
    return (
        <div id="TransactionsComponent" style={{ marginBottom: "50px" }}>
            <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
                <WalletsSection>
                    <WalletsWrapper>
                        <TransactionsContainer>
                            {

                                sortedTransactions.map(Transaction =>
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
                </WalletsSection>
            </IconContext.Provider>

        </div>
    )
}

export default TransactionCard
