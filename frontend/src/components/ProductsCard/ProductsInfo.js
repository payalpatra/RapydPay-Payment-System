import React from "react";
import { Button } from "../../globalStyles";


import {
    ProductsCard,
    ProductsCardInfo,
    ProductsCardIcon,
    ProductsCardPlan,
    ProductsCardFeatures,
    ProductsCardFeature,
} from "./ProductCard.elements";


function ProductsInfo({ imgSrc, title, price, url }) {
   
    return (
        <ProductsCard>
            <ProductsCardInfo>
                <ProductsCardIcon>
                    <img
                        src={imgSrc}
                        style={{ height: "150px", width: "200px" }}
                        alt={title}
                    />
                </ProductsCardIcon>
                <ProductsCardPlan>{title}</ProductsCardPlan>
                <ProductsCardFeatures>
                    <ProductsCardFeature>Price: ${price}</ProductsCardFeature>
                </ProductsCardFeatures>
                <a href={url}  target="_blank" rel="noreferrer noopener">
                    <Button>Buy Now </Button>

                </a>
            </ProductsCardInfo>
        </ProductsCard>
    )
}

export default ProductsInfo;
