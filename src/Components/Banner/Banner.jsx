import React from 'react'
import './Banner.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner-2.jpg'
import banner3 from '../../assets/images/banner3.jpg'


const Banner = () => {
    const settings = {  
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="banner-sec">
            <Slider {...settings}>
                <div>
                    <div className="banner-image">
                        <img src={banner1} alt="banner1" />
                    </div>
                </div>
                <div>
                    <div className="banner-image">
                        <img src={banner2} alt="banner1" />
                    </div>
                </div>
                <div>
                    <div className="banner-image">
                        <img src={banner3} alt="banner1" />
                    </div>
                </div>
            </Slider>
            <div className="banner-content">
                <h1>The Experience of Wearing Luxurious Perfume</h1>
                <button className='secondry-btn'>Shop Now</button>
            </div>
        </div>
    );
};

export default Banner;
