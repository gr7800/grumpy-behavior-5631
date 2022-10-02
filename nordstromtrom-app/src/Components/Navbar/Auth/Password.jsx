import React from "react";
import { useSelector } from "react-redux";
import Styles from "./Purchase.module.css";
import Side from "./Side";
export { useSelector } from "react-redux";

const Password = () => {
  const email = JSON.parse(localStorage.getItem("email"));
  const firstName = useSelector((state) => state.Data.signInData.firstName);
  const lastName = useSelector((state) => state.Data.signInData.lastName);
  //   console.log("lastName:", lastName);
  //   console.log("firstName:", firstName);
  return (
    <div className={Styles.div__1}>
      <Side />
      <div>
        <h5>Password & Personal Info</h5>
        <hr />
        <h6>SIGN-IN INFO</h6>
        <p>Email</p>
        <p style={{ fontSize: "0.8rem" }}>{email}</p>
        <p
          style={{
            textDecoration: "underline",
            color: "#00819d",
            fontSize: "0.8rem",
            cursor: "pointer",
            marginTop: "-15px",
          }}
        >
          Change Email
        </p>
        <p>Password</p>
        <p
          style={{
            textDecoration: "underline",
            color: "#00819d",
            fontSize: "0.8rem",
            cursor: "pointer",
            marginTop: "-15px",
          }}
        >
          Change Password
        </p>
        <h6>PERSONAL INFO</h6>
        <p>Name</p>
        <p style={{ fontSize: "0.8rem" }}>
          {firstName} {lastName}
        </p>
        <p
          style={{
            textDecoration: "underline",
            color: "#00819d",
            fontSize: "0.8rem",
            cursor: "pointer",
            marginTop: "-15px",
          }}
        >
          edit
        </p>

        <h6>SECURITY</h6>
        <p>Sign out of this device</p>
        <p style={{ fontSize: "0.8rem" }}>
          Log out of your account on this device only.
        </p>
        <p
          style={{
            textDecoration: "underline",
            color: "#00819d",
            fontSize: "0.8rem",
            cursor: "pointer",
            marginTop: "-15px",
          }}
        >
          Sign Out
        </p>

        <p>Sign out everywhere</p>
        <p style={{ fontSize: "0.8rem" }}>
          Log out of all devices, including mobile apps and desktop.
        </p>
        <p
          style={{
            textDecoration: "underline",
            color: "#00819d",
            fontSize: "0.8rem",
            cursor: "pointer",
            marginTop: "-15px",
          }}
        >
          Sign out of all devices
        </p>
      </div>
    </div>
  );
};

export default Password;
