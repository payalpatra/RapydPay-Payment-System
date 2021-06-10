import React from 'react';
import { Link } from 'react-router-dom';
import {Link as Scroll} from "react-scroll";
import { Container, Button } from '../../globalStyles';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './InfoSection.elements';

function InfoSection({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  link,
  img,
  alt,
  imgStart,
  start,
  scroll
}) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
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
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;
