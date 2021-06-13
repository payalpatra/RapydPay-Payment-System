import React, { useState } from "react";
import { Button } from "../../globalStyles";
import { Link } from "react-router-dom"

import {
    ProductsCard,
    ProductsCardInfo,
    ProductsCardIcon,
    ProductsCardPlan,
    ProductsCardFeatures,
    ProductsCardFeature,
} from "./ProductCard.elements";


function ProductsInfo({ imgSrc, title, price }) {
    const [isClicked, setIsClicked] = useState(false);


    const [product, setProduct] = useState({
        "amount": price,
        "country": "US",
        "currency": "USD",
    });


    const getProduct = async () => {
        const { amount, country, currency } = product;
        console.log(product);

        const response = await fetch("checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                amount, country, currency
            })
        }).then(response => {
            response.json().then(responseJson => {
                window.localStorage.setItem('my_token', responseJson.my_token)
            })
        });

        console.log(response);


    }


    // Sending Product Details to get Rapid Token 
    const sendProduct = () => {
        // getProduct()
        setIsClicked(true);

    }





    return (
        <ProductsCard>
            <ProductsCardInfo>
                <ProductsCardIcon>
                    <img
                        src={imgSrc}
                        style={{ height: "150px", width: "200px" }}
                        alt=""
                    />
                </ProductsCardIcon>
                <ProductsCardPlan>{title}</ProductsCardPlan>
                <ProductsCardFeatures>
                    <ProductsCardFeature>Price: ${price}</ProductsCardFeature>
                </ProductsCardFeatures>
                {isClicked === false ? (<Button primary onClick={sendProduct}>
                    Buy Now</Button>) :
                    (<Link to="/cart" style={{ backgroundColor: 'green' }} >
                    <Button style={{ backgroundColor: 'green' }} >
                        View Cart
                    </Button>
                    </Link>)}
            </ProductsCardInfo>
        </ProductsCard>
    )
}

export default ProductsInfo;
