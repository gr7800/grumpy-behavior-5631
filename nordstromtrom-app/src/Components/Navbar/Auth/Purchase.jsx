import React from "react";
import Styles from "./Purchase.module.css";
import Side from "./Side";
import { cyan } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

import { Button } from "react-bootstrap";

const Purchase = () => {
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
        <h5>Purchase</h5>
        <p>
          0 Purchase in
          <select name="" id="" style={{ marginLeft: "10px", padding: "8px" }}>
            <option value="">Last Year</option>
            <option value="">2021</option>
            <option value="">2020</option>
            <option value="">2019</option>
          </select>
        </p>
        <p>You have no purchases in this time period. </p>
        <ColorButton1 variant="outlined">Shop Now</ColorButton1>
        <p style={{ marginTop: "10px" }}>Helpful information</p>
        <p>
          Questions? <a href="https://www.nordstrom.com/browse/about/socialmedia?origin=footer&cm_sp=corp-_-corp_socialmedia-_-globalfooternav_connectwithus"> Chat with us or call</a> 888-966-6283.
        </p>
        <p>
          Shipping internationally? <a href="https://www.linkedin.com/company/3379/?trk=tyah&trkInfo=tarId%3A1414104050635%2Ctas%3Anordstrom%20%2Cidx%3A2-1-4">Check your order status.</a>
        </p>
        <p>
          <a href="mxv vx">Shipping methods and charges</a>
        </p>
        <p>Shipping methods and charges</p>
        <p>
          How do you feel about our account page updates?{" "}
          <a href="lkvmlv"> Give us feedback. </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Purchase;
