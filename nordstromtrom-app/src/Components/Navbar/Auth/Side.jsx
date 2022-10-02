import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Styles from "./Side.module.css";
const Side = () => {
  const name = useSelector((state) => state.Data.signInData.firstName);
  const navigate = useNavigate();
  return (
    <div className={Styles.div__1}>
      <div
        style={{
          display: "flex",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            height: "30px",
            width: "30px",
            borderRadius: "50%",
            backgroundColor: "#00819d",
            margin: "18px",
          }}
        ></div>
        <div style={{ marginTop: "20px" }}>
          <p>{name} Account </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          cursor: "pointer",
        }}
        onClick={() => navigate("/purchase")}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-lock"
            viewBox="0 0 16 16"
            style={{
              marginLeft: "15px",
              marginRight: "10px",
              marginTop: "15px",
            }}
          >
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
          </svg>
        </span>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ marginTop: "10px" }}>Purchases</p>
          <p style={{ fontSize: "0.6rem", margin: "0px", marginTop: "-15px" }}>
            Track Packages ,Start return & More
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          cursor: "pointer",
        }}
        onClick={() => navigate("/wishlist")}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-heart"
            viewBox="0 0 16 16"
            style={{
              marginLeft: "15px",
              marginRight: "10px",
              marginTop: "15px",
            }}
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
        </span>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ marginTop: "10px" }}>Wish List</p>
          <p style={{ fontSize: "0.6rem", margin: "0px", marginTop: "-15px" }}>
            Create , Manage & share List
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          cursor: "pointer",
        }}
        
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-wrench-adjustable-circle"
            viewBox="0 0 16 16"
            style={{
              marginLeft: "15px",
              marginRight: "10px",
              marginTop: "15px",
            }}
          >
            <path d="M12.496 8a4.491 4.491 0 0 1-1.703 3.526L9.497 8.5l2.959-1.11c.027.2.04.403.04.61Z" />
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-1 0a7 7 0 1 0-13.202 3.249l1.988-1.657a4.5 4.5 0 0 1 7.537-4.623L7.497 6.5l1 2.5 1.333 3.11c-.56.251-1.18.39-1.833.39a4.49 4.49 0 0 1-1.592-.29L4.747 14.2A7 7 0 0 0 15 8Zm-8.295.139a.25.25 0 0 0-.288-.376l-1.5.5.159.474.808-.27-.595.894a.25.25 0 0 0 .287.376l.808-.27-.595.894a.25.25 0 0 0 .287.376l1.5-.5-.159-.474-.808.27.596-.894a.25.25 0 0 0-.288-.376l-.808.27.596-.894Z" />
          </svg>
        </span>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ marginTop: "10px" }}>The Nordy Club Reward</p>
          <p style={{ fontSize: "0.6rem", margin: "0px", marginTop: "-15px" }}>
            Learn more or join now
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          cursor: "pointer",
        }}
        onClick={() => navigate("/shippingaddress")}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-truck"
            viewBox="0 0 16 16"
            style={{
              marginLeft: "15px",
              marginRight: "10px",
              marginTop: "15px",
            }}
          >
            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
          </svg>
        </span>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ marginTop: "10px" }}>Shipping Addresse</p>
          <p style={{ fontSize: "0.6rem", margin: "0px", marginTop: "-15px" }}>
            Add An address
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          cursor: "pointer",
        }}
        onClick={() => navigate("/paymentmethods")}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-credit-card"
            viewBox="0 0 16 16"
            style={{
              marginLeft: "15px",
              marginRight: "10px",
              marginTop: "15px",
            }}
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
            <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
          </svg>
        </span>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ marginTop: "10px" }}>Payment Method</p>
          <p style={{ fontSize: "0.6rem", margin: "0px", marginTop: "-15px" }}>
            Add A Payment Method
          </p>
        </div>
      </div>
      <div style={{ height: "20px", marginLeft: "15px" }}>
        <p>Account Settings</p>
      </div>
      <div
        style={{
          display: "flex",
          cursor: "pointer",
        }}
        onClick={() => navigate("/password")}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-key"
            viewBox="0 0 16 16"
            style={{
              marginLeft: "15px",
              marginRight: "10px",
              marginTop: "15px",
            }}
          >
            <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
            <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>
        </span>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ marginTop: "10px" }}>Password & Personal </p>
          <p style={{ fontSize: "0.6rem", margin: "0px", marginTop: "-15px" }}>
            Password ,email ,mobile & more
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          cursor: "pointer",
        }}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-envelope"
            viewBox="0 0 16 16"
            style={{
              marginLeft: "15px",
              marginRight: "10px",
              marginTop: "15px",
            }}
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
          </svg>
        </span>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ marginTop: "10px" }}>Email & Mail Preference</p>
          <p style={{ fontSize: "0.6rem", margin: "0px", marginTop: "-15px" }}>
            Hear about Sales ,events or more
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          cursor: "pointer",
        }}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-box-arrow-up-right"
            viewBox="0 0 16 16"
            style={{
              marginLeft: "15px",
              marginRight: "10px",
              marginTop: "15px",
            }}
          >
            <path
              fillRule="evenodd"
              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
            />
            <path
              fillRule="evenodd"
              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
            />
          </svg>
        </span>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ marginTop: "10px" }}>Pay & Manage</p>
        </div>
      </div>
    </div>
  );
};

export default Side;
