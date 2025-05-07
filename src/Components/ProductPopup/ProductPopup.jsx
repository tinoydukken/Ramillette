import React, { useState, useEffect } from "react";
import "./ProductPopup.css";
import ProductSlider from "../Productslider/Productslider";
import perfum1 from "../../assets/images/perfume.png";
import perfum2 from "../../assets/images/perfume-hover.png";
import close from "../../assets/images/cancel.png";
import stararting from "../../assets/images/rating.png";

const images = [perfum1, perfum2, perfum1, perfum2];

const content = [
  {
    title: "Overview",
    text: "Get a quick summary of our amazing product. It's designed to help you achieve your goals efficiently.",
  },
  {
    title: "Features",
    text: "Explore our cutting-edge features that make your experience smooth and productive.",
  },
  {
    title: "Pricing",
    text: "We offer flexible pricing plans to suit your needs. Choose the best plan for you!",
  },
];

const Popup = ({ isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState(null); // Start with no tab open
  const stock = 10;

  // 🔒 Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const increment = () => {
    if (quantity < stock) setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
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
                      M.R.P: <span>₹2,000.00</span>
                    </p>
                    <p>₹1,000</p>
                  </div>
                  <div className="tax">
                    <p>Inclusive of all taxes</p>
                  </div>
                </div>
                <div className="product-quantity">
                  <p>Quantity:</p>
                  <div className="quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={decrement}
                      disabled={quantity === 1}
                    >
                      -
                    </button>
                    <span className="quantity-value">{quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={increment}
                      disabled={quantity === stock}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="product-popup-btns">
                  <div className="add-btn">
                    <button className="secondry-btn">Buy Now</button>
                  </div>
                  <div className="product-buy-btn">
                    <button className="buy-btn">Add to Cart</button>
                  </div>
                </div>
                <div className="product-popup-details">
                  <div className="accordion-tabs">
                    {content.map((item, index) => (
                      <div key={index} className="accordion-item">
                        <button
                          className={`accordion-header ${
                            activeTab === index ? "active" : ""
                          }`}
                          onClick={() =>
                            setActiveTab(activeTab === index ? null : index)
                          }
                        >
                          {item.title}
                          <span
                            className={`arrow ${
                              activeTab === index ? "up" : "down"
                            }`}
                          ></span>
                        </button>
                        {activeTab === index && (
                          <div className="accordion-body">
                            <p>{item.text}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
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
