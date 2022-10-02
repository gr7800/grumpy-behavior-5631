import React from "react";
import { useSelector } from "react-redux";
import CheckPop from "./CheckPop";
import styles from "./descpage.module.css";

const Descpage = () => {
  // const Datades = useSelector((state) => state.Data.data);
  const descData = useSelector((state) => state.Data.descriptionData);
  console.log(descData);
  // const filterData = Datades.filter((item) => {
  //   return item.title.includes("Men's Jean");
  // });
  // let descData = filterData[0];
  // console.log(descData);

  return (
    <div className={styles.descpagemaindiv}>
      <div className={styles.descimagediv}>
        <img src={descData.thumbnail} alt={descData.thumbanail}></img>
      </div>

      <div className={styles.descdetaildiv}>
        <h3>{descData.title}</h3>
        {/* <p>{descData.price.from.extracted}</p> */}
        <p>{descData.shipping}</p>
        <p>{descData.condition}</p>
        {/* <p>{descData.extensions[0]}</p> */}
        <select className={styles.selectTag}>
          <option value="size">Size</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
        </select>
        <br></br>
        <select className={styles.selectTag}>
          <option>M(Medium)</option>
          <option>HIGH</option>
          <option>LARGE</option>
          <option>EXTRA LARGE</option>
        </select>
        <br></br>

        <select className={styles.selectTag}>
          <option>Navy</option>
          <option>Nude</option>
          <option>Clear</option>
          <option>Pink</option>
        </select>

        <div>
          <div>Delivery</div>

          {/* <div className={styles.Addbag}>Add to bag</div> */}
          <CheckPop data={descData} />
          <a href="temp">Add to Wish List</a>
        </div>
      </div>
    </div>
  );
};

export default Descpage;
