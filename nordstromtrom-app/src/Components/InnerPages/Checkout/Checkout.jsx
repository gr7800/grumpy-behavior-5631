import React from "react";
import styles from "./Check.module.css";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { form_data } from "../../../Redux/Data/Action";
// import LoadingSpin from "react-loading-spin";

const Checkout = () => {
  const [formdata, setFormdata] = React.useState();
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.Data.cartData);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const input = e.target.name;

    setFormdata({ ...formdata, [input]: e.target.value });
  };

  var total = 0;
  var shipping = 199;

  for (var i = 0; i < cartData.length; i++) {
    total = total + Number(cartData[i].price.extracted);
    // shipping = shipping+ Number(sampledata[i].shipping)
  }

  console.log(total);
  console.log(shipping);

  var final = total + shipping + 14;

  console.log(final);

  const handleClick = (e) => {
    e.preventDefault();
    form_data(dispatch, formdata);
  };

  const payment = () => {
    // return <>
    //       <LoadingSpin />

    // </>
    if (formdata) {
      navigate("/payment");
    } else {
      alert("Please Fill the Details");
    }
  };

  return (
    <>
      <div className={styles.majordiv}>
        <div className={styles.left}>
          <div className={styles.checkdiv}>
            <p style={{ fontSize: "30px" }}>Checkout</p>
            <p className={styles.blue}>Edit Shopping Bag</p>
            <p className={styles.size}>Delivery</p>
            <p className={styles.blue}>Change shipping speed</p>

            {cartData.map((e) => {
              return (
                <>
                  {/* <p>{e.name}</p> */}
                  {/* <p>Free</p> */}
                  <img className={styles.image} src={e.thumbnail} alt={e.thumbnail}/>
                  <p>{e.price.raw}</p>
                </>
              );
            })}
          </div>

          <div className={styles.shipping}>
            <p className={styles.size}>Shipping address</p>

            {/* onClick={()=>{handleclick(e)}} */}

            <form onSubmit={handleClick}>
              <p className={styles.bold}>First name</p>
              <input
                className={styles.input}
                type="text"
                name="fname"
                onChange={handleChange}
                required
              />

              <p className={styles.bold}>Last name</p>
              <input
                className={styles.input}
                type="text"
                name="lname"
                onChange={handleChange}
                required
              />

              <p className={styles.blue}>
                Free shipping to a Nordstrom or Nordstrom Rack
              </p>

              <p className={styles.bold}>Address</p>
              <input
                className={styles.input}
                type="text"
                name="address"
                placeholder="Quickly find your addres"
                onChange={handleChange}
                required
              />

              <input className={styles.submit} type="submit" />
            </form>
          </div>

          <div className={styles.gift}>
            <div className={styles.flex}>
              <img
                className={styles.imgicon}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxWSEKR47w5nNtw3kqeFe90qKxORYzh7kADg&usqp=CAU"
                alt="temp"
              />
              <p className={styles.size}>Gift options</p>
            </div>

            <p>
              Write gift message at Checkout and we'll email it to the recipient
              when their {"\n"} item is delivered.
            </p>
            <p className={styles.blue}>Add gift message</p>
          </div>

          <div className={styles.contact}>
            <p className={styles.size}>Contact info</p>
            <form>
              <p>Email(for order updates)</p>
              <input className={styles.input} type="text" required />

              <p>Phone number(for order questions)</p>
              <input className={styles.input} type="number" required />
              <input className={styles.submit} type="submit" />
            </form>
          </div>

          <div className={styles.nordstrom}>
            <div className={styles.flex}>
              <img
                className={styles.imgicons}
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQvokL0vGAJqMRD0UKGsasbBxSek9OOWSgxUw1kyqtnyzOfEf3e"
                alt="second img"
              />

              <div>
                <p className={styles.bold}>Nordstrom Card</p>
                <p>
                  Get $40 Bonus Note when you use a new {"\n"} Nordstrom credit
                  card.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.payment}>
            <p className={styles.size}>Payment</p>

            <div>
              <div>
                <input type="radio" />
                <img
                  className={styles.credit}
                  src="data:image/jpeg;base64,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"
                  alt="radioimg"
                />
                <lable> Credit Card</lable>
              </div>

              <form>
                <p className={styles.bold}>Card number</p>
                <input className={styles.input} type="number" />

                <p className={styles.bold}>Expiry Date</p>
                <input className={styles.inputcart} type="date" />

                <p className={styles.bold}>CVV</p>
                <input className={styles.inputcart} type="password" />

                <input className={styles.submit} type="submit" />
              </form>
            </div>

            <div>
              <input type="radio" />
              <label>
                <img
                  className={styles.imgIcon}
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAxcHgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAxMDEgMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHhtbG5zPSJodHRwOiYjeDJGOyYjeDJGO3d3dy53My5vcmcmI3gyRjsyMDAwJiN4MkY7c3ZnIj48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDEyLjIzNyAyLjggTCA0LjQzNyAyLjggQyAzLjkzNyAyLjggMy40MzcgMy4yIDMuMzM3IDMuNyBMIDAuMjM3IDIzLjcgQyAwLjEzNyAyNC4xIDAuNDM3IDI0LjQgMC44MzcgMjQuNCBMIDQuNTM3IDI0LjQgQyA1LjAzNyAyNC40IDUuNTM3IDI0IDUuNjM3IDIzLjUgTCA2LjQzNyAxOC4xIEMgNi41MzcgMTcuNiA2LjkzNyAxNy4yIDcuNTM3IDE3LjIgTCAxMC4wMzcgMTcuMiBDIDE1LjEzNyAxNy4yIDE4LjEzNyAxNC43IDE4LjkzNyA5LjggQyAxOS4yMzcgNy43IDE4LjkzNyA2IDE3LjkzNyA0LjggQyAxNi44MzcgMy41IDE0LjgzNyAyLjggMTIuMjM3IDIuOCBaIE0gMTMuMTM3IDEwLjEgQyAxMi43MzcgMTIuOSAxMC41MzcgMTIuOSA4LjUzNyAxMi45IEwgNy4zMzcgMTIuOSBMIDguMTM3IDcuNyBDIDguMTM3IDcuNCA4LjQzNyA3LjIgOC43MzcgNy4yIEwgOS4yMzcgNy4yIEMgMTAuNjM3IDcuMiAxMS45MzcgNy4yIDEyLjYzNyA4IEMgMTMuMTM3IDguNCAxMy4zMzcgOS4xIDEzLjEzNyAxMC4xIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDM1LjQzNyAxMCBMIDMxLjczNyAxMCBDIDMxLjQzNyAxMCAzMS4xMzcgMTAuMiAzMS4xMzcgMTAuNSBMIDMwLjkzNyAxMS41IEwgMzAuNjM3IDExLjEgQyAyOS44MzcgOS45IDI4LjAzNyA5LjUgMjYuMjM3IDkuNSBDIDIyLjEzNyA5LjUgMTguNjM3IDEyLjYgMTcuOTM3IDE3IEMgMTcuNTM3IDE5LjIgMTguMDM3IDIxLjMgMTkuMzM3IDIyLjcgQyAyMC40MzcgMjQgMjIuMTM3IDI0LjYgMjQuMDM3IDI0LjYgQyAyNy4zMzcgMjQuNiAyOS4yMzcgMjIuNSAyOS4yMzcgMjIuNSBMIDI5LjAzNyAyMy41IEMgMjguOTM3IDIzLjkgMjkuMjM3IDI0LjMgMjkuNjM3IDI0LjMgTCAzMy4wMzcgMjQuMyBDIDMzLjUzNyAyNC4zIDM0LjAzNyAyMy45IDM0LjEzNyAyMy40IEwgMzYuMTM3IDEwLjYgQyAzNi4yMzcgMTAuNCAzNS44MzcgMTAgMzUuNDM3IDEwIFogTSAzMC4zMzcgMTcuMiBDIDI5LjkzNyAxOS4zIDI4LjMzNyAyMC44IDI2LjEzNyAyMC44IEMgMjUuMDM3IDIwLjggMjQuMjM3IDIwLjUgMjMuNjM3IDE5LjggQyAyMy4wMzcgMTkuMSAyMi44MzcgMTguMiAyMy4wMzcgMTcuMiBDIDIzLjMzNyAxNS4xIDI1LjEzNyAxMy42IDI3LjIzNyAxMy42IEMgMjguMzM3IDEzLjYgMjkuMTM3IDE0IDI5LjczNyAxNC42IEMgMzAuMjM3IDE1LjMgMzAuNDM3IDE2LjIgMzAuMzM3IDE3LjIgWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMDMwODciIGQ9Ik0gNTUuMzM3IDEwIEwgNTEuNjM3IDEwIEMgNTEuMjM3IDEwIDUwLjkzNyAxMC4yIDUwLjczNyAxMC41IEwgNDUuNTM3IDE4LjEgTCA0My4zMzcgMTAuOCBDIDQzLjIzNyAxMC4zIDQyLjczNyAxMCA0Mi4zMzcgMTAgTCAzOC42MzcgMTAgQyAzOC4yMzcgMTAgMzcuODM3IDEwLjQgMzguMDM3IDEwLjkgTCA0Mi4xMzcgMjMgTCAzOC4yMzcgMjguNCBDIDM3LjkzNyAyOC44IDM4LjIzNyAyOS40IDM4LjczNyAyOS40IEwgNDIuNDM3IDI5LjQgQyA0Mi44MzcgMjkuNCA0My4xMzcgMjkuMiA0My4zMzcgMjguOSBMIDU1LjgzNyAxMC45IEMgNTYuMTM3IDEwLjYgNTUuODM3IDEwIDU1LjMzNyAxMCBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny43MzcgMi44IEwgNTkuOTM3IDIuOCBDIDU5LjQzNyAyLjggNTguOTM3IDMuMiA1OC44MzcgMy43IEwgNTUuNzM3IDIzLjYgQyA1NS42MzcgMjQgNTUuOTM3IDI0LjMgNTYuMzM3IDI0LjMgTCA2MC4zMzcgMjQuMyBDIDYwLjczNyAyNC4zIDYxLjAzNyAyNCA2MS4wMzcgMjMuNyBMIDYxLjkzNyAxOCBDIDYyLjAzNyAxNy41IDYyLjQzNyAxNy4xIDYzLjAzNyAxNy4xIEwgNjUuNTM3IDE3LjEgQyA3MC42MzcgMTcuMSA3My42MzcgMTQuNiA3NC40MzcgOS43IEMgNzQuNzM3IDcuNiA3NC40MzcgNS45IDczLjQzNyA0LjcgQyA3Mi4yMzcgMy41IDcwLjMzNyAyLjggNjcuNzM3IDIuOCBaIE0gNjguNjM3IDEwLjEgQyA2OC4yMzcgMTIuOSA2Ni4wMzcgMTIuOSA2NC4wMzcgMTIuOSBMIDYyLjgzNyAxMi45IEwgNjMuNjM3IDcuNyBDIDYzLjYzNyA3LjQgNjMuOTM3IDcuMiA2NC4yMzcgNy4yIEwgNjQuNzM3IDcuMiBDIDY2LjEzNyA3LjIgNjcuNDM3IDcuMiA2OC4xMzcgOCBDIDY4LjYzNyA4LjQgNjguNzM3IDkuMSA2OC42MzcgMTAuMSBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC45MzcgMTAgTCA4Ny4yMzcgMTAgQyA4Ni45MzcgMTAgODYuNjM3IDEwLjIgODYuNjM3IDEwLjUgTCA4Ni40MzcgMTEuNSBMIDg2LjEzNyAxMS4xIEMgODUuMzM3IDkuOSA4My41MzcgOS41IDgxLjczNyA5LjUgQyA3Ny42MzcgOS41IDc0LjEzNyAxMi42IDczLjQzNyAxNyBDIDczLjAzNyAxOS4yIDczLjUzNyAyMS4zIDc0LjgzNyAyMi43IEMgNzUuOTM3IDI0IDc3LjYzNyAyNC42IDc5LjUzNyAyNC42IEMgODIuODM3IDI0LjYgODQuNzM3IDIyLjUgODQuNzM3IDIyLjUgTCA4NC41MzcgMjMuNSBDIDg0LjQzNyAyMy45IDg0LjczNyAyNC4zIDg1LjEzNyAyNC4zIEwgODguNTM3IDI0LjMgQyA4OS4wMzcgMjQuMyA4OS41MzcgMjMuOSA4OS42MzcgMjMuNCBMIDkxLjYzNyAxMC42IEMgOTEuNjM3IDEwLjQgOTEuMzM3IDEwIDkwLjkzNyAxMCBaIE0gODUuNzM3IDE3LjIgQyA4NS4zMzcgMTkuMyA4My43MzcgMjAuOCA4MS41MzcgMjAuOCBDIDgwLjQzNyAyMC44IDc5LjYzNyAyMC41IDc5LjAzNyAxOS44IEMgNzguNDM3IDE5LjEgNzguMjM3IDE4LjIgNzguNDM3IDE3LjIgQyA3OC43MzcgMTUuMSA4MC41MzcgMTMuNiA4Mi42MzcgMTMuNiBDIDgzLjczNyAxMy42IDg0LjUzNyAxNCA4NS4xMzcgMTQuNiBDIDg1LjczNyAxNS4zIDg1LjkzNyAxNi4yIDg1LjczNyAxNy4yIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDA5Y2RlIiBkPSJNIDk1LjMzNyAzLjMgTCA5Mi4xMzcgMjMuNiBDIDkyLjAzNyAyNCA5Mi4zMzcgMjQuMyA5Mi43MzcgMjQuMyBMIDk1LjkzNyAyNC4zIEMgOTYuNDM3IDI0LjMgOTYuOTM3IDIzLjkgOTcuMDM3IDIzLjQgTCAxMDAuMjM3IDMuNSBDIDEwMC4zMzcgMy4xIDEwMC4wMzcgMi44IDk5LjYzNyAyLjggTCA5Ni4wMzcgMi44IEMgOTUuNjM3IDIuOCA5NS40MzcgMyA5NS4zMzcgMy4zIFoiPjwvcGF0aD48L3N2Zz4"
                 alt="g*"
               />
              </label>
            </div>

            <div>
              <input type="radio" />
              <label>
                <img
                  className={styles.imgIcon}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK9zIL-Ul27PTTkQS1CQQf1imirwPAIkGKjEwxXrWr_aQf7ZeisOBRydNxQR9hgWw6jrw&usqp=CAU"
                  alt="radioimg5"
                />
              </label>
            </div>

            <p className={styles.blue}>Gift Cartt or Promo Card</p>
            <p className={styles.blue}>Add Nordstrom Note</p>
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

        <div className={styles.rigth}>
          <div className={styles.review2}>
            <p className={styles.size}>Review order</p>
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
            <p className={styles.blue}>
              Need help? Call 1.888.966.6283 or chat with us
            </p>
          </div>

          <div className={styles.review2}>
            <div className={styles.flex}>
              <img
                className={styles.imgsmall}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAilBMVEX39/cBAAIAAAD////7+/v19fXr6+vy8vLz8/Pm5ubPz8+Ojo7Hx8fj4+NoaGh8fHxycnI8Ozy4uLiFhYV2dnZiYWLV1dU0NDVCQkOoqKhISEmDg4Pb29u0tLTKysq+vr6enp9XVlclJSZQUFGVlZYtLS0YFxkVFBWlpKWbm5xbW1sdHR0NDQ5kZGU4EsRTAAAJZElEQVR4nO1d62KyMAzFNuIm3p1OnX5O0V31/V/vA21L8LIhpKWdnF/TaRoPSZqmNHhehQoVKlSoUKFChQoVKpgBAHCQ4NGfJDI5kgkkMjUh0q/ujxeb3iicPG+fJ6tON5g2fS/6Afllcu75zWnQ7awOMsNRb7MY+3UacokB3Gu+rtbsHNtV0PLy6Bxx6rWC1faCzPXqtekVoFYDgPvTkdSvhiHf7Cweb1QZ+OOi86PM0dS3hYbIA5adc03PtJ4t6plVjmQuZhlkdpbZZWoE94O3H5VNVP4OshlDZALBd0aZb4HPtf/Gn8H9YQZlE5U7819ZAD7v3CRzWCoL3O+eaHshfp2o3P1F46PM0995XSbLIFMfAKY7rI6M2aOXIPj8eN0EL/t+7VTn6MWrd90UwHs9/Xj8ur9/CTavH59B8DJan/HA2G5azlzJ5xOkyEGt/nA5biQJTZwYtKPZLa1yxFLr2mXjrfWpzGhmnXspmY3xctg/lTmZmzcFgAApESvUG/hwngbEWjcGe5b+8PDiZQMYnsjcLxoXcs04WfQHvROZgWlTAD9MKRBGyl7XASIaOimNJ+3zD0N7kpLZGTSuB9CIh8YiTMkMfaMk8FZNjR6bQJZo335i+DuDU9vlg9T/n9pZZpAe/k7tqo9pAP/E2nZ/1zZGNOsPscZBWmEeYJnDrJlEu4tlfhojIaXuVzYGjl/0e+ibXaww76L/9LLPdRELX9eJ1QZQP4Sx9+VNkQh46z35ckd9F6CTvL1b3pT/AiyRzJ6ZmLBKRnz6Yaq/DPC6yddXl2R2c8h8uiRTHzi6Yos8lsf/JQLC48+FMHnrXy6ZC2Rd2t2Bv4jRGNu2840G7bWS0YtF8J56vb4wZ2ZSq/2sZLxoJoFv1FBhPa/rQf1LSYmCmAqxkSEXkLlSUjZaSVA2F5nczW6bAKCr5CyQzG6BVA+8DpKZW8zv48wTdYsNg679p/prWFBmQuxc3+xQ38pBnooyzYdKYSIKIplyemDbekFR18dQseurOM+RwjWM4rRGdjpKxVoNAOW4/QKxQIGHqVJISKA1eBMVEvR4Q0NS8N4gGeBhjQoA6wcKkdB4lyQ0KOSdIgo5QnyLhmMYo0R/TCRTJmBFg/Zl6UJjwumXT1U8nJLJ3Eg1iVjFgL7Qd0ZHMF8xumAgZYYyaJFzAEvJb85s9qLQx4NQWpltqeiSmgTeZyq5JZS6ONRGSfM6mX6xPnFEgJYQvKbNPvi//fMo11LxOuprPYYAoSYDA15ka/6ySOm2IalgOeWwddmbe1nApSH8oyRBJLba0i9ayISWIv1GEEK3lDI1YisuGaFIGIg57MMFV4jM9kPoO6AzW5HLMPbogiuovKPGVmTXDHwhcuQGBdFFG4mLRrb9JiYbUtPSC6Ux2VQuaj6kIUY3hMaFa1MSYrlE6F3aISMY1cJJrUI+XXGFSOdP2hVe5FzaVuS6oKodRAGBb5gooZGIM4OHt6PSRAUf3mPUhQ79EKUUqnSZz3Rk35ohVzhEVS+oiUTZnXAQKX2sVbIajdI+db5hAipL8kmkzYU0h6YFpDXJ1qOYZpxZMB2hyrUkV07UkIisyhikB5PUkkQ51VUOSDbFZJq4cylF8rzGjjBRlBG25hgHNcLZjHaWMQZaX3AyJgJtTGw6OTe2SedGN3OkMWWOJO4/caiaGIM4isHOxTXTB+maqVo7VzWUGBDIDQsScWbw8C5qaUQ1VblgaLoTEKhrqp7caiPi1ARgQ3z3FEzc22MJafdY5F1OLgWEOvlem8w3pq44g7phgq4GelyHRs7gDAdf1HvvKkOgvJdSJ9QOKWEEU7OjqSOUBSHO4RJvBwheXaklyZvzKGWq+/adWDeJPSbi+/flYS725gQHopxKnNjyjhD7an9EUGZAe6+uLKiRzjaaAI1voSrReRsFWUTQckaGFPKYI+VhkyMSQ7B89ZgoSm0GKiLU2JpaMi1AnkMlNwN8RsZqb5DnZ/WUwdUZGba0lwR5gFxbSruWJ/E0HqkuhuRQ+remAeSZTLazdIKE+jfxOdQzJA0gJnoGKAiozyQF+mIWqDH2FhoCePIUOZtpHOUxaYNhXVwE1VlGbzIrE5BDcyN9w+QCJA1RSM+znQE3RLGMhJHSTPepK9TIxCp3gKTVjt62ODGSpiM2BUZIdRvSDt6xzx1gT9dZJtuASVurvR3uwJNYYGoxg3p7WeEOYJ6CFAkWuAMkzmnyNhHkDqWf+0SxwOydMmh2KJkERIHpwoYtJJTkCEcgEgg6h+VFqRSk2tSVRkLJFJxYQikslE5B+ZaAZiddffJ+ByJhZd4SePlWcFADWYLpsa2wghgpdzDb8t0WClK9hkOTJCAKyr+PWpFQYyuK9prZAE/WWEEMZAlfpkjgdlFQhjtYFAskVJ9gQ+5gmSMcgSzBQJ6A5iJDTxrIBNQxeqabBOtigQRyh/y96LONZKcVxECWEOqMCYgCC8p4J0CbLzN9JFhsBTEQCdoswXIKTLgDdgSrwmEC3e5gvRXE0EsCykLsC4cJdJKAKbDUEY7AJNDmCY5YQQxdluAQBfhhbpSWgOYcK7Z5fwF6hBMZCYgC+60gBiJhQkOCcxQgEiJ3eKB4eo17FFBbgmOxQAKR0C9KgqMU4KedskmxJxmhydYtCugsAVFQ+h0vNwNZQj9/YHTWEY6gcAenrSAG/yzqDoiCEu91KQT+qizhOY87pChwlANMQv92d8DPONWhnSFgEm61BFyfdNYKYognoxzc4TZLSFmByxTkdwe0BNe6X2EEyBJuIMHMboUxIBK2WUnAsUDv1p0h3B4T8OL7D1hBjFtJwBnmH6EAPbS0xta/Hz38kxTcRgKaSYhKcZYAkbD9mQT0ycLlF8uAftrbT42a8VT6xyhIkfB9nQT0qYL1JyuRhQR1lDjnStN6IBJ2lxvwodPUBWpPVgNd5fdLJPBBkaW2I0CWcIEEvrw9qXYQyBLOGsvcCQU/kcBbSTi0tOUMFa6RwP/dkk47DhT4UCuru6Ig5fdsLG4s4s0sCdQfAiaheSCBj9U7NUda9xYFCn8HEiChwJXuxcWRJgFZgb2d2OiBQiBrti8FyTsACoK79/ukIEXCvVKA54L0HHFXgBQJd0lB2hIYa90jBajzp909WvVCtXG/XwpiEqLfH2FwvxTEnTlXjG3vNBZIALTnf2hDLSecvs+mQoUKFSpUqFChQoU/jf/OTHENiLzJxAAAAABJRU5ErkJggg=="
                alt="review2"
              />
              <p className={styles.size}>Nordstrom Cares</p>
            </div>

            <p>
              Big Brothers Big Sisters serverd 109,254 {"\n"} children in 2020,
              inspiring mentoring {"\n"} relationships, and providing youth and{" "}
              {"\n"} families safe, proven,accessible, and free {"\n"} programs
              in all 50 states.
            </p>

            <div className={styles.flex}>
              <div>
                <input type="checkbox" />
                <lable className={styles.bold}>Donate $5.00</lable>
              </div>
              <div>
                <input type="checkbox" />
                <lable className={styles.bold}>Donate $5.00</lable>
              </div>
            </div>

            <p className={styles.last}>
              All donations are non-refundable and not eligible{"/n"}
              for tax deductions. 100% of your donation goes to {"/n"} BBBS.
              Visit our our Terms & Conditions for more information.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
