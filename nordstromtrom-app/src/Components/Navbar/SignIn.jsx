import React, { useState } from "react";
import Styles from "./SignIn.module.css";
import { cyan } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { signInFn } from "../../Redux/Data/Action";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const ColorButton = styled(Button)(() => ({
    color: "white",
    width: "100%",
    borderRadius: "0px",
    height: "40px",
    backgroundColor: cyan[600],
    "&:hover": {
      backgroundColor: "none",
      color: cyan[600],
    },
  }));

  return (
    <div className={Styles.div__1}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signInFn(dispatch, email);
          navigate("/createacc");
        }}
      >
        <p>Sign In | Create Account</p>
        <p>Enter your email to get started.</p>
        <div className={Styles.div__2}>
          <label htmlFor="" style={{ fontWeight: "500" }}>
            Email
          </label>
          <input
            className={Styles.input__1}
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <p>
          By tapping Next, you agree to our <a href="https://www.nordstrom.com/browse/customer-service/policy/privacy">Privacy Policy</a> and
          <a href="https://www.nordstrom.com/browse/customer-service/policy/terms-conditions"> Terms & Conditions.</a>
        </p>
        <div className={Styles.div__3}>
          <ColorButton variant="outlined">
            <input className={Styles.button} type="submit" />
          </ColorButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
