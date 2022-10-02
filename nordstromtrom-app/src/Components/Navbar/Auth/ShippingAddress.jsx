import React from "react";

import Styles from "./Purchase.module.css";
import Side from "./Side";
import { cyan } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

import { Button } from "react-bootstrap";
const ShippingAddress = () => {
  const ColorButton1 = styled(Button)(() => ({
    color: cyan[600],
    width: "20%",
    height: "40px",
    borderRadius: "0px",
    backgroundColor: "none",
    border: "1px solid #00819d",

    "&:hover": {
      backgroundColor: cyan[600],
      color: "white",
    },
  }));
  return (
    <div className={Styles.div__1}>
      <Side />
      <div>
        <h5 style={{ marginBottom: "30px" }}>Shipping Addresses</h5>
        <ColorButton1 variant="outlined">Add New Address</ColorButton1>
        <p style={{ marginTop: "30px" }}>
          Checkout faster by adding one or more shipping addresses to your
          account.
        </p>
      </div>
    </div>
  );
};

export default ShippingAddress;
