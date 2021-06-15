import React, { useState } from "react";

const initialState = {
    "fullName": "",
    "phone_number": "",
    "email": "",
    "ewallet_id": "",
    "rapydId": "",
    "balance": "",
    "customerId":""
};

export const Context = React.createContext();


const Store = ({ children }) => {
    const [clickedWallet, setclickedWallet] = useState(initialState);


    return (
        <Context.Provider value={[clickedWallet, setclickedWallet]}>
            {children}
        </Context.Provider>

    )
}

export default Store;