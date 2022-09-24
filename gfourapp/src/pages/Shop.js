import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from 'react-bootstrap/Button';

const Shop = () => {
  return (
    <div id = "shop" className = "py-5">
        {/* What's New Shop */}
        <div className = "container">
            <div className = "title text-center">
                <h2 className = "position-relative d-inline-block">What's New</h2><br />
                <h4 className = "position-relative d-inline-block">iPhone 14</h4><br />
                <h5 className = "position-relative d-inline-block">Big and Bigger</h5>
            </div>

                {/* TODO : CONVERT THIS TO A FOR LOOP ON EVERY ITEM IN THE DATABASE */}
                <div className = "shop-list mt-4 row gx-0 gy-3">
                    
                    {/*  FORMATE HERE
                        Item Information
                        Type :  Iphone14
                        Price : P56,990
                        Image : ../images/iphone-14.jpg

                        Repeat
                    */}
                    <div className = "col-md-6 col-lg-4 col-xl-3 p-2 best">
                        <div className = "shop-img position-relative">                            
                            <img src = {require("../images/iphone-14.jpg")} className = "w-100" />
                            
                        </div>
                        <div className = "text-center">
                            <p className = "text-capitalize my-1">iphone 14</p>
                            <span className = "fw-bold">From ₱56,990</span>
                            <br />
                            <Button className = "btn position-relative">
                                <ShoppingCartIcon> Add to Cart</ShoppingCartIcon>
                            </Button>

                        </div>
                    </div>
                    {/* END FORMAT HERE */}

                    <div className = "col-md-6 col-lg-4 col-xl-3 p-2 feat">
                        <div className = "shop-img position-relative">
                            <img src = {require( "../images/iphone-14-plus.jpg")} className = "w-100" />
                            
                        </div>
                        <div className = "text-center">
                        
                            <p className = "text-capitalize my-1">iphone 14 plus</p>
                            <span className = "fw-bold">From ₱63,990</span>
                            <br />
                            <Button type = "Button" className = "btn position-relative">
                                <ShoppingCartIcon> Add to Cart</ShoppingCartIcon>
                            </Button>
                        </div>
                    </div>

                    <div className = "col-md-6 col-lg-4 col-xl-3 p-2 new">
                        <div className = "shop-img position-relative">
                            <img src = {require( "../images/iphone-14-pro.jpg")} className = "w-100" />
                            
                        </div>
                        <div className = "text-center">
                            
                            <p className = "text-capitalize my-1">iphone 14 pro</p>
                            <span className = "fw-bold">From ₱70,990</span>
                            <br />
                            <Button type = "Button" className = "btn position-relative">
                                <ShoppingCartIcon> Add to Cart</ShoppingCartIcon>
                            </Button>
                        </div>
                    </div>

                    <div className = "col-md-6 col-lg-4 col-xl-3 p-2 best">
                        <div className = "shop-img position-relative">
                            <img src = {require( "../images/iphone-14-pro-max.jpg")} className = "w-100" />
                        
                        </div>
                        <div className = "text-center"><br />
                        
                            <p className = "text-capitalize my-1">iphone 14 pro max</p>
                            <span className = "fw-bold">From ₱77,990</span>
                            <br />
                            <Button type = "Button" className = "btn position-relative">
                                <ShoppingCartIcon> Add to Cart</ShoppingCartIcon>
                            </Button>
                        </div>
                    </div>


                    
                </div>
        </div>
        {/* Iphone 13 */}
        <div></div>
        {/* Iphone 12 */}
        <div></div>
        {/* Iphone 11 */}
        <div></div>
        </div>
    )
}

export default Shop