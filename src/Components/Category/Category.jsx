import React from 'react'
import men from "../../assets/images/men.jpg"
import women from "../../assets/images/women.jpg"
import "./Category.css"
export default function Category() {
    return (
        <>
            <div className="wrapper">
                <div className="category-cards">
                    <div className="cate-cards-row">
                        <div className="cate-cards">
                            <div className="cate-cards-image">
                                <img src={men} alt="" />
                            </div>
                            <div className="cate-content">
                                <h3>Men</h3>
                                <button className='secondry-btn'>Shop Now</button>
                            </div>
                        </div>
                        <div className="cate-cards">
                            <div className="cate-cards-image">
                                <img src={women} alt="" />
                            </div>
                            <div className="cate-content">
                                <h3>Women</h3>
                                <button className='secondry-btn'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
