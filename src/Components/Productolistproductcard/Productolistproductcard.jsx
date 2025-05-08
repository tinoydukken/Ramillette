import React, { useState } from "react";
import Slider from "react-slick";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./Productolistproductcard.css";
// import product1 from "../../assets/images/perfume.png";
// import product2 from "../../assets/images/perfume-hover.png";
import { Link } from "react-router-dom";

export default function Productolistproductcard(Props) {
  const { product } = Props;
  
  const [wishlisted, setWishlisted] = useState(false);

  // const images = [product1, product2, product1, product2]; // Add more images as needed

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
        <Link to={`/product-inner/${product._id}`}>
          <Slider {...settings}>
            {product &&
              Object.keys(product).length > 0 &&
              product?.productImages.map((img, i) => (
                <img
                  key={i}
                  src={`${import.meta.env.VITE_BASE_URL}/${img}`}
                  alt={`product-${i}`}
                  className="product-image"
                />
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
        <p className="product-name">{product?.productName || ""}</p>
        <div className="product-price">
          <span className="price">
            Rs.{" "}
            {product?.productPrice -
              (product?.productPrice * product?.productDiscount) / 100}
          </span>
          <span className="original-price">
            Rs. {product?.productPrice || 0}
          </span>
          <span className="discount">({product?.productDiscount}% OFF)</span>
        </div>
        <div>
          <button className="secondry-btn">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}
