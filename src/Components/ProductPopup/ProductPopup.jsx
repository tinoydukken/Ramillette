import React, { useState } from "react";
import "./ProductPopup.css";
import ProductSlider from "../Productslider/Productslider";
import perfum1 from "../../assets/images/perfume.png";
import perfum2 from "../../assets/images/perfume-hover.png";
import close from "../../assets/images/cancel.png";
import stararting from "../../assets/images/rating.png";

const images = [perfum1, perfum2, perfum1, perfum2];

const Popup = ({ isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const stock = 10; // Example stock limit

  if (!isOpen) return null;

  const increment = () => {
    if (quantity < stock) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <img src={close} alt="Close" />
        </button>
        <div className="product-popup-sec">
          <div className="product-popup-row">
            <div className="product-popup-left">
              <ProductSlider images={images} />
            </div>
            <div className="product-popup-right">
              <div className="product-des-sec">
                <div className="product-head-sec">
                  <h2>CEO Man Perfume - 100ml</h2>
                  <div className="product-inner-star-rating">
                    <img src={stararting} alt="Rating" />
                  </div>
                  <div className="product-rate">
                    <p className="saveprice">
                      M.R.P: <span> ₹2,000.00</span>
                    </p>
                    <p>₹ 1,000</p>
                  </div>
                  <div className="tax">
                    <p>Inclusive of all taxes</p>
                  </div>
                </div>

                {/* Quantity Section */}
                <div className="product-quantity">
                  <p>Quantity:</p>
                  <div className="quantity-controls">
                    <button className="quantity-btn" onClick={decrement} disabled={quantity === 1}>
                      -
                    </button>
                    <span className="quantity-value">{quantity}</span>
                    <button className="quantity-btn" onClick={increment} disabled={quantity === stock}>
                      +
                    </button>
                  </div>
                </div>
                <div className="product-popup-btns">
                  <div className="add-btn">
                    <button className="secondry-btn">buy now</button>
                  </div>
                  <div className="product-buy-btn">
                  <button className="buy-btn">Add to cart</button>
                  </div>
                </div>
                <div className="product-popup-details">
                    <p><span>Top Note: </span>NEEA EDP 50 ML : Citrus, lemon peel, green ASCEND EDP 50 ML: Fruity-APPLE, Citrus-GRAPEFRUIT, MARINE NOTE YEARN EDP 50 ML : Citrus, fruity Black currant, Marine</p>
                    <p><span>Top Note: </span>NEEA EDP 50 ML : Citrus, lemon peel, green ASCEND EDP 50 ML: Fruity-APPLE, Citrus-GRAPEFRUIT, MARINE NOTE YEARN EDP 50 ML : Citrus, fruity Black currant, Marine</p>
                    <p><span>Top Note: </span>NEEA EDP 50 ML : Citrus, lemon peel, green ASCEND EDP 50 ML: Fruity-APPLE, Citrus-GRAPEFRUIT, MARINE NOTE YEARN EDP 50 ML : Citrus, fruity Black currant, Marine</p>
                    <p><span>Top Note: </span>NEEA EDP 50 ML : Citrus, lemon peel, green ASCEND EDP 50 ML: Fruity-APPLE, Citrus-GRAPEFRUIT, MARINE NOTE YEARN EDP 50 ML : Citrus, fruity Black currant, Marine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
