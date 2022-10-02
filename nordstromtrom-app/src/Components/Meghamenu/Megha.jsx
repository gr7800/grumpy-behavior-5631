import React from "react";
import "./megamenu.css";
import { Link } from "react-router-dom";

const Megha = () => {
  const [hover, setHover] = React.useState(false);
  return (
    <>
      <nav className="menu">
        <div className="wrapper">
          <div className="logo">
            <input type="radio" name="slide" id="menu-btn" />
            <input type="radio" name="slide" id="cancel-btn" />
          </div>
          <ul className="nav-links" id={hover ? "navs__links" : ""}>
            <label className="btn cancel-btn" htmlFor="cancel-btn">
              <i className="fa fa-times"></i>
            </label>
            <li>
              <Link
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
                id="clear"
              >
                Clearance
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Clearance: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links" id="line-height-new">
                      <li>
                        <Link to="/products/women" id="bold">
                          Women
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/women">Clothing</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Shoes</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Handbags</Link>
                      </li>
                      <li>
                        <Link to="/#">Sunglasses & Eyewear</Link>
                      </li>
                      <li>
                        <Link to="/#">Jewelry</Link>
                      </li>
                      <li>
                        <Link to="/#">Watches</Link>
                      </li>
                      <li>
                        <Link to="/#">Accessories</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Men</header>
                    <ul className="mega-links" id="line-height-men">
                      <li>
                        <Link to="/products/Men">Clothing</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Shoes</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Watches</Link>
                      </li>
                      <li>
                        <Link to="/#">Accessories</Link>
                      </li>
                      <br />
                      <li>
                        <Link to="/#" id="bold">
                          Designer
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Kids</header>
                    <ul className="mega-links" id="line-height-new__2">
                      <li>
                        <Link to="/products/women">Girls'Clothing</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Girls'Shoes</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Boys' Clothing</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Boys' Shoes</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Kids' Shoes</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Baby Clothing & Shoes</Link>
                      </li>
                      <br />
                      <li>
                        <Link to="/#" id="bold">
                          Activewear
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Home</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Art & Wall Decor</Link>
                      </li>
                      <li>
                        <Link to="/#">Bath</Link>
                      </li>
                      <li>
                        <Link to="/#">Bedding</Link>
                      </li>
                      <li>
                        <Link to="/#">Decor</Link>
                      </li>
                      <li>
                        <Link to="/#">Electronic & Tech Acessories</Link>
                      </li>
                      <li>
                        <Link to="/#">Kitchen & Tabletop</Link>
                      </li>
                      <li>
                        <Link to="/#">Storage & Cleaning</Link>
                      </li>
                      <br />
                      <li>
                        <Link to="/#" id="bold">
                          Beauty
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">Makeup</Link>
                      </li>
                      <li>
                        <Link to="/#">Skin Care</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                Women
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Women: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift" id="bold">
                          Mother's Day Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Designer Brands
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Contemporary Brands
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Trend Brands
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Dresses Under $50
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Denim Under $50
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Swim & Sun Under $50
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Sandals Under $50p
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Wedding Shop
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Shop by Occasion
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Shop by Trend
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Nike for the Family
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Rack Essentials
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Shop By Brand
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Clothing</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Shoes">Activewear</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Blazers</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Coats & Jackets</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Dresses</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Jeans & Denim</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Jumpsuits & Rompers</Link>
                      </li>
                      <li>
                        <Link to="/products/women">
                          Lingerie, Hosiery & Shapewear
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/women">Loungewear</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Jeans & Denim</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Pants & Leggings</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Shorts</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Skirts</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Sleepwear & Robes</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Sweaters</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Sweatshirts & Hoodies</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Swimsuits & Cover-Ups</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Tops</Link>
                      </li>
                      <br />

                      <li>
                        <Link to="/#">Plus-Size</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Shoes</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Shoes">Athletic & Running</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Boots & Booties</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Clogs</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Comfort</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Espadrilles</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Flats</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Flip-Flops & Slides</Link>
                      </li>
                      <li>
                        <Link to="/#">Heels</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Loafers & Oxfords</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Mules</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Rain Boots</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Sandals</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Slippers</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Sneakers</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Wedges</Link>
                      </li>
                      <br />
                      <li>
                        <Link to="/products/Shoes">
                          Extended Shoe Sizes & Widths
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Young Adult</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Shoes">Accessories</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Clothing</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Shoes</Link>
                      </li>
                      <li>
                        <Link to="/products/bag" id="bold">
                          Handbags
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Designer Bags</Link>
                      </li>
                      <li>
                        <Link to="/products/bag" id="bold">
                          Sunglasses & Eyewear
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/bag" id="bold">
                          Jewelry
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/bag" id="bold">
                          Watches
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/bag" id="bold">
                          Accessories
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/bag" id="bold">
                          Luggage & Travel
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/bag" id="bold">
                          Beauty
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Activewear</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Men">Crops & Capris</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Jackets</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Leggings</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Shirts&Tees</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Shorts&Skirts</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Sports Bras</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Sweatpants & Joggers</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Sweatshirts&Hoodies</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Tanks</Link>
                      </li>

                      <li>
                        <Link to="/#" id="bold">
                          Active Shoes
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Hiking & Trail</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Running</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Training</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Walking</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Athletic Gear & Equipment
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                Men
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Men: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift" id="bold">
                          Mother's Day Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Designer Brands
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Contemporary Brands
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Graphic Tees Under $25
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Denim Under $50
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Swim & Sun Under $50
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Sneakers Under $50
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Wedding Shop
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Shop by Occasion
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Nike for the Family
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Rack Essentials
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Shop By Brand
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Nordstrom Made
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Clearance
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Clothing</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Shoes">Activewear</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Blazers&Sports Coats</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Coats & Jackets</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Dress Shirts</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Jeans</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Joggers & Sweatpants</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Lounge, Pajamas & Robes</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Pants</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Polo Shirts</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Shirts</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Shorts</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Socks</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Suits & Separates</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Sweaters</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Sweatshirts & Hoodies</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Swimwear&Board Shorts</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">T-Shirts</Link>
                      </li>

                      <li>
                        <Link to="/products/Men">Underwear</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Shoes</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Shoes">Athletic & Running</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Boot Shoes</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Boots</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Comfort</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Dress Shoes</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Loafers & Slip-Ons</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Oxfords & Derbys</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Sandals & Flip-Flops</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Slippers</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Sneakers</Link>
                      </li>

                      <br />
                      <li>
                        <Link to="/products/Shoes">
                          Extended Shoe Sizes & Widths
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Young Adult</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Shoes">Accessories</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Clothing</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Shoes</Link>
                      </li>

                      <li>
                        <Link to="/products/bag" id="bold">
                          Accessorise
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/bag"> Bags & Backpacks</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Sunglasses & Eyewear</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">belt & Suspenders</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Hats</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Jewelry</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Ties & Pocket Squares</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Wallets & Card Cases</Link>
                      </li>
                      <li>
                        <Link to="/products/bag" id="bold">
                          Sunglasses & Eyewear
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/bag" id="bold">
                          Watches
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/bag" id="bold">
                          Luggage & Travel
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/bag" id="bold">
                          Grooming & Cologne
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Activewear</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Men">Jackets</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Shirts</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Shorts</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Sweatpants&Joggers</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Sweatshirts&Hoodies</Link>
                      </li>

                      <li>
                        <Link to="/products/Men">Tanks</Link>
                      </li>

                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Active Shoes
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Hiking & Trail</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Running</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Training</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Walking</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Athletic Gear & Equipment
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                Kids
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Kids: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift" id="bold">
                          Mother's Day Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Sandals Under $20
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Sneakers Under $30
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Nike for the Family
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Swim Shop
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Disney Shop
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Z by Zella for the Family
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Rack Essentials
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Baby Shower Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Shop by Occasion
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Shop By Brand
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Nordstrom Made
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Clearance
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Girls' Clothing</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/women">
                          Baby Girl (Sizes 0-24M)
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/women">
                          Toddler Girls (Sizes 2T-4T)
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/women">Girls (Sizes 4-6x)</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Girls (Sizes 7-16)</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Tween Girls</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Accessories</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Activewear s</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Coats & Jackets</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Dresses & Rompers</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Jeans</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Pajamas & Robes</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Pants & Leggings</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Shorts</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Skirts</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Swimsuits & Cover-Ups</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Tops</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Underwear, Socks & Bra</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Boys' Clothing</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Men">Baby Boy (Sizes 0-24M)</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">
                          Toddler Boys (Sizes 2T-4T)
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Boys (Sizes 4-7)</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Boys (Sizes 8-20)</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Accessories</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Activewear</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Coats & Jackets</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Jeans</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Pajamas & Robes</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Pants</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Sets</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Shirts & Tops</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Shorts</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Suits & Separates</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Swim Trunks & Rashguards</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">T-Shirts</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Underwear & Socks</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Kids' Shoes</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Baby (Sizes 0-4)</Link>
                      </li>
                      <li>
                        <Link to="/#">Toddler (Sizes 4.5-12)</Link>
                      </li>
                      <li>
                        <Link to="/#">Little Kid (Sizes 12.5-3)</Link>
                      </li>
                      <li>
                        <Link to="/#">Big Kid (Sizes 3.5-7)</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Girls' Shoes
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Baby (Sizes 0-4)</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Toddler (Sizes 4.5-12)</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">
                          Little Kid (Sizes 12.5-3)
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Big Kid (Sizes 3.5-7)</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Boys' Shoes
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Baby (Sizes 0-4)</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Toddler (Sizes 4.5-12)</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">
                          Little Kid (Sizes 12.5-3)
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Big Kid (Sizes 3.5-7)</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Security Services</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Men">Baby Clothing & Shoes</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Baby Girl</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Baby Boy</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Baby Shoes</Link>
                      </li>

                      <li>
                        <Link to="/#">Baby Gear & Essentials</Link>
                      </li>
                      <li>
                        <Link to="/gift">Baby Shower Gifts</Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Toys
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                Shoes
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Shoes: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift" id="bold">
                          Mother's Day Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Designer Brands
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Contemporary Brands
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Young Adult Brands
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Sandals Under $50
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Sneakers Under $50
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Flip-Flops & Slides for the Family
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Nike for the Family
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Special Occasion
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Shop by Trend
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Nordstrom Made
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Women's Shoes Clearance
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Men's Shoes Clearance
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Kids' Shoes Clearance
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Women's Shoes</header>
                    <ul className="mega-links" id="line-height-new">
                      <li>
                        <Link to="/products/Shoes">Athletic & Running</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Boots & Booties</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Clogs</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Comfort</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Espadrilles</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Flats</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Flip-Flops & Slides</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Heels</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Loafers & Oxfords</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Mules</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Rain Boots</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Sandals</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Slippers</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Sneakers</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Wedges</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">
                          Extended Sizes & Widths
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Men's Shoes</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Shoes">Athletic & Running</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Boots</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Comfort</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Dress Shoes</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Loafers & Slip-Ons</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Oxfords & Derbys</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Sandals & Flip-Flops</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Slippers</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Sneakers</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">
                          Extended Sizes & Widths
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Kids' Shoes</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Shoes">Baby (Sizes 0-4)</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Toddler (Sizes 4.5-12)</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">
                          Little Kid (Sizes 12.5-3)
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Big Kid (Sizes 3.5-7)</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Girls' Shoes
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Baby (Sizes 0-4)</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Toddler (Sizes 4.5-12)</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">
                          Little Kid (Sizes 12.5-3)
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Big Kid (Sizes 3.5-7)</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Boys' Shoes
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Baby (Sizes 0-4)</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Toddler (Sizes 4.5-12)</Link>
                      </li>

                      <li>
                        <Link to="/products/Shoes">
                          Little Kid (Sizes 12.5-3)
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Big Kid (Sizes 3.5-7)</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Shop By Brand</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Shoes">adidas</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">adidas</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">ASICS</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Brooks</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Cole Haan</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Converse</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">New Balance</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Nike</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Sam Edelman</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Steve Madden</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">UGG</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                Activewear
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Activewear: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift" id="bold">
                          Mother's Day Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Adidas
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Nike
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Z by Zella
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Clearance
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Shop by Activity
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift">Athleisure</Link>
                      </li>
                      <li>
                        <Link to="/gift">Commuter e</Link>
                      </li>
                      <li>
                        <Link to="/gift">Golf</Link>
                      </li>
                      <li>
                        <Link to="/gift">Hiking</Link>
                      </li>
                      <li>
                        <Link to="/gift">Running</Link>
                      </li>
                      <li>
                        <Link to="/gift">Swim & Surf</Link>
                      </li>
                      <li>
                        <Link to="/gift">Training</Link>
                      </li>
                      <li>
                        <Link to="/gift">Yoga & Barr</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Women's Activewear</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/women">Crops & Capris</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Jackets</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Leggings</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Shirts & Tees</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Shorts & Skirts</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Socks</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Sports Bras</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Sweatpants & Joggers</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Sweatshirts & Hoodies</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Swim</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Tanks</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Plus Activewear</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Men's Activewear</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Men">Jackets</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Shirts</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Shorts</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Socks</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Sweatpants & Joggers</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Sweatshirts & Hoodies</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Swim</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Tanks</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Women's Active Shoes</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Shoes">Hiking & Trail</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Lifestyle</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Running</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Sport Sandals</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Training</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Walking</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Men's Active Shoes
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Hiking & Trail</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Lifestyle</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Running</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Sport Sandals</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Training</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Walking</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Kids' Activewear</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Shoes">Girls' Activewear</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Boys' Activewear</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Kids' Active Shoes
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Girls' Active Shoes</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Boys' Active Shoes</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Athletic Gear & Equipment
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                Bags&Accessories
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Bags & Accessories: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift" id="bold">
                          Mother's Day Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Handbags Under $100
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Designer Sunglasses Under $100
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Nordstrom Made
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Women's Accessories Clearance
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Men's Accessories Clearance
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Shop By Brand</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift">Bony Levy</Link>
                      </li>
                      <li>
                        <Link to="/gift">Gucci Sunglasses</Link>
                      </li>
                      <li>
                        <Link to="/gift">Kate Spade New York</Link>
                      </li>
                      <li>
                        <Link to="/gift">Marc Jacobs</Link>
                      </li>
                      <li>
                        <Link to="/gift">Ray-Ban</Link>
                      </li>

                      <li>
                        <Link to="/" id="bold">
                          Designer
                        </Link>
                      </li>
                      <li>
                        <Link to="/">Designer Accessories</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Designer Handbags</Link>
                      </li>
                      <li>
                        <Link to="/">Designer Sunglasses & Eyewear</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Handbags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/bag">Backpacks</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Beach & Straw Bags</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Bucket Bags</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Clutches & Pouches</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Crossbody Bags</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Designer Bags</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Fanny Packs & Belt Bags</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Mini Bags</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Satchels</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Shoulder Bags</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Totes</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Wallets r</Link>
                      </li>
                      <li>
                        <Link to="/products/bag" id="bold">
                          Luggage & Travel
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/bag" id="bold">
                          Tech Accessories
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/bag" id="bold">
                          Sunglasses & Eyewea
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Jewelry</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/women">Bracelets</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Earrings</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Necklaces</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Rings</Link>
                      </li>
                      <li>
                        <Link to="/products/women">14K Gold Jewelry</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Diamond Jewelry</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Gold Jewelry</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Rose Gold Jewelry</Link>
                      </li>
                      <li>
                        <Link to="/products/women">
                          Sterling Silver Jewelry
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/women" id="bold">
                          Fine Jewelry
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/women">Bracelets</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Earrings</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Necklaces</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Rings</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Women's Accessories</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/women">Belts</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Hair Accessories</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Hats</Link>
                      </li>
                      <li>
                        <Link to="/products/women">
                          Ponchos, Kimonos & Capes
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/women">
                          Sarongs, Caftans & Cover-Ups
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/women">Scarves</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Winter Accessories</Link>
                      </li>
                      <li>
                        <Link to="/products/women" id="bold">
                          Men's Accessories
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Bags & Backpacks</Link>
                      </li>
                      <li>
                        <Link to="/products/bag">Belts & Suspenders</Link>
                      </li>{" "}
                      <li>
                        <Link to="/gift">Hats</Link>
                      </li>
                      <li>
                        <Link to="/gift">Wallets & Card Cases</Link>
                      </li>
                      <li>
                        <Link to="/gift">Winter Accessories</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                Home
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Home: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift" id="bold">
                          Mother's Day Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Bedding Under $50
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Home Decor Under $50
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Kitchen Appliances Under $100
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Rack Essentials
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Nordstrom Made
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Clearance
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Shop By Brand
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Bath</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Home">Bath Rugs & Mats</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Bath Towels</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Bathroom Decor</Link>
                      </li>
                      <li>
                        <Link to="/products/Home" id="bold">
                          Bedding
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">
                          Comforters & Duvet Inserts
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Duvet Covers</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Mattress Pads & Toppers</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Pillow Cases</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Pillows</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Quilts & Blankets</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Sheet Sets</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Throws</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Decor</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Home">Decorative Accessories</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Decorative Pillows</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Faux Plants & Stands</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">
                          Home Fragrances, Diffusers & Candles
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Lighting & Lamps</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Rugs & Doormats</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">
                          Stationery & Desk Accessories
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Window Treatments</Link>
                      </li>
                      <li>
                        <Link to="/products/Home" id="bold">
                          Holiday Decorations
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home" id="bold">
                          Art & Wall Decor
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Art by Color</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Art by Subject</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Art by Type</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Clocks</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Mirrors</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Kitchen & Tabletop</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Home">Bar Accessories</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Cookware & Bakeware</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">
                          Cutlery & Kitchen Knives
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Dinnerware & Flatware</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Drinkware & Glassware</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Serveware</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Small Appliances</Link>
                      </li>
                      <li>
                        <Link to="/products/Home" id="bold">
                          Outdoor Living
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">
                          Beach & Pool Accessories
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Outdoor Dining</Link>
                      </li>

                      <li>
                        <Link to="/products/Home" id="bold">
                          Electronic & Tech Accessories
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Headphones & Speakers</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Phone Cases</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Smart Home</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Smart Watches & Bands</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Storage & Cleaning</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Home">Bathroom Storage</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">
                          Bedroom & Closet Storage
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Kitchen Storage</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Laundry & Cleaning</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Storage Baskets & Bins</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Vacuum & Floor Care</Link>
                      </li>

                      <li>
                        <Link to="/products/Home" id="bold">
                          Pet Accessories
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home" id="bold">
                          Games
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home" id="bold">
                          Luggage & Travel
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                Beauty
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Beauty: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift" id="bold">
                          Mother's Day Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Prestige Beauty
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Natural Beauty
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Beauty Under $25
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Hair Care Under $25
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Skin Care Under $20
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Makeup Under $20
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to="gift" id="bold">
                          Beauty Gifts & Sets
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Travel & Mini Sizes
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Clearance
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Shop By Brand</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="gift">Charlotte Tilbury</Link>
                      </li>
                      <li>
                        <Link to="gift">Clinique</Link>
                      </li>
                      <li>
                        <Link to="gift">Drybar</Link>
                      </li>
                      <li>
                        <Link to="gift">L'Occitane</Link>
                      </li>
                      <li>
                        <Link to="gift">M.A.C. Cosmetics</Link>
                      </li>
                      <li>
                        <Link to="gift">Mario Badescu</Link>
                      </li>
                      <li>
                        <Link to="gift">Nudestix</Link>
                      </li>
                      <li>
                        <Link to="gift">Shiseido</Link>
                      </li>
                      <li>
                        <Link to="gift">Too Faced</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Urban Decay</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Makeup</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="gift">Blush, Bronzer & Highlighter</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Brushes & Tools</Link>
                      </li>
                      <li>
                        <Link to="gift">Concealer & Foundation</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Eye Makeup</Link>
                      </li>
                      <li>
                        <Link to="gift">Eyebrows</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Eyeshadow & Eyeliner</Link>
                      </li>
                      <li>
                        <Link to="gift">Gifts & Sets</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Lipstick, Lip Gloss & Liner</Link>
                      </li>
                      <li>
                        <Link to="gift">Mascara & Lashes</Link>
                      </li>
                      <li>
                        <Link to="gift">Nail Polish & Care</Link>
                      </li>
                      <li>
                        <Link to="gift">Palettes</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Powder & Setting Sprays</Link>
                      </li>
                      <li>
                        <Link to="gift">Primer</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Skin Care</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="gift">Cleansers</Link>
                      </li>
                      <li>
                        <Link to="gift">Exfoliators</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Eye Creams & Treatments</Link>
                      </li>
                      <li>
                        <Link to="gift">Face Mists & Toners</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Face Moisturizers</Link>
                      </li>
                      <li>
                        <Link to="gift">Facial Masks</Link>
                      </li>{" "}
                      <li>
                        <Link to="gift">Gifts & Sets</Link>
                      </li>
                      <li>
                        <Link to="/gift">Lip Balms & Treatments</Link>
                      </li>{" "}
                      <li>
                        <Link to="/gift">Makeup Remover</Link>
                      </li>
                      <li>
                        <Link to="/gift">Serums</Link>
                      </li>
                      <li>
                        <Link to="/gift">Sunscreen</Link>
                      </li>{" "}
                      <li>
                        <Link to="/gift">Tools & Devices</Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Bath & Body
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Hair Care</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Home">Hair & Scalp Treatments</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">
                          Hair Dryers & Styling Tools
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home">Hair Styling Products</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Shampoo & Conditioner</Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home" id="bold">
                          Fragrance
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Candles & Diffusers</Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home">Designer Fragrance</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Gifts & Sets</Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home">Perfume</Link>
                      </li>
                      <li>
                        <Link to="/products/Home" id="bold">
                          Tools, Brushes & Makeup Bags
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home">Bath & Body Tools</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Hair Styling Tools</Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home">
                          Makeup Brushes, Tools, & Bags
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Skin Care Tools</Link>
                      </li>{" "}
                      <li>
                        <Link to="/products/Home" id="bold">
                          Men's Grooming & Cologne
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                Gifts
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Gifts: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift" id="bold">
                          Gift Cards
                        </Link>
                      </li>
                      <li>
                        <Link to="/wishlist" id="bold">
                          Wish List
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Mother's Day Gifting</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift">Gifts for Mom Under $25</Link>
                      </li>{" "}
                      <li>
                        <Link to="/gift">Gifts for Mom Under $50</Link>
                      </li>
                      <li>
                        <Link to="/gift">Unique Gifts for Mom</Link>
                      </li>
                      <li>
                        <Link to="/gift">Luxe & Designer for Mom</Link>
                      </li>{" "}
                      <li>
                        <Link to="/gift">Jewelry & Watches for Mom</Link>
                      </li>
                      <li>
                        <Link to="/gift">Wellness Gifts for Mom</Link>
                      </li>{" "}
                      <li>
                        <Link to="/gift">Home Gifts for Mom</Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Dressed Up Styles for Mom
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to="/gift" id="bold">
                          Activities for Mom: At-Home Spa
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Activities for Mom: Cooking & Cocktails
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Everyday Gifting</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift">Gifts for Her</Link>
                      </li>
                      <li>
                        <Link to="/gift">Gifts for Him</Link>
                      </li>{" "}
                      <li>
                        <Link to="/gift">Gifts for Kids</Link>
                      </li>
                      <li>
                        <Link to="/gift">Gifts for Home</Link>
                      </li>{" "}
                      <li>
                        <Link to="/gift">Gifts Under $25</Link>
                      </li>
                      <li>
                        <Link to="/gift">Gifts Under $50</Link>
                      </li>{" "}
                      <li>
                        <Link to="/gift">Gifts Under $100</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Gifts by Occasion</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift">Baby Shower Gifts</Link>
                      </li>
                      <li>
                        <Link to="/gift">Wedding Gifts</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
                id="col"
              >
                FlashEvents
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box" id="megas">
                <div className="content">
                  <div className="row">
                    <header>Flash Events: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/flash/women" id="bold">
                          Women's Flash Events
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to="/flash/mens" id="bold">
                          Men's Flash Events
                        </Link>
                      </li>
                      <li>
                        <Link to="/flash/kids" id="bold">
                          Kids' Flash Events
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to="/flash/home" id="bold">
                          Home Flash Events
                        </Link>
                      </li>
                      <li>
                        <Link to="/flash/beauty" id="bold">
                          Beauty Flash Events
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Women's Must-Have Bright & Bold Sandals</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">
                          Men's Must-Have Sandals Up to 60% Off
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">
                          Kids' Must-Have Sandals Up to 50% Off
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">Free People Starting at $30</Link>
                      </li>
                      <li>
                        <Link to="/#">
                          Alexia Admor Up to 65% Off Including Plus
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          Beach Party: Women's Swimwear, Cover-Ups & More Up to
                          60% Off
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">
                          Beach Party: Women's Summer & Resort Styles Up to 65%
                          Off
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">
                          Beach Party: Men's Summer & Resort Styles Up to 65%
                          Off
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to="/#">
                          Beach Party: Kids' Swim & Summer Styles Up to 60% Off
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">Cozy Throws Feat. Barefoot Dreams</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Megha;
