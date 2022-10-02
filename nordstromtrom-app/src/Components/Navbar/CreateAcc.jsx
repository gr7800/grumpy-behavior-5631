import React, { useEffect, useState } from "react";
import Styles from "./CreateAcc.module.css";
import { cyan } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { detailsFn } from "../../Redux/Data/Action";

const CreateAcc = () => {
  const email = useSelector((state) => state.Data.signInData.email);
  //console.log("email:", email);
  const navigate = useNavigate();

  const [pass, setPass] = useState(false);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/home";

  const state = useSelector((state) => state.Data.signInData.signInState);

  useEffect(() => {
    if (state) {
      navigate(from, { replace: true });
    }
  }, [state]);

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
          detailsFn(dispatch, first, last, password);
          navigate("/");
          localStorage.setItem("myName", JSON.stringify(first));
          // setSignIn(true);
        }}
      >
        <p>Create Account</p>

        <div style={{ display: "flex", cursor: "pointer", marginTop: "-10px" }}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="currentColor"
              className="bi bi-credit-card"
              viewBox="0 0 16 16"
              style={{
                marginTop: "-8px",
                marginRight: "10px",
              }}
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
              <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
            </svg>
          </span>
          <p style={{ fontSize: "0.8rem" }}>Check out Faster</p>
        </div>

        <div style={{ display: "flex", cursor: "pointer", marginTop: "-10px" }}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="currentColor"
              className="bi bi-truck"
              viewBox="0 0 16 16"
              style={{
                marginTop: "-8px",

                marginRight: "10px",
              }}
            >
              <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </svg>
          </span>
          <p style={{ fontSize: "0.8rem" }}>Track Order easily</p>
        </div>

        <div style={{ display: "flex", cursor: "pointer", marginTop: "-10px" }}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="currentColor"
              className="bi bi-wrench-adjustable-circle"
              viewBox="0 0 16 16"
              style={{
                marginTop: "-8px",

                marginRight: "10px",
              }}
            >
              <path d="M12.496 8a4.491 4.491 0 0 1-1.703 3.526L9.497 8.5l2.959-1.11c.027.2.04.403.04.61Z" />
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-1 0a7 7 0 1 0-13.202 3.249l1.988-1.657a4.5 4.5 0 0 1 7.537-4.623L7.497 6.5l1 2.5 1.333 3.11c-.56.251-1.18.39-1.833.39a4.49 4.49 0 0 1-1.592-.29L4.747 14.2A7 7 0 0 0 15 8Zm-8.295.139a.25.25 0 0 0-.288-.376l-1.5.5.159.474.808-.27-.595.894a.25.25 0 0 0 .287.376l.808-.27-.595.894a.25.25 0 0 0 .287.376l1.5-.5-.159-.474-.808.27.596-.894a.25.25 0 0 0-.288-.376l-.808.27.596-.894Z" />
            </svg>
          </span>
          <p style={{ fontSize: "0.8rem" }}>
            Use one sign-in across our brands
          </p>
        </div>

        <div>
          <p style={{ fontSize: "0.8rem" }}>*Required</p>
        </div>

        <div className={Styles.div__2}>
          <label htmlFor="" style={{ fontWeight: "500" }}>
            Email
          </label>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ margin: "0px" }}>{email}</p>
            <p
              style={{
                margin: "0px",
                fontSize: "1rem",
                color: "#00819d",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/signin");
              }}
            >
              edit
            </p>
          </div>

          <div className={Styles.div__2}>
            <label htmlFor="" style={{ fontWeight: "400", fontSize: "0.8rem" }}>
              First Name*
            </label>
            <input
              className={Styles.input__1}
              type="text"
              onChange={(e) => {
                setFirst(e.target.value);
              }}
              required
            />
          </div>

          <div className={Styles.div__2} style={{ marginTop: "10px" }}>
            <label htmlFor="" style={{ fontWeight: "400", fontSize: "0.8rem" }}>
              Last Name*
            </label>
            <input
              className={Styles.input__1}
              type="text"
              onChange={(e) => {
                // setEmail(e.target.value);
                setLast(e.target.value);
              }}
              required
            />
          </div>

          <div
            className={Styles.div__2}
            style={{ marginTop: "10px", position: "relative" }}
          >
            <label htmlFor="" style={{ fontWeight: "400", fontSize: "0.8rem" }}>
              Password*
            </label>
            <input
              className={Styles.input__1}
              type={pass ? "text" : "password"}
              onChange={(e) => {
                // setEmail(e.target.value);
                setPassword(e.target.value);
              }}
              required
            />
            <p
              style={{
                position: "absolute",
                fontSize: "0.8rem",
                margin: "0px",
                marginTop: "40px",
                right: "10px",
                cursor: "pointer",
                color: "#00819d",
                textDecoration: "underline",
              }}
              onClick={() => {
                setPass((prev) => !prev);
              }}
            >
              {pass ? "Hide" : "Show"}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "20px 300px",
              marginTop: "20px",
            }}
          >
            <input
              type="checkbox"
              style={{
                cursor: "pointer",
                marginTop: "4px",
                height: "13px",
                width: "13px",
              }}
            />
            <p style={{ fontSize: "0.8rem", margin: "0px", cursor: "pointer" }}>
              Keep me signed up. Details
            </p>
          </div>

          <p style={{ fontSize: "0.8rem", marginTop: "10px" }}>
            By tapping Next, you agree to our <a href="https://www.nordstrom.com/browse/customer-service/policy/privacy">Privacy Policy</a> and
            <a href="https://www.nordstrom.com/browse/customer-service/policy/terms-conditions"> Terms & Conditions.</a>
          </p>

          <div className={Styles.div__3}>
            <ColorButton variant="outlined">
              <input className={Styles.button} type="submit" />
            </ColorButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateAcc;
