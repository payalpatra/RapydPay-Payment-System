import React from 'react';
import { IconContext } from 'react-icons/lib';
import {
    ProductsSection,
    ProductsWrapper,
    ProductsHeading,
    ProductsContainer
} from './ProductCard.elements';
import { ProductData } from "../../pages/Products/Data"
import ProductsInfo from "./ProductsInfo"

function ProductCard() {

    return (
        <div id="productsComponent">
            <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
                <ProductsSection>
                    <ProductsWrapper>
                        <ProductsHeading>Products</ProductsHeading>
                        <ProductsContainer>
                            {ProductData.map((val, index) => {
                                return (
                                    <ProductsInfo
                                        key={index}
                                        imgSrc={val.imgSrc}
                                        title={val.title}
                                        price={val.price}

                                    />
                                )

                            })}
                        </ProductsContainer>


                    </ProductsWrapper>
                </ProductsSection>
            </IconContext.Provider>

        </div>
    )
}

export default ProductCard
    // <ProductsCard>
    // <ProductsCardInfo>
    //     <ProductsCardIcon>
    //         <img src={imgSrc} style={{ height: "150px", width: "200px" }} alt="" />
    //     </ProductsCardIcon>
    //     <ProductsCardPlan>{title}</ProductsCardPlan>
    //     <ProductsCardFeatures>
    //         <ProductsCardFeature>Price: $ {price}</ProductsCardFeature>
    //     </ProductsCardFeatures>
    //     <Button primary>Buy Now</Button>
    // </ProductsCardInfo>

    //                         </ProductsCard>