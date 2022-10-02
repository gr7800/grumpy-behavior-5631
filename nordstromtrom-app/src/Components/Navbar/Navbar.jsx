import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { cyan } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { mainState_true, signout } from "../../Redux/Data/Action";
import { useDispatch, useSelector } from "react-redux";
import { mainState_false } from "../../Redux/Data/Action";
// import Modals from "./Modals";
// import Megha from "../Meghamenu/Megha";

// import CreateAcc from "./CreateAcc";

const Navbar = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.Data.cartData);

  // const Name = useSelector((state) => state.Data.signInData.firstName);

  const name = JSON.parse(localStorage.getItem("name"));

  const state = useSelector((state) => state.Data.signInData.signInState);
  // console.log("state:", state);
  const [search, setSearch] = useState();
  const handleSearch = (e) => {
    console.log("e:", e);
    setSearch(e.target.value);
    if (e.code === "Enter") {
      navigate(`products/${search}`);
    }
  };

  if (name === null) {
    mainState_false(dispatch);
  } else {
    mainState_true(dispatch);
  }

  const ColorButton = styled(Button)(() => ({
    color: "white",
    width: "90%",
    marginLeft: "15px",
    marginTop: "15px",
    marginBottom: "15px",
    borderRadius: "0px",
    backgroundColor: cyan[600],
    "&:hover": {
      backgroundColor: "none",
      color: cyan[600],
    },
  }));

  return (
    <>
      <div>
        <div className={styles.darkcyan_1}>
          <p>
            Free shipping over $89, or shop online and pick up select orders at
            a Nordstrom Rack or Nordstrom store.{" "}
            <u
              onClick={() => {
                navigate("https://www.nordstromrack.com/ship-return-policy");
              }}
            >
              Learn More
            </u>
          </p>
        </div>

        <div className={styles.div__2}>
          <div onClick={() => navigate("/")}>
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://n.nordstrommedia.com/alias/nordstrom-rack-logo.svg"
              alt=""
            />
          </div>

          <div className={styles.relative_position}>
            <span style={{ position: "absolute" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
                style={{ marginTop: "10px", marginLeft: "10px" }}
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="search for product or brand"
              onKeyUp={(e) => handleSearch(e)}
            />
          </div>

          <div className={styles.div__3}>
            <div>
              <div id="drop">
                <div className={styles.dropdown}>
                  <p
                    className={styles.dropbtn}
                    onClick={() => {
                      navigate("/signin");
                      // setSignIn(false);
                    }}
                  >
                    {state ? `Hi, ${name}` : `Sign In`}
                  </p>
                  <div className={styles.dropdown_content}>
                    <div className={styles.dropdown_flex}>
                      {state ? (
                        ""
                      ) : (
                        <div
                          onClick={() => {
                            navigate("/signin");
                          }}
                        >
                          <ColorButton variant="outlined">
                            Sign In | Create Account
                          </ColorButton>
                        </div>
                      )}

                      <div>
                        {state ? (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginTop: "10px",
                            }}
                          >
                            <h4
                              style={{
                                margin: "0px",
                                marginLeft: "15px",
                                fontSize: "1.2rem",
                              }}
                            >
                              {name} Account
                            </h4>
                            <p
                              style={{
                                margin: "0px",
                                marginRight: "15px",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                signout(dispatch);
                                // setSignIn(true);
                                navigate("/");
                              }}
                            >
                              Sign Out
                            </p>
                          </div>
                        ) : (
                          <div style={{ marginLeft: "15px" }}>
                            <h4 className={styles.your_acc}>Your Account</h4>
                          </div>
                        )}

                        <div
                          style={{
                            display: "flex",
                            cursor: "pointer",
                            marginTop: "10px",
                          }}
                          onClick={() => navigate("purchase")}
                        >
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              fill="currentColor"
                              className="bi bi-lock"
                              viewBox="0 0 16 16"
                              style={{
                                marginLeft: "15px",
                                marginRight: "10px",
                              }}
                            >
                              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                            </svg>
                          </span>
                          <p>Purchases</p>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            marginTop: "-10px",
                            cursor: "pointer",
                          }}
                          onClick={() => navigate("wishlist")}
                        >
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              fill="currentColor"
                              className="bi bi-heart"
                              viewBox="0 0 16 16"
                              style={{
                                marginLeft: "15px",
                                marginRight: "10px",
                              }}
                            >
                              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                          </span>
                          <p>Wish List</p>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            marginTop: "-10px",
                            cursor: "pointer",
                          }}
                        >
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              fill="currentColor"
                              className="bi bi-wrench-adjustable-circle"
                              viewBox="0 0 16 16"
                              style={{
                                marginLeft: "15px",
                                marginRight: "10px",
                              }}
                            >
                              <path d="M12.496 8a4.491 4.491 0 0 1-1.703 3.526L9.497 8.5l2.959-1.11c.027.2.04.403.04.61Z" />
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-1 0a7 7 0 1 0-13.202 3.249l1.988-1.657a4.5 4.5 0 0 1 7.537-4.623L7.497 6.5l1 2.5 1.333 3.11c-.56.251-1.18.39-1.833.39a4.49 4.49 0 0 1-1.592-.29L4.747 14.2A7 7 0 0 0 15 8Zm-8.295.139a.25.25 0 0 0-.288-.376l-1.5.5.159.474.808-.27-.595.894a.25.25 0 0 0 .287.376l.808-.27-.595.894a.25.25 0 0 0 .287.376l1.5-.5-.159-.474-.808.27.596-.894a.25.25 0 0 0-.288-.376l-.808.27.596-.894Z" />
                            </svg>
                          </span>
                          <p>The Nordy Club Rewards</p>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            marginTop: "-10px",
                            cursor: "pointer",
                          }}
                          onClick={() => navigate("shippingaddress")}
                        >
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              fill="currentColor"
                              className="bi bi-truck"
                              viewBox="0 0 16 16"
                              style={{
                                marginLeft: "15px",
                                marginRight: "10px",
                              }}
                            >
                              <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </span>
                          <p>Shipping Addresses</p>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            marginTop: "-10px",
                            cursor: "pointer",
                          }}
                          onClick={() => navigate("paymentmethods")}
                        >
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              fill="currentColor"
                              className="bi bi-credit-card"
                              viewBox="0 0 16 16"
                              style={{
                                marginLeft: "15px",
                                marginRight: "10px",
                              }}
                            >
                              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                              <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                            </svg>
                          </span>
                          <p>Payment Methods</p>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            marginTop: "-10px",
                            cursor: "pointer",
                          }}
                        >
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              fill="currentColor"
                              className="bi bi-box-arrow-up-right"
                              viewBox="0 0 16 16"
                              style={{
                                marginLeft: "15px",
                                marginRight: "10px",
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
                          <p>Pay & Manage Nordstrom Card</p>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            marginTop: "-10px",
                            cursor: "pointer",
                          }}
                        >
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              fill="currentColor"
                              className="bi bi-shop"
                              viewBox="0 0 16 16"
                              style={{
                                marginLeft: "15px",
                                marginRight: "10px",
                              }}
                            >
                              <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
                            </svg>
                          </span>
                          <p>Store Locator</p>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            marginTop: "-10px",
                            cursor: "pointer",
                          }}
                        >
                          <p style={{ marginLeft: "15px", fontWeight: "500" }}>
                            Account Settings
                          </p>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            marginTop: "-10px",
                            cursor: "pointer",
                          }}
                          onClick={() => navigate("password")}
                        >
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              fill="currentColor"
                              className="bi bi-key"
                              viewBox="0 0 16 16"
                              style={{
                                marginLeft: "15px",
                                marginRight: "10px",
                              }}
                            >
                              <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                              <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                          </span>
                          <p>Password & Personal Info</p>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            marginTop: "-10px",
                            cursor: "pointer",
                          }}
                        >
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              fill="currentColor"
                              className="bi bi-envelope"
                              viewBox="0 0 16 16"
                              style={{
                                marginLeft: "15px",
                                marginRight: "10px",
                              }}
                            >
                              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                            </svg>
                          </span>
                          <p>Email & Mail Preferences</p>
                        </div>

                        <h4 style={{ margin: "0px", marginLeft: "15px" }}>
                          Need Help ?
                        </h4>

                        <div
                          style={{
                            display: "flex",
                            marginTop: "-0px",
                            cursor: "pointer",
                          }}
                        >
                          <p style={{ marginLeft: "15px" }}>Contact Us</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div onClick={() => navigate("cart")}>
              <p
                style={{
                  position: "absolute",
                  fontSize: "0.8rem",
                  right: "37px",
                  top: "68px",
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                {cartData.length}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-lock"
                viewBox="0 0 16 16"
                style={{ position: "relative" }}
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <hr style={{ marginBottom: "0px" }} />
      {/* <Modals /> */}
    </>
  );
};

export default Navbar;
