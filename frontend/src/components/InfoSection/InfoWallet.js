import React, { useState } from 'react';
import { Container, Button } from '../../globalStyles';
import {
    InfoSecWallet,
    InfoColumn,
    TextWrapper,
    Heading,
} from './InfoSection.elements';

import Modal from "../PopUpForms/Modals/CreateWalletModel";

function InfoWallet({
    primary,
    lightBg,
    lightText,
    headline,
    buttonLabel,

}) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };


    const openForm = () => {
        openModal()

    }

    return (
        <>
            <InfoSecWallet lightBg={lightBg}>
                <Container>
                    <InfoColumn>
                        <TextWrapper >
                            <Heading style={{ marginTop: "30px" }} lightText={lightText}>{headline}</Heading>
                            {buttonLabel ? (<>
                                <Button onClick={openForm} big style={{ marginTop: "30px" }} fontBig primary={primary}>
                                    {buttonLabel}
                                </Button>
                                <Modal showModal={showModal} setShowModal={setShowModal} />
                            </>
                            )
                                :
                                (<></>)
                            }
                        </TextWrapper>
                    </InfoColumn>

                </Container>
            </InfoSecWallet>
        </>
    );
}

export default InfoWallet;
