import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as Scroll } from "react-scroll";
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
    link,
    scroll

}) {


    return (
        <>
            <InfoSecWallet lightBg={lightBg}>
                <Container>
                    <InfoColumn>
                        <TextWrapper >
                            <Heading style={{ marginTop: "30px" }} lightText={lightText}>{headline}</Heading>
                            {link ? (<Link to={link}>
                                <Button big fontBig primary={primary}>
                                    {buttonLabel}
                                </Button>
                            </Link>)
                                :
                                (<Scroll spy={true} smooth={true} to={scroll}>
                                    <Button big fontBig primary={primary}>
                                        {buttonLabel}
                                    </Button>
                                </Scroll>)
                            }


                        </TextWrapper>
                    </InfoColumn>

                </Container>
            </InfoSecWallet>
        </>
    );
}

export default InfoWallet;
