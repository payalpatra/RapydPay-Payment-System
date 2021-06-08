import React from 'react'
import { InfoWallet} from '../../components';
import { homeObjOne,homeObjTwo } from './Data';

function Wallet() {
    return (
        <>
            <InfoWallet {...homeObjOne} />
            <InfoWallet {...homeObjTwo} />
        </>

    )
}

export default Wallet;
