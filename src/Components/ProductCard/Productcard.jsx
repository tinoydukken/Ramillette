import React from "react";
import Perfumimg from "../../assets/images/perfume.png";
import Perfumhoverimg from "../../assets/images/perfume-hover.png";
import "./Productcard.css";
import { useState } from "react";
import quickview from "../../assets/images/search.png";
import Tooltip from "../Tooltip/Tooltip";
import Popup from "../ProductPopup/ProductPopup";
import { Link } from "react-router-dom";

export default function Productcard(Props) {
  const { product } = Props;

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="product-card">
        <div className="product-card-image-sec">
          <Link to={`/product-inner/${product?._id}`}>
            <div className="product-image">
              <img
                src={`${import.meta.env.VITE_BASE_URL}/${
                  product?.productImages[0]
                }`}
                alt="product-image-1"
              />
            </div>
            <div className="product-hover-image">
              <img
                src={`${import.meta.env.VITE_BASE_URL}/${
                  product?.productImages[1]
                }`}
                alt="product-image-2"
              />
            </div>
            <div className="product-new-label">
              <p>New</p>
            </div>
            <div className="product-offer-label">
              <p>{product?.productDiscount || 0}% OFF</p>
            </div>
          </Link>
        </div>
        <div className="product-content">
          <h3>{product?.productName || ""}</h3>
          <p>
            ₹ {(product?.productDiscount / 100) * product?.productPrice}{" "}
            <span class="cutting-money">₹{product?.productPrice || 0}.00</span>
          </p>
          <div className="quick-btn">
            <Tooltip text="Quick View">
              <button
                onClick={() => setIsOpen(true)}
                className="quick-view-div"
              >
                <img src={quickview} alt="" />
              </button>
            </Tooltip>
          </div>
        </div>
        <button className="secondry-btn">ADD TO CART</button>
      </div>
      <Popup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        product={product}
      ></Popup>
    </div>
  );
}
