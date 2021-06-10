import React, { useEffect, useState } from 'react'
import { IconContext } from 'react-icons/lib';
import {
    WalletsSection,
    WalletsWrapper,
    WalletsContainer
} from '../ProductsCard/ProductCard.elements.js';
import WalletInfo from "../WalletCard/WalletInfo"



function WalletCard() {



    const [wallets, setWallets] = useState([]);

    const fetchData = () => {
        return fetch("/allWallets")
            .then((response) => response.json())
            .then((data) => setWallets(data));
    }
    // fetchData()

    useEffect(() => {
        fetchData();
    }, []);


    

    return (
        <div id="walletsComponent" style={{ marginBottom: "50px" }}>
            <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
                <WalletsSection>
                    <WalletsWrapper>
                        <WalletsContainer>
                            {
                                wallets.map(wallet =>
                                (
                                    <WalletInfo
                                        key={wallet._id}
                                        fullName={wallet.fullName}
                                        phone_number={wallet.phone_number}
                                        email={wallet.email}
                                        rapydId={wallet.rapydId}
                                        balance={wallet.balance}
                                        ewallet_id ={wallet.ewallet_id}

                                    />
                                )

                                )


                            }


                        </WalletsContainer>


                    </WalletsWrapper>
                </WalletsSection>
            </IconContext.Provider>

        </div>
    )
}

export default WalletCard
