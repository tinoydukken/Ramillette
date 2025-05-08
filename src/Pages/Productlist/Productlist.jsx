import React, { useEffect, useState } from "react";
import TopHeader from "../../Components/TopHeader/Topheader";
import NavBar from "../../Components/NavBar/NavBar";
import FilterSide from "../../Components/FilterSide/FilterSide";
import "./Productlist.css";
import Productolistproductcard from "../../Components/Productolistproductcard/Productolistproductcard";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Footer from "../../Components/Footer/Footer";
import {  getAllProductsForUser } from "../../services/productApiServices";

export default function Productlist() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProductsForUser(setProducts);
  }, []);


  return (
    <>
      <div className="product-listing-page">
        <TopHeader />
        <NavBar />
        <div className="product-list-page">
          <div className="wrapper">
            <div className="product-list-page-wrap">
              <div className="product-left">
                <FilterSide />
              </div>
              <div className="product-right">
                <div className="product-list-cards">
                  {products &&
                    products.length > 0?
                    products.map((product) => {
                      return (
                        <div
                          className="product-list-post-card"
                          key={product._id}
                        >
                          <Productolistproductcard product={product} />
                        </div>
                      );
                    }):(
                      // need to implement no product found page
                      <></>
                    )}
                </div>
              </div>
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
  );
}
