import React, { useState } from "react";
import Megha from "../../Meghamenu/Megha";
import Modals from "../../Navbar/Modals";
import { Example } from "../PopupBox/Popup";
import {
  WomenJeans,
  ManJeans,
  NewFlash,
  Slippers,
  Spring,
  Springaccess,
  BestSelling,
  Slideshow,
  Secondslide,
  Looks,
} from "../Slider/Slider";

const Main = () => {
  const [men, setMen] = useState(false);
  return (
    <>
      <Megha />
      <Modals />
      <div className="maincontainer" style={{ margin: "10px" }}>
        <div className="mothercard" style={{ marginTop: "60px" }}>
          <img
            src="https://n.nordstrommedia.com/id/5a42dc96-aff4-4ace-8628-3f7923cf9a96.jpeg?h=200&w=1608"
            alt="mothercardimage"
          ></img>
        </div>
        <Slideshow></Slideshow>
        <Slippers></Slippers>
        <Spring></Spring>
        <Secondslide></Secondslide>
        <NewFlash></NewFlash>
        <div className="navjean">
          <div
            className="jean"
            onClick={() => {
              setMen(false);
            }}
          >
            Women
          </div>
          <div
            className="jean"
            onClick={() => {
              setMen(true);
            }}
          >
            Men
          </div>
        </div>
        {men ? <ManJeans></ManJeans> : <WomenJeans></WomenJeans>}

        <Springaccess></Springaccess>
        <BestSelling></BestSelling>
        <Looks></Looks>
        <Example style={{ border: "1px solid red" }}></Example>
      </div>
    </>
  );
};

export default Main;
