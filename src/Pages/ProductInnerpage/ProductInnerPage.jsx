import React from 'react'
import TopHeader from "../../Components/TopHeader/Topheader";
import NavBar from "../../Components/NavBar/NavBar";
import ProductInnerproduct from '../../Components/ProductInner/ProductInner';
import Testimonial from "../../Components/Testimonial/Testimonial";
import Footer from "../../Components/Footer/Footer";


import "./ProductInnerPage.css";
export default function ProductInner() {
  return (
    <>
      <div className="product-inner-page">
        <TopHeader />
        <NavBar />
        <div className="product-inner-wrap">
          <div className="wrapper">
            <div className="product-inner-sec">
              <ProductInnerproduct />
            </div>
          </div>
        </div>
        <div className="testimonial-sec">
          <div className="wrapper">
            <Testimonial />
          </div>
        </div>
        <div className="footer-sec">
          <div className="wrapper">
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
