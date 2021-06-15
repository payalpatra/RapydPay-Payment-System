import React, { useEffect, useState } from 'react'
import { IconContext } from 'react-icons/lib';
import {
    WalletsSection,
    ProductsHeading,
    WalletsWrapper,
    WalletsContainer
} from '../ProductsCard/ProductCard.elements.js';
import WalletInfo from "../WalletCard/WalletInfo"



function WalletCard() {



    const [wallets, setWallets] = useState([]);

    const fetchData = () => {
        return fetch("/api/allWallets")
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
                    <WalletsWrapper style={{ marginTop: "100px", flexDirection: "column" }}>

                        {wallets.length === 0 && (<ProductsHeading style={{ marginBottom: "50px", color: "#101010" }}>No Wallets Found !</ProductsHeading>)}
                        {wallets.length >= 1 && (<ProductsHeading style={{ marginBottom: "50px", color: "#101010" }}>Wallets</ProductsHeading>)
                        }
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
                                        ewallet_id={wallet.ewallet_id}

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
