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
                <PricingCardFeatures>
                  <PricingCardFeature>Some Content</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Learn More</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/wallet">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Wallet Transfer</PricingCardPlan>

                <PricingCardFeatures>
                  <PricingCardFeature>Some Content</PricingCardFeature>
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
                <PricingCardFeatures>
                  <PricingCardFeature>Some Content</PricingCardFeature>
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
