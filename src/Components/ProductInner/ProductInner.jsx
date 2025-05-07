import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "./ProductInner.css";

import img1 from "../../assets/images/perfume.png";
import img2 from "../../assets/images/perfume-hover.png";
import img3 from "../../assets/images/perfume.png";
import img4 from "../../assets/images/perfume-hover.png";
import img5 from "../../assets/images/perfume.png";
import star from "../../assets/images/star.png";
import makeindia from "../../assets/images/makeindia.png";
import oil from "../../assets/images/oil.png";
import longlasting from "../../assets/images/time-left.png"

// Accordion component
const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`accordion ${isOpen ? "open" : ""}`}>
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h4>{title}</h4>
        <span>{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && <div className="accordion-body">{children}</div>}
    </div>
  );
};

export default function ProductInner() {
  const images = [img1, img2, img3, img4, img5];

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const [quantity, setQuantity] = useState(1);
  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="product-inner-page">
      <div className="wrapper">
        <div className="product-inner-page-wrap">
          <div className="product-inner-left">
            <div className="perfume-slider-container">
              <Slider
                asNavFor={nav2}
                ref={slider1}
                slidesToShow={1}
                slidesToScroll={1}
                arrows={false}
                fade={true}
                className="main-slider"
              >
                {images.map((img, i) => (
                  <div key={i}>
                    <img src={img} alt={`Main ${i}`} className="main-slide-image" />
                  </div>
                ))}
              </Slider>

              <Slider
                asNavFor={nav1}
                ref={slider2}
                slidesToShow={5}
                swipeToSlide={true}
                focusOnSelect={true}
                arrows={true}
                className="thumb-slider"
              >
                {images.map((img, i) => (
                  <div key={i}>
                    <img src={img} alt={`Thumb ${i}`} className="thumb-image" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="product-inner-right">
            <div className="product-inner-content">
              <div className="product-head">
                <h2>Unisex Scents Gift Set - 4 x 20ml</h2>
                <h4>Perfume gift set for All</h4>
              </div>

              <div className="product-star-rating">
                <div className="star-rating">
                  <img src={star} alt="Rating Star" />
                  <p>4.8</p>
                </div>
              </div>

              <div className="details-container">
                <div className="price-section">
                  <span className="discount">–42%</span>
                  <span className="price">₹499.00</span>
                  <div className="mrp">
                    MRP: <del>₹849.00</del>
                  </div>
                  <div className="tax-info">Inclusive of all taxes</div>
                </div>

                <div className="quantity-cart">
                  <div className="quantity-controls">
                    <button onClick={decrement}>–</button>
                    <span>{quantity}</span>
                    <button onClick={increment}>+</button>
                  </div>
                  <button className="add-to-cart">ADD TO CART</button>
                </div>

                <div className="features">
                  <div className="feature-box"><img src={longlasting} alt="" /><span>LONG LASTING</span></div>
                  {/* <div className="feature-box"><img src={} alt="" /><span>IFRA - CERTIFIED</span></div> */}
                  <div className="feature-box"><img src={oil} alt="" /><span>IMPORTED OILS</span></div>
                  <div className="feature-box"><img src={makeindia} alt="" /><span>MADE IN INDIA</span></div>
                </div>

                <p className="description">
                  Discover our exclusive perfume gift set featuring four captivating perfumes:
                  Night Fever, a fruity and oriental blend perfect for enchanting evenings;
                  Devil, a musky and sweet fragrance that… <span className="read-more">Read more</span>
                </p>

                <div className="offers">
                  <h3>EXCLUSIVE OFFERS</h3>
                  <div className="offer-row">
                    <div className="offer-box">
                      🎁 <strong>2 FOR ₹949</strong>
                      <p>Get any 2 Perfumes for</p>
                    </div>
                    <div className="offer-box">
                      🎁 <strong>3 FOR ₹1298</strong>
                      <p>Get any 3 Perfumes for</p>
                    </div>
                    <div className="offer-box">
                      🎁 <strong>6 FOR ₹999</strong>
                      <p>Get any 100ml perfume</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion Section */}
        <div className="product-details-accordion">
          <Accordion title="KEY BENEFITS" defaultOpen={true}>
            <ul>
              <li>Comes in luxurious packaging</li>
              <li>Long-lasting perfumes</li>
              <li>Made with imported oils from France, Spain, and Italy</li>
              <li>IFRA-certified</li>
              <li>Set of 4 fragrances</li>
              <li>Takes up minimal space in your luggage</li>
              <li>An excellent gifting option</li>
              <li>Perfect for both men and women</li>
            </ul>
          </Accordion>

          <Accordion title="HOW TO USE">
            <p>Spray directly on pulse points: neck, wrists, and behind ears. Do not rub.</p>
          </Accordion>

          <Accordion title="FAQs">
            <p><strong>Q:</strong> Are these perfumes unisex?<br /><strong>A:</strong> Yes, they are perfect for both men and women.</p>
          </Accordion>

          <Accordion title="OTHER INFORMATION">
            <p>Manufactured in compliance with IFRA standards. For external use only.</p>
          </Accordion>

          <Accordion title="ALL INGREDIENTS">
            <p>Alcohol Denat, Fragrance (Parfum), Aqua (Water), Linalool, Citral, Limonene.</p>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
