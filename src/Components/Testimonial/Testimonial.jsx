import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avathar from "../../assets/images/avathar-1.jpeg";
import "./Testimonial.css";
import starrating from "../../assets/images/rating.png"



const testimonials = [
  { name: "User 1", image: avathar, review: " but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", username: "@user1" },

  { name: "User 2", image: avathar, review: "by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The first line of Lorem Ipsum, Lorem ipsum dolor sit amet..,", username: "@user2" },

  { name: "Simran Narang", image: avathar, review: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet..,", username: "@simrannaranggg" },

  { name: "User 3", image: avathar, review: "Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,", username: "@user3" },

  { name: "User 4", image: avathar, review: "or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,", username: "@user4" },

  { name: "User 5", image: avathar, review: "or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,", username: "@user5" },

  { name: "User 1", image: avathar, review: " but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", username: "@user1" },

  { name: "User 2", image: avathar, review: "or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,", username: "@user2" },

  { name: "Simran Narang", image: avathar, review: "or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,", username: "@simrannaranggg" },

  { name: "User 3", image: avathar, review: "or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,", username: "@user3" },

  { name: "User 4", image: avathar, review: "or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,", username: "@user4" },

  { name: "User 5", image: avathar, review: "or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,", username: "@user5" },
];

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px", // Keeps slides centered
    arrows: true,
    focusOnSelect: true,
    beforeChange: (_, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 5, centerPadding: "30px" } },
      { breakpoint: 768, settings: { slidesToShow: 5, centerPadding: "20px" } },
      { breakpoint: 600, settings: { slidesToShow: 3, centerPadding: "0px" } },
    ],
  };
  

  return (
    <div className="testimonial-container">
      <h2>What Our <span>Customers</span> Have To Say</h2>

      {/* Avatar Slider */}
      <Slider {...settings} className="testimonial-slider" ref={sliderRef}>
        {testimonials.map((testimonial, index) => {
          let slideClass = "testimonial-card";

          // Handle circular indexing for proper scaling
          const totalSlides = testimonials.length;
          const leftIndex = (currentSlide - 1 + totalSlides) % totalSlides;
          const rightIndex = (currentSlide + 1) % totalSlides;
          const leftOuterIndex = (currentSlide - 2 + totalSlides) % totalSlides;
          const rightOuterIndex = (currentSlide + 2) % totalSlides;

          if (index === currentSlide) {
            slideClass += " active"; // Center slide
          } else if (index === leftIndex || index === rightIndex) {
            slideClass += " adjacent"; // Left & Right of center
          } else if (index === leftOuterIndex || index === rightOuterIndex) {
            slideClass += " outer"; // Further left & right
          }

          return (
            <div key={index} className={slideClass}>
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
            </div>
          );
        })}
      </Slider>



      {/* Dynamic Review Content */}
      <div className="testimonial-content">
        <p className="stars"><img src={starrating} alt="" /></p>
        <p className="review-text">{testimonials[currentSlide]?.review}</p>
        <p className="author">— {testimonials[currentSlide]?.name}</p>
      </div>
    </div>
  );
};

export default TestimonialSlider;
