import React from "react";
import { Button } from "../../globalStyles";
import { Link } from "react-router-dom";

function CheckoutPage() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <p style={{marginRight:"200px"}}>Product Image</p>
        </div>
        <div>
          <p>Product Title</p>
          <Button>Pay $200 </Button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
