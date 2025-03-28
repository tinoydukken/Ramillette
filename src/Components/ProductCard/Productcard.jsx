import React from "react";
import Perfumimg from "../../assets/images/perfume.png";
import Perfumhoverimg from "../../assets/images/perfume-hover.png";
import "./Productcard.css";
import { useState } from "react";
import quickview from "../../assets/images/search.png";
import Tooltip from "../Tooltip/Tooltip";
import Popup from "../ProductPopup/ProductPopup";

export default function Productcard() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className="product-card">
                <div className="product-card-image-sec">
                    <div className="product-image">
                        <img src={Perfumimg} alt="" />
                    </div>
                    <div className="product-hover-image">
                        <img src={Perfumhoverimg} alt="" />
                    </div>
                    <div className="product-offer-label">
                        <p>20% OFF</p>
                    </div>
                </div>
                <div className="product-content">
                    <h3>CEO Man Perfume - 100ml</h3>
                    <p>
                        ₹ 999.00 <span class="cutting-money">₹1200.00</span>
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
                <button className='secondry-btn'>ADD TO CART</button>
            </div>
            <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
               
            </Popup>
        </div>
    );
}
