import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import styles from "./descpage.module.css";
import { Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { Slippers } from "../Slider/Slider";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { add_to_bag } from "../../../Redux/Data/Action";

export function CheckPop({ data }) {
  // console.log('data1:', data)
  // console.log("pop",data)
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // send Data to cart page>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  const sendData = (payload) => {
    add_to_bag(dispatch, payload);
  };
  
  const sendToCart = () => {
    navigate("/checkout");
  };
  // send Data to cart page ends >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  return (
    <div>
      <Button style={{backgroundColor:"rgb(77, 133, 156)",boder:"1px solid rgb(77, 133, 156)"}}
        className={styles.Addbag}
        variant="primary"
        onClick={() => {
          setShow(true);
          sendData(data);
        }}
      >
        Add to Cart
      </Button>

      <Modal
        style={{ marginLeft: "300px", width: "700px", height: "651px" }}
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title"></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "500px", width: "500px" }}>
          <div>
            <h4 style={{ paddingTop: "10px", textAlign: "center" }}>
              Added to your bag
            </h4>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: "172px", height: "130px" }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={data.thumbnail}
                  alt={data.thumbnail}
                ></img>
              </div>
              <div style={{ width: "270px", height: "130px" }}>
                <p>{data.title}</p>
                <p>{data.price.raw}</p>
                <div className={styles.checkoutpop} onClick={sendToCart}>
                  Checkout
                </div>
              </div>
            </div>
            <Checkoutcarousel></Checkoutcarousel>
            {/* <Slippers></Slippers> */}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

const breakPoints = [{ width: 500, itemsToShow: 4 }];

const Checkoutcarousel = () => {
  const Dataslider = useSelector((state) => state.Data.data);
  const filterData = Dataslider.filter((item) => {
    return item.title.includes("Maxi");
  });
  //  console.log(filterData)
  return (
    <div>
      <h4 style={{ paddingTop: "80px" }}>Frequenty bought together</h4>

      <div className="lookSliderApp">
        <Carousel breakPoints={breakPoints}>
          {filterData.map((item) => {
            return (
              <div className="Checkoutcarousel" key={nanoid()}>
                <img src={item.thumbnail} alt={item.thumbnail}/>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default CheckPop;
