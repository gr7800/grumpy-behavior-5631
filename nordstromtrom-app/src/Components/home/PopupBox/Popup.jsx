import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

import { Button } from "react-bootstrap";

export function Example() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Button
        style={{
          marginLeft: "93%",
          position: "fixed",
          zIndex: "100",
          width: "45px",
          height: "40px",
          background: "white",
          bottom: "2%",
          right: "2%",
        }}
        variant="primary"
        onClick={() => setShow(true)}
      >
        <img
          style={{
            width: "100%",
            objectFit: "cover",
            height: "100%",
            backgroundColor: "teal",
          }}
          src="data:image/png;base64,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"
          alt="imgre"
        ></img>
      </Button>

      <Modal
        style={{
          marginLeft: "71.5%",
          marginTop: "25px",
          width: "376px",
          height: "555px",
        }}
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            How can We help you?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "500px", width: "376px" }}>
          <div style={{ texalign: "left" }} className="popup__1">
            <div>
              <input
                style={{
                  marginBottom: "20px",
                  width: "316px",
                  height: "64px",
                  border: "2px solid whitesmoke",
                }}
                placeholder="Serch for answers"
              ></input>
            </div>
            <div>
              <button
                style={{
                  texalign: "left",
                  marginBottom: "20px",
                  width: "300px",
                  height: "64px",
                  backgroundColor: "white",
                  border: "2px solid whitesmoke",
                }}
              >
                Cancel an Order
              </button>
            </div>
            <div>
              <button
                style={{
                  texalign: "left",
                  marginBottom: "20px",
                  width: "300px",
                  height: "64px",
                  backgroundColor: "white",
                  border: "2px solid whitesmoke",
                }}
              >
                Order Status
              </button>
            </div>
            <div>
              <button
                style={{
                  texalign: "left",
                  marginBottom: "20px",
                  width: "300px",
                  height: "64px",
                  backgroundColor: "white",
                  border: "2px solid whitesmoke",
                }}
              >
                Return an Item
              </button>
            </div>
            <div>
              <button
                style={{
                  texalign: "left",
                  marginBottom: "20px",
                  width: "300px",
                  height: "64px",
                  backgroundColor: "white",
                  border: "2px solid whitesmoke",
                }}
              >
                Return Refund Status
              </button>
            </div>
            {/* <div  style={{width:"370px",height:"80px",bottom:"64px",backgroundColor:"teal",backgroundColor:"whitesmoke"}} >Chat is currently unavailable.</div>
             */}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
