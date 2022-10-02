import { nanoid } from "nanoid";
import "./slider.css";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import  Carousel  from "react-elastic-carousel";
import { useDispatch, useSelector } from "react-redux";
import { description_data } from "../../../Redux/Data/Action";
import { useNavigate } from "react-router-dom";

let slideshow = [
  "https://n.nordstrommedia.com/id/841a102d-0c7b-4620-a254-12c0c426c10c.jpeg?h=720&w=1608",
  "https://n.nordstrommedia.com/id/90f377d5-877c-4a24-b2a7-0fcfa84fcc6c.jpeg?h=720&w=1608",
  "https://n.nordstrommedia.com/id/d585341b-2a08-4f31-9043-743723c8ae56.jpeg?h=720&w=1608",
];

let secondslide = [
  "https://n.nordstrommedia.com/id/920fd92e-e53f-4d5a-aa86-5547c73b55a6.jpeg?h=200&w=1608",
  "https://n.nordstrommedia.com/id/c1eb58ac-edc2-4223-9440-5175c5fb8a3d.jpeg?h=200&w=1608",
];

const Slideshow = () => {
  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
  };

  const renderSlides = () =>
    slideshow.map((num) => (
      <div className="slideshow" key={num}>
        <img src={num} alt={num}></img>
      </div>
    ));
  return (
    <div>
      <div className="slideSliderApp">
        <Slider {...settings}>{renderSlides()}</Slider>
      </div>
      .
    </div>
  );
};

const Secondslide = () => {
  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
  };

  const renderSlides = () =>
    secondslide.map((num) => (
      <div className="slideshow" key={num}>
        <img src={num} alt={num}></img>
      </div>
    ));
  return (
    <div>
      <div className="slideSliderApp">
        <Slider {...settings}>{renderSlides()}</Slider>
      </div>
      .
    </div>
  );
};

const breakPoints = [
  { width: 300, itemsToShow: 2 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 5 },
];

const NewFlash = () => {
  const Dataslider = useSelector((state) => state.Data.data);
  const filterData = Dataslider.filter((item) => {
    return item.title.includes("Trouser");
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //  console.log(filterData)
  return (
    <div className="newflashmain">
      <h2 style={{ padding: "10px" }}>Trending Now</h2>

      <div className="SliderApp">
        <Carousel breakPoints={breakPoints}>
          {filterData.map((item) => {
            return (
              <div
                onClick={() => {
                  navigate("description");
                  description_data(dispatch, item);
                }}
                className="productContainer"
                key={nanoid()}
              >
                <img src={item.thumbnail} alt={item.thumbnail}/>
                <button className="Quicklook">Quick Look</button>
                <p>{item.condition}</p>
                <p>{item.price.raw || item.price.from.raw}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

const Slippers = () => {
  const Dataslider = useSelector((state) => state.Data.data);
  const filterData = Dataslider.filter((item) => {
    return item.title.includes("bag");
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(filterData)

  return (
    <div className="slippersmain">
      <div className="newflash">
        <p>New Flash: Must-Have Sandals Up to 60% Off</p>
      </div>
      <p style={{ fontWeight: "600", fontSize: "30px", textAlign: "center" }}>
        Online only
      </p>
      <div className="SliderApp">
        <Carousel breakPoints={breakPoints}>
          {filterData.map((item) => {
            return (
              <div
                onClick={() => {
                  navigate("description");
                  description_data(dispatch, item);
                }}
                className="slippersContainer"
                key={nanoid()}
              >
                <img src={item.thumbnail} alt={item.thumbnail} />
                <button className="Quicklook">Quick Look</button>
                <p>{item.condition}</p>
                <p>{item.price.raw || item.price.from.raw}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

const Spring = () => {
  return (
    <div className="Spring">
      <p>Spring Must-Haves for All</p>
      <div className="Springcompo">
        <div className="Springimg">
          <img src="https://n.nordstrommedia.com/id/316b6242-fb9d-4e9f-a418-e3ce62a67b22.jpeg?h=555&w=804" alt="imgs"></img>
          <div>
            <h2>Lancôme</h2>
            <p>Beauty staples from the classic brand</p>
          </div>
        </div>

        <div className="Springimg">
          <img src="https://n.nordstrommedia.com/id/fa4bc7a2-24fd-4338-a408-227419f47e61.jpeg?h=555&w=804" alt="imgs"></img>
          <div>
            <h2>PGA Tour, Callaway Golf & More</h2>
            <p>Upgrade your golf gear.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ManJeans = () => {
  const Dataslider = useSelector((state) => state.Data.data);
  const filterData = Dataslider.filter((item) => {
    return item.title.includes("Men's");
  });
  // console.log(filterData)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>.</h1>
      <div className="SliderApp">
        <Carousel breakPoints={breakPoints}>
          {filterData.map((item) => {
            return (
              <div
                onClick={() => {
                  navigate("description");
                  description_data(dispatch, item);
                }}
                className="JeansContainer"
                key={nanoid()}
              >
                <img src={item.thumbnail} alt="imgs" />
                {/* <button  className="Quicklook">Quick Look</button>  */}
                <p>{item.condition}</p>
                <p>{item.price.raw || item.price.from.raw}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

const WomenJeans = () => {
  const Dataslider = useSelector((state) => state.Data.data);
  const filterData = Dataslider.filter((item) => {
    return item.title.includes("women");
  });
  // console.log(filterData)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>*</h1>
      <div className="SliderApp">
        <Carousel breakPoints={breakPoints}>
          {filterData.map((item) => {
            return (
              <div
                onClick={() => {
                  navigate("description");
                  description_data(dispatch, item);
                }}
                className="JeansContainer"
                key={nanoid()}
              >
                <img src={item.thumbnail} alt={item.thumbnail}/>
                {/* <button  className="Quicklook">Quick Look</button>  */}
                <p>{item.condition}</p>
                <p>{item.price.raw || item.price.from.raw}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

const Springaccess = () => {
  return (
    <div className="springacc">
      <p>Spring Accessories, Right This Way</p>
      <div className="springaccdiv">
        <div className="springaccimg">
          <img src="https://n.nordstrommedia.com/id/51a1cabc-fd85-47e8-8284-d93bb49e06b3.jpeg?h=501&w=536" alt="img260"></img>
          <h5>New Balance, adidas & More</h5>
          <p>New kicks under $50.</p>
        </div>
        <div className="springaccimg">
          <img src="https://n.nordstrommedia.com/id/d6d1b793-6be3-4723-b51f-50b584cfd9a5.jpeg?h=501&w=536" alt="img260"></img>
          <h5>Max Studio, Pleione, Melloday & More</h5>
          <p>Spring tops from $19.97.</p>
        </div>
        <div className="springaccimg">
          <img src="https://n.nordstrommedia.com/id/e85d2408-8f1b-4ae0-86d9-675a0ad11f3e.jpeg?h=501&w=536" alt="imglast"></img>
          <h5>Kurt Geiger London & More</h5>
          <p>Handbags up to 50% off.</p>
        </div>
      </div>
    </div>
  );
};

const BestSelling = () => {
  const Dataslider = useSelector((state) => state.Data.data);
  const filterData = Dataslider.filter((item) => {
    return item.title.includes("Shoes");
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //  console.log(filterData)
  return (
    <div>
      <h2 style={{ padding: "20px" }}>Best-Selling items</h2>

      <div className="SliderApp">
        <Carousel breakPoints={breakPoints}>
          {filterData.map((item) => {
            return (
              <div
                onClick={() => {
                  navigate("description");
                  description_data(dispatch, item);
                }}
                className="productContainer"
                key={nanoid()}
              >
                <img src={item.thumbnail} alt={item.thumbnail}/>
                <button className="Quicklook">Quick Look</button>
                <p>{item.condition}</p>
                <p>{item.price.raw || item.price.from.raw}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

const Looks = () => {
  const Dataslider = useSelector((state) => state.Data.data);
  const filterData = Dataslider.filter((item) => {
    return item.title.includes("Maxi");
  });
  //  console.log(filterData)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <h2 style={{ padding: "20px" }}>Best-Selling items</h2>

      <div className="lookSliderApp">
        <Carousel breakPoints={breakPoints}>
          {filterData.map((item) => {
            return (
              <div
                onClick={() => {
                  navigate("description");
                  description_data(dispatch, item);
                }}
                className="lookContainer"
                key={nanoid()}
              >
                <img src={item.thumbnail} alt={item.thumbnail}/>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export {NewFlash,Slippers,Spring,ManJeans,WomenJeans,Springaccess,BestSelling,Slideshow,Secondslide, Looks,
};
