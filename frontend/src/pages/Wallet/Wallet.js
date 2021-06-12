import React from 'react'
import { InfoWallet} from '../../components';
import { homeObjOne,homeObjTwo,homeObjThree } from './Data';
import WalletCard from "../../components/WalletCard/WalletCard"
import TransactionCard from "../../components/TransactionCard/TransactionCard"

function Wallet() {
    return (
        <>
            <InfoWallet {...homeObjOne} />
            <InfoWallet {...homeObjTwo} />
            <WalletCard/>
            <InfoWallet {...homeObjThree} />
            <TransactionCard />
        </>

    )
}

export default Wallet;
