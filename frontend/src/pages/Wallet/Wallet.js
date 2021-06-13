import React from 'react'
import { InfoWallet} from '../../components';
import { homeObjOne } from './Data';
import WalletCard from "../../components/WalletCard/WalletCard"
import TransactionCard from "../../components/TransactionCard/TransactionCard"

function Wallet() {
    return (
        <>
            <InfoWallet {...homeObjOne} />
            <WalletCard/>
            <TransactionCard />
        </>

    )
}

export default Wallet;
