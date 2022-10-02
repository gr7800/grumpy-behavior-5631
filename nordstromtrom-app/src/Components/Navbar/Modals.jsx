import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

import { Button } from "react-bootstrap";
import Styles from "./CreateAcc.module.css";
import { cyan } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { login } from "../../Redux/Data/Action";

const Modals = () => {
  const [show, setShow] = useState(false);
  const [pass, setPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const state = useSelector((state) => state.Data.signInData.signInState);
  // const firstName = useSelector((state) => state.Data.signInData.firstName);
  // const Email = useSelector((state) => state.Data.signInData.email);
  // const passWord = useSelector((state) => state.Data.signInData.password);

  const handleSubmit = (dispatch, email, password) => {
    const PassWord = JSON.parse(localStorage.getItem("password"));
    const Email = JSON.parse(localStorage.getItem("email"));

    if (email === Email && password === PassWord) {
      navigate("/");

      const myName = localStorage.getItem("myName");
      localStorage.setItem("name", myName);
    } else {
      alert("Invalid Email or Password");
    }

    login(dispatch);
  };

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

  const ColorButton1 = styled(Button)(() => ({
    color: cyan[600],
    width: "35%",
    height: "40px",
    borderRadius: "0px",
    backgroundColor: "none",
    border: "1px solid #00819d",

    marginTop: "20px",
    marginLeft: "70px",
    "&:hover": {
      backgroundColor: cyan[600],
      color: "white",
    },
  }));

  return (
    <>
      {state ? (
        ""
      ) : (
        <div
          style={{
            marginTop: "80px",
            marginLeft: "430px",
            display: "grid",
            gridTemplateRows: "30px 80px",
          }}
        >
          <h3>More to Rack, easier and faster.</h3>
          <ColorButton1 variant="outlined" onClick={() => setShow(true)}>
            Sign In or Create An Account
          </ColorButton1>
        </div>
      )}

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(dispatch, email, password);
              setShow(false);
            }}
          >
            <p style={{ fontSize: "1.5rem" }}>Sign In</p>
            <p style={{ fontSize: "0.8rem" }}>
              New to Nordstrom Rack? <a href="/signin"> Create an account.</a>
            </p>

            <div className={Styles.div__2} style={{ marginTop: "10px" }}>
              <label
                htmlFor=""
                style={{ fontWeight: "400", fontSize: "0.8rem" }}
              >
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

            <div
              className={Styles.div__2}
              style={{ marginTop: "10px", position: "relative" }}
            >
              <label
                htmlFor=""
                style={{ fontWeight: "400", fontSize: "0.8rem" }}
              >
                Password
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

            <div>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#00819d",
                  textDecoration: "underline",
                  margin: "0px",
                  marginTop: "10px",
                  cursor: "pointer",
                }}
              >
                Forgot Password ?
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "20px 300px",
                marginTop: "10px",
                marginBottom: "15px",
              }}
            >
              <input
                type="checkbox"
                style={{ cursor: "pointer", marginTop: "5px",height:"13px",width:"13px" }}
              />
              <p
                style={{ fontSize: "0.8rem", margin: "0px", cursor: "pointer" }}
              >
                Keep me signed up. <a href="gt">Details</a>
              </p>
            </div>

            <p style={{ fontSize: "0.8rem" }}>
              By tapping Next, you agree to our <a href="https://www.nordstrom.com/browse/customer-service/policy/privacy">Privacy Policy</a>
              and
              <a href="https://www.nordstrom.com/browse/customer-service/policy/terms-conditions"> Terms & Conditions.</a>
            </p>

            <div className={Styles.div__3}>
              <ColorButton variant="outlined">
                <input
                  className={Styles.button}
                  style={{ padding: "0px 100px" }}
                  type="submit"
                />
              </ColorButton>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Modals;
