import React from 'react'
import Slider from "react-slick";
import "./BestSeller.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Perfumvideo from '../../assets/images/perfume-vid.mp4'
import Perfumvideo1 from '../../assets/images/perfume-vid1.mp4'
import vidcontimg from  '../../assets/images/perfume.png'  


const Bestseller = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="wrapper">
            <div className="product-slider">
                <Slider {...settings}>
                    <div>
                        <div className="best-sell-card">
                            <div className="video-container">
                                <video width="100%" height="450px" autoPlay loop muted playsInline>
                                    <source src={Perfumvideo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="video-content">
                                <div className="video-content-row">
                                    <div className="video-cont-col1">
                                        <img src={vidcontimg} alt="" />
                                    </div>
                                    <div className="video-cont-col2">
                                        <h4>Amber Wood Eau de Parfum Perfume 100ML For Unisex</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="best-sell-card">
                            <div className="video-container">
                                <video width="100%" height="450px" autoPlay loop muted playsInline>
                                    <source src={Perfumvideo1} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="video-content">
                                <div className="video-content-row">
                                    <div className="video-cont-col1">
                                        <img src={vidcontimg} alt="" />
                                    </div>
                                    <div className="video-cont-col2">
                                        <h4>Amber Wood Eau de Parfum Perfume 100ML For Unisex</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="best-sell-card">
                            <div className="video-container">
                                <video width="100%" height="450px" autoPlay loop muted playsInline>
                                    <source src={Perfumvideo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="video-content">
                                <div className="video-content-row">
                                    <div className="video-cont-col1">
                                        <img src={vidcontimg} alt="" />
                                    </div>
                                    <div className="video-cont-col2">
                                        <h4>Amber Wood Eau de Parfum Perfume 100ML For Unisex</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="best-sell-card">
                            <div className="video-container">
                                <video width="100%" height="450px" autoPlay loop muted playsInline>
                                    <source src={Perfumvideo1} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="video-content">
                                <div className="video-content-row">
                                    <div className="video-cont-col1">
                                        <img src={vidcontimg} alt="" />
                                    </div>
                                    <div className="video-cont-col2">
                                        <h4>Amber Wood Eau de Parfum Perfume 100ML For Unisex</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="best-sell-card">
                            <div className="video-container">
                                <video width="100%" height="450px" autoPlay loop muted playsInline>
                                    <source src={Perfumvideo1} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="video-content">
                                <div className="video-content-row">
                                    <div className="video-cont-col1">
                                        <img src={vidcontimg} alt="" />
                                    </div>
                                    <div className="video-cont-col2">
                                        <h4>Amber Wood Eau de Parfum Perfume 100ML For Unisex</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Bestseller;
