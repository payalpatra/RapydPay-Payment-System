import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProductsSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #4b59f7;
`;

export const WalletsSection = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
`;


export const TransactionsSection = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
`;



export const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;


export const WalletsWrapper = styled.div`
  display: flex;
  flex-direction: start;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ProductsHeading = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const ProductsContainer = styled.div`
max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const WalletsContainer = styled.div`
max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;


export const TransactionsContainer = styled.div`
max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;



export const ProductsCard = styled.div`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 280px;
  height: 500px;
  text-decoration: none;
  margin-right: 18px;
  margin-bottom: 20px;
  border-radius: 4px;

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;
    margin-right: 0px;
    &:hover {
      transform: none;
    }
  }
`;



export const WalletsCard = styled.div`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 480px;
  height: 330px;
  text-decoration: none;
  margin-right: 18px;
  margin-bottom: 20px;
  border-radius: 4px;

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;
    margin-right: 0px;
    &:hover {
      transform: none;
    }
  }
`;


export const TransactionsCard = styled(Link)`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  /* width: 700px; */
  height:190px;
  text-decoration: none;
  margin-right: 18px;
  margin-bottom: 20px;
  border-radius: 4px;

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;
    margin-right: 0px;
    &:hover {
      transform: none;
    }
  }
`;

export const ProductsCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const ProductsCardIcon = styled.div`
  margin: 24px 0;
`;

export const ProductsCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const ProductsCardCost = styled.h4`
  font-size: 40px;
`;

export const ProductsCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

export const ProductsCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const ProductsCardFeature = styled.li`
  margin-bottom: 10px;
`;
