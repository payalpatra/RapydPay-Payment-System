import React from 'react'
import { Button } from '../../globalStyles';

import {

    ProductsCard,
    ProductsCardInfo,
    ProductsCardIcon,
    ProductsCardPlan,
    ProductsCardFeatures,
    ProductsCardFeature
} from './ProductCard.elements';

function ProductsInfo({ imgSrc, title, price }) {
    const BuyProducts = (e) => {
        console.log(price);
    }
    return (
        <ProductsCard>
        
            <ProductsCardInfo>
                <ProductsCardIcon>
                    <img src={imgSrc} style={{ height: "150px", width: "200px" }} alt="" />
                </ProductsCardIcon>
                <ProductsCardPlan>{title}</ProductsCardPlan>
                <ProductsCardFeatures>
                    <ProductsCardFeature>Price: ${price}</ProductsCardFeature>
                </ProductsCardFeatures>
                <Button primary onClick={BuyProducts} >Buy Now</Button>
            </ProductsCardInfo>
        </ProductsCard>
    )
}

export default ProductsInfo
