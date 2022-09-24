import React from 'react'
import Image from 'react-bootstrap/Image';
import '../css/styles.css';
import Shop from './Shop';

const Header = () => {
  return (
    <div>
        <div id ="header" className = "header vh-100 carousel slide" data-bs-ride = "carousel">
            <div className = "container h-100 d-flex align-items-center carousel-inner">
                <div className = "text-center carousel-item active">
                    <h2 className = "text-capitalize text-white">iphone 14 Pro </h2 >
                    <h1 className = "text-uppercase py-2 fw-bold text-white">pro.beyond</h1>
                    <a href = "#" className = "btn mt-3 text-uppercase">pre-order</a>
                </div>
                <div className = "text-center carousel-item">
                    <h2 className = "text-capitalize text-white">best price &amp; offer</h2>
                    <h1 className = "text-uppercase py-2 fw-bold text-white">new series</h1>
                    <a href = "#" className = "btn mt-3 text-uppercase">order now</a>
                </div>
            </div>

            <button className = "carousel-control-prev" type = "button" data-bs-target="#header" data-bs-slide = "prev">
                <span className = "carousel-control-prev-icon"></span>
            </button>
            <button className = "carousel-control-next" type = "button" data-bs-target="#header" data-bs-slide = "next">
                <span className = "carousel-control-next-icon"></span>
            </button>
        </div>
    </div>
  )
}

export default Header