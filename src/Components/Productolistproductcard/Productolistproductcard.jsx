import React, { useState } from "react";
import Slider from "react-slick";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./Productolistproductcard.css";
import product1 from "../../assets/images/perfume.png";
import product2 from "../../assets/images/perfume-hover.png";
import { Link } from "react-router-dom";


export default function Productolistproductcard() {
  const [wishlisted, setWishlisted] = useState(false);

  const images = [product1, product2, product1, product2]; // Add more images as needed

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="product-list-card">
      <div className="image-wrapper">
        <Link to="/ProductInner">
          <Slider {...settings}>
            {images.map((img, i) => (
              <img key={i} src={img} alt={`product-${i}`} className="product-image" />
            ))}
          </Slider>
        </Link>
        <button
          className="wishlist-btn"
          onClick={() => setWishlisted(!wishlisted)}
        >
          {wishlisted ? <FaHeart color="red" /> : <FaRegHeart />}
        </button>
      </div>

      <div className="product-details">
        <p className="product-name">Dior Sauvage</p>
        <div className="product-price">
          <span className="price">Rs. 1500</span>
          <span className="original-price">Rs. 2000</span>
          <span className="discount">(50% OFF)</span>
        </div>
        <div >
          <button className="secondry-btn">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}
