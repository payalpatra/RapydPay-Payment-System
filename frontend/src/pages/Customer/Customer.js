import React from 'react'
import { InfoWallet} from '../../components';
import { homeObjOne } from './Data';
import CustomerCard from "../../components/CustomerCard/CustomerCard"
import PaymentCard from "../../components/PaymentCard/PaymentCard"


function Customer() {
    return (
        <>
        <InfoWallet {...homeObjOne} />
        <CustomerCard/>
        <PaymentCard />
    </>
    )
}

export default Customer
