import React, { useEffect, useState, useContext } from 'react'
import { Context } from "../../Store";
import { IconContext } from 'react-icons/lib';
import {
    TransactionsSection,
    WalletsWrapper,
    ProductsHeading,
    TransactionsContainer
} from '../ProductsCard/ProductCard.elements.js'
import PaymentInfo from "../PaymentCard/PaymentInfo"


function PaymentCard() {

    const [clickedWallet, setclickedWallet] = useContext(Context)


    const [Payments, setPayments] = useState([]);

    // listTransactions
    const fetchData = () => {
        return fetch("/api/listPayments")
            .then((response) => response.json())
            .then((data) => setPayments(data));
    }

    // fetchData()
    useEffect(() => {
        fetchData();
    }, []);

    /// Payments of requested Customer 
    let Payments_of_Clicked_Customer = Payments.filter(payment => payment.customerId === clickedWallet.customer.customerId)




    return Payments_of_Clicked_Customer && (
        <div id="PaymentsComponent" style={{ marginBottom: "50px" }}>
            <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
                <TransactionsSection>
                    <WalletsWrapper style={{ marginTop: "100px", flexDirection: "column" }}>
                        { clickedWallet.customer.customerId && Payments_of_Clicked_Customer.length === 0 && (<ProductsHeading style={{ marginBottom: "50px", color: "#101010" }}>No Payments Found !! </ProductsHeading>)}

                        {Payments_of_Clicked_Customer.length > 0 &&

                            <ProductsHeading style={{ marginBottom: "50px", color: "#101010" }}>Payments</ProductsHeading>
                        }


                        <TransactionsContainer>
                            {
                                Payments_of_Clicked_Customer.map(Payment =>
                                (
                                    <PaymentInfo
                                        key={Payment._id}
                                        paymentId={Payment.paymentId}
                                        customerId={Payment.customerId}
                                        amount={Payment.amount}
                                        ewallet_id={Payment.ewallet_id}
                                        created_at={Payment.created_at}
                                        Payments_of_Clicked_Customer={Payments_of_Clicked_Customer}

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

export default PaymentCard
