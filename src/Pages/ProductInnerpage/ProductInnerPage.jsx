import React, { useEffect, useState } from 'react'
import TopHeader from "../../Components/TopHeader/Topheader";
import NavBar from "../../Components/NavBar/NavBar";
import ProductInnerproduct from '../../Components/ProductInner/ProductInner';
import Testimonial from "../../Components/Testimonial/Testimonial";
import Footer from "../../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import "./ProductInnerPage.css";
import { getSingleProduct } from '../../services/productApiServices';



export default function ProductInner() {

  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(()=>{
    if(id){
      getSingleProduct(id,setProduct)
    }
  },[id])

  return (
    <>
      <div className="product-inner-page">
        <TopHeader />
        <NavBar />
        <div className="product-inner-wrap">
          <div className="wrapper">
            <div className="product-inner-sec">
              <ProductInnerproduct product={product} />
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
