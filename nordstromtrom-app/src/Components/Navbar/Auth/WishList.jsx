import React from "react";
import Styles from "./Purchase.module.css";
import Side from "./Side";
import { cyan } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

import { Button } from "react-bootstrap";
const WishList = () => {
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
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <select name="" id="" style={{ padding: "10px 50px" }}>
            <option value="">Wish List (0 items)</option>
          </select>
          <p style={{ marginTop: "10px" }}>Create new List</p>
        </div>
        <hr />

        <div>
          <p>
            WishList{" "}
            <a href="www.masaischool.com" style={{ marginLeft: "10px" }}>
              Share
            </a>{" "}
          </p>
        </div>
        <br />
        <p>Your Wish List Is Empty</p>
        <p style={{ fontSize: "0.8rem" }}>
          Add items to your list by shopping the site.
        </p>
        <p style={{ fontSize: "0.8rem", marginTop: "-15px" }}>
          Then, share your list so friends and family know what you love.
        </p>
        <ColorButton1 variant="outlined">Shop Now</ColorButton1>

        <br />
        <br />
        <p>
          Other people who use this computer will be able to view your Wish List
          until you sign out.
        </p>
        <p>Thoughts on the new Wish List? Take our 1-minute survey</p>
      </div>
    </div>
  );
};

export default WishList;
