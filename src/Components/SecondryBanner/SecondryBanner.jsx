import React from 'react'
import secondryvideo from '../../assets/images/secondry-banner.mp4'
import './SecondryBanner.css'



export default function SecondryBanner() {
    return (
        <>
            <div className="secondry-banner">
                <div className="secondry-banner-video">
                    <video autoPlay loop muted playsInline>
                        <source src={secondryvideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="secondry-banner-content">
                    <h2>Get the best deals on your favorite products</h2>
                    <button className="secondry-btn">Shop Now</button>
                </div>
            </div>
        </>
    )
}
