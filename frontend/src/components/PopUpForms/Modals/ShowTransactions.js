import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';



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
  background: #fff;
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

              <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", width: "100%", height: "auto" }}>
                <div style={{ display: 'flex' }}>
                  <div style={{marginRight: "50px"}} >PAID TO 8249956286 </div>
                  <div>200 </div>
                </div>
                <div>
                  12 may 2021
              </div>
              </div>


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
