import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';


import {

  ProductsCardPlan,
  ProductsCardFeatures,
  ProductsCardFeature,
} from "../../ProductsCard/ProductCard.elements.js";


const Background = styled.div`
  width: 100%;
  height: 100%;
  /* background: rgba(0, 0, 0, 0.8); */
  position: fixed;
  top: 0px;
    left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;

   @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

const ModalWrapper = styled.div`
  width: 500px;
  height: auto;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #101522;
  color: #000;
  display: grid;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  border-radius: 10px;

  @media screen and (max-width: 964px) {
    width: 200px;
  height: 200px;
  }
`;



const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;


function ShowTransactions({ showModal, setShowModal }) {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>

              {/* TRANSACTION CONTENT START  */}
              <ProductsCardPlan></ProductsCardPlan>
              <ProductsCardFeatures style={{ marginTop: "5px", marginBottom: "20px" }}>
                <ProductsCardFeature style={{ fontSize: "18px", color: "#ffff", marginBottom: "20px" }}>Paid To : 8249956286</ProductsCardFeature>
                <ProductsCardFeature>Amount : $200</ProductsCardFeature>
                <ProductsCardFeature>Date : 8:90AM 21MAY 20120</ProductsCardFeature>
                <ProductsCardFeature>Transaction Id: 800bfaa6-ca01-11eb-b38b-02240218ee6d</ProductsCardFeature>
              </ProductsCardFeatures>
              {/* TRANSACTION CONTENT END  */}



              {/* TRANSACTION CONTENT START  */}
              <ProductsCardPlan></ProductsCardPlan>
              <ProductsCardFeatures style={{ marginTop: "5px", marginBottom: "20px" }}>
                <ProductsCardFeature style={{ fontSize: "18px", color: "#ffff", marginBottom: "20px" }}>Paid To : 8249956286</ProductsCardFeature>
                <ProductsCardFeature>Amount : $200</ProductsCardFeature>
                <ProductsCardFeature>Date : 8:90AM 21MAY 20120</ProductsCardFeature>
                <ProductsCardFeature>Transaction Id: 800bfaa6-ca01-11eb-b38b-02240218ee6d</ProductsCardFeature>
              </ProductsCardFeatures>
              {/* TRANSACTION CONTENT END  */}


              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  )
}

export default ShowTransactions
