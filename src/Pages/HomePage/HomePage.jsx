import React from "react";
import TopHeader from "../../Components/TopHeader/Topheader";
import NavBar from "../../Components/NavBar/NavBar";
import Banner from "../../Components/Banner/Banner";
import "./HomePage.css"
import Bestseller from "../../Components/BestSeller/BestSeller";
import Category from "../../Components/Category/Category";
import Productcard from "../../Components/ProductCard/Productcard";
import SecondryBanner from "../../Components/SecondryBanner/SecondryBanner";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Shipping from "../../Components/Shipping/Shipping";
import Footer from "../../Components/Footer/Footer";




export default function HomePage() {
  return (
    <main className="homepage">
      <TopHeader />
      <NavBar />
      <Banner />
      <div className="best-seller-sec">
        <div className="wrapper">
          <h2>Discover <span>Our Bestsellers</span></h2>
          <Bestseller />
        </div>
      </div>
      <div className="category-sec">
        <div className="wrapper">
          <h2>Shop By <span> Gender</span></h2>
          <Category />
        </div>
      </div>
      <div className="product-sec">
        <div className="wrapper">
          <h2>Latest <span>Products</span></h2>
          <div className="product-cards-row">
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
          </div>
        </div>
      </div>
      <div className="shippping-sec">
        <div className="wrapper">
          <Shipping />
        </div>
      </div>
      <div className="secondry-banner-sec">
        <SecondryBanner />
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
    </main>
  );
}
