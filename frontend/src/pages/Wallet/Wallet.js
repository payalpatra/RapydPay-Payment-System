import React from 'react'
import { InfoWallet} from '../../components';
import { homeObjOne,homeObjTwo } from './Data';
import WalletCard from "../../components/WalletCard/WalletCard"

function Wallet() {
    return (
        <>
            <InfoWallet {...homeObjOne} />
            <InfoWallet {...homeObjTwo} />
            <WalletCard/>
        </>

    )
}

export default Wallet;
