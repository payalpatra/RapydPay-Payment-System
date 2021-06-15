import React, { useEffect, useState } from 'react'
import { IconContext } from 'react-icons/lib';
import {
    WalletsSection,
    ProductsHeading,
    WalletsWrapper,
    WalletsContainer
} from '../ProductsCard/ProductCard.elements.js';
import CustomerInfo from "../CustomerCard/CustomerInfo"

function CustomerCard() {


    const [customers, setCustomers] = useState([]);

    const fetchData = () => {
        return fetch("/api/allCustomers")
            .then((response) => response.json())
            .then((data) => setCustomers(data));
    }
    // fetchData()

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div id="customersComponent" style={{ marginBottom: "50px" }}>
            <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
                <WalletsSection>
                    <WalletsWrapper style={{ marginTop: "100px", flexDirection: "column" }}>

                        {customers.length === 0 && (<ProductsHeading style={{ marginBottom: "50px", color: "#101010" }}>No Customers Found !</ProductsHeading>)}
                        {customers.length >= 1 && (<ProductsHeading style={{ marginBottom: "50px", color: "#101010" }}>Customers</ProductsHeading>)
                        }

                        <WalletsContainer>
                            {
                                customers.map(customer =>
                                (

                                    <CustomerInfo
                                        key={customer._id}
                                        name={customer.name}
                                        email={customer.email}
                                        customerId={customer.customerId}
                                        ewallet_id={customer.ewallet_id}
                                    />
                                )

                                )

                            }

                        </WalletsContainer>


                    </WalletsWrapper>
                </WalletsSection>
            </IconContext.Provider>

        </div>

    )
}

export default CustomerCard
