import React from "react";
import { Button } from "../../globalStyles";
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.elements";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard to="/wallet">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Create Wallet</PricingCardPlan>
                <PricingCardFeatures style={{ justifyContent: "center", alignItems: "center" }} >
                  <PricingCardFeature>RapydPay makes online payments easy and fast.Create your wallet and transfer money to anybody within seconds.</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Learn More</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/wallet">
              <PricingCardInfo >
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Money Transfer</PricingCardPlan>

                <PricingCardFeatures style={{ justifyContent: "center", alignItems: "center" }} >
                  <PricingCardFeature >The RapydPay global payments network supports wallet services that includes transfer, accessing transactions.</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Learn More</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/products">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Shop and Checkout</PricingCardPlan>
                <PricingCardFeatures style={{ justifyContent: "center", alignItems: "center" }} >
                  <PricingCardFeature>Now you can shop for products and pay without using cash and get the fastest and easiest way of local payment experience.</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Learn More</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
