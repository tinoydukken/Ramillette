import React from 'react'
import shipping from "../../assets/images/travel.png"
import delivery from "../../assets/images/delivery-truck.png"
import safepayment from "../../assets/images/credit-card.png"
import "./Shipping.css"


export default function Shipping() {
    return (
        <div>
            <div className="shipping-sec">
                <div className="wrapper">
                    <div className="shipping-row">
                        <div className="shipping-col1">
                            <div className="shipping-card">
                                <div className="shipping-icon">
                                    <img src={shipping} alt="" />
                                </div>
                                <div className="shipping-content">
                                    <h3>SHIPPING all over India</h3>
                                    <p>Enjoy fast and reliable shipping to any location across India.</p>
                                </div>
                            </div>
                        </div>
                        <div className="shipping-col2">
                            <div className="shipping-card">
                                <div className="shipping-icon">
                                    <img src={delivery} alt="" />
                                </div>
                                <div className="shipping-content">
                                    <h3>Free Shipping</h3>
                                    <p>Enjoy the convenience of free shipping on all your orders, ensuring you save on delivery costs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="shipping-col3">
                            <div className="shipping-card">
                                <div className="shipping-icon">
                                    <img src={safepayment} alt="" />
                                </div>
                                <div className="shipping-content">
                                    <h3>SECURITY PAYMENT</h3>
                                    <p>Safe and secure transactions with advanced encryption.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
