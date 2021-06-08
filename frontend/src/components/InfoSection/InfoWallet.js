import React from 'react';
import { Container, Button } from '../../globalStyles';
import {
    InfoSecWallet,
    InfoColumn,
    TextWrapper,

    Heading,
} from './InfoSection.elements';

function InfoWallet({
    primary,
    lightBg,
    lightText,
    headline,
    buttonLabel,

}) {
    return (
        <>
            <InfoSecWallet lightBg={lightBg}>
                <Container>
                    <InfoColumn>
                        <TextWrapper >
                            <Heading style={{ marginTop: "30px" }} lightText={lightText}>{headline}</Heading>
                            {buttonLabel ? (
                                <Button big style={{ marginTop: "30px" }} fontBig primary={primary}>
                                    {buttonLabel}
                                </Button>
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
