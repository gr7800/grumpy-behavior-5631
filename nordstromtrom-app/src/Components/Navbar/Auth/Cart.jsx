import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove_cart_item } from "../../../Redux/Data/Action";
import { useNavigate } from "react-router-dom";
import Styles from "./Cart.module.css";
import styles from "../../InnerPages/Checkout/Check.module.css";
const Cart = () => {
  const data = useSelector((state) => state.Data.cartData);
  const length = data.length;
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const navigate = useNavigate();

  // const valueChange = (e, item) => {
  //   const value = e.target.value;
  //   if (value === "1") {
  //     item.price.extracted *= 1;
  //     console.log(item.price.extracted);
  //   }
  //   if (value === "2") {
  //     item.price.extracted *= 2;
  //     console.log(item.price.extracted);
  //   }
  //   if (value === "3") {
  //     item.price.extracted *= 3;
  //     console.log(item.price.extracted);
  //   }
  //   if (value === "4") {
  //     item.price.extracted *= 4;
  //     console.log(item.price.extracted);
  //   }
  // };

  var total = 0;
  var shipping = 199;

  for (var i = 0; i < data.length; i++) {
    total = total + Number(data[i].price.extracted);
    // shipping = shipping+ Number(sampledata[i].shipping)
  }

  console.log(total);
  console.log(shipping);

  var final = total + shipping + 14;

  console.log(final);
  const payment = () => {
    // return <>
    //       <LoadingSpin />

    // </>

    navigate("/checkout");
  };

  return (
    <div className={Styles.div__1}>
      <div>
        <div
          style={{
            height: "50px",
            width: "350px",
            display: "grid",
            gridTemplateColumns: "170px 170px",
          }}
        >
          <div style={{ backgroundColor: "#e3e3e3", border: "1px solid grey" }}>
            <h6 style={{ marginTop: "15px", textAlign: "center" }}>
              Shopping Bag ({length})
            </h6>
          </div>
          <div style={{ border: "1px solid grey" }}>
            <p style={{ textAlign: "center", marginTop: "10px" }}>
              Save For Later (0)
            </p>
          </div>
        </div>

        <div>
          <h4 style={{ marginTop: "20px" }}>Shopping Bag</h4>
          <p style={{ marginTop: "-5px" }}>
            Items in your bag are not on hold.
          </p>
          <p style={{ marginTop: "-5px" }}>
            Add a gift message when you check out.
          </p>
          <p style={{ marginTop: "-5px" }}>
            Free Shipping on Orders over $89 for a limited time or free ship to
            U.S. stores.Learn more.{" "}
          </p>
        </div>
      </div>

      <div className={Styles.div__2}>
        {data.map((item) => {
          return (
            <div className={Styles.div__3} key={nanoid()}>
              <div style={{ height: "100px", width: "100px", margin: "30px" }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={item.thumbnail}
                  alt=""
                />
              </div>
              <div style={{ marginTop: "20px", marginLeft: "30px" }}>
                <p>{item.title}</p>
                <div style={{ display: "flex", gap: "10px" }}>
                  <div style={{ marginTop: "5px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-truck"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                  </div>
                  <div>
                    Delivery{" "}
                    <p style={{ fontSize: "0.8rem" }}>Thu, 5/12–Wed, 5/18</p>{" "}
                  </div>
                </div>

                <button
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    color: "#00819d",
                  }}
                  onClick={() => {
                    remove_cart_item(dispatch, item);
                  }}
                >
                  Remove
                </button>
                <button
                  style={{
                    marginLeft: "70px",
                    border: "none",
                    backgroundColor: "transparent",
                    color: "#00819d",
                  }}
                >
                  Save for later
                </button>
              </div>
              <div style={{ marginTop: "20px", marginLeft: "70px" }}>
                <select
                  name=""
                  id=""
                  style={{ border: "none" }}
                  onClick={(e) => {
                    // valueChange(e, item);
                    // setState(true);
                  }}
                >
                  <option value="">Qty</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div style={{ marginTop: "20px", marginLeft: "100px" }}>
                <p>Price :{item.price.raw}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.review1}>
        <div className={styles.review12}>
          <p className={styles.size}> Review order</p>

          <div className={styles.flexs}>
            <p>Your items</p>
            <p>$ {total}</p>
          </div>

          <div className={styles.flexs}>
            <p>Shipping</p>
            <p>$ {shipping}</p>
          </div>

          <div className={styles.flexs}>
            <p>Estimated tax</p>
            <p>$ 14</p>
          </div>

          <div className={styles.line}></div>

          <div className={styles.flexs}>
            <p>Estimated total</p>
            <p>$ {final}</p>
          </div>

          <button onClick={payment} className={styles.reviewButton}>
            Review Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
