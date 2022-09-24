import React from 'react'
import '../css/styles.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// For Adjusting Order
const OnFormChange = () =>{

};

// For Checking Out
const OnFormSubmit = () =>{

};
const Cart = () => {
  return (
    <div>
        <div className ="bg-light py-3">
            <div className ="container">
                <div className ="row">
                <div className ="col-md-12 mb-0"><a href="index.html">Home</a> <span className ="mx-2 mb-0">/</span> <strong className ="text-black">Cart</strong></div>
                </div>
            </div>
        </div>
        
        <div className ="bg-light py-3">
            <div className ="container">
                <div className ="row">
                <div className ="col-md-12 mb-0"><a href="index.html">Home</a> <span className ="mx-2 mb-0">/</span> <strong className ="text-black">Cart</strong></div>
                </div>
            </div>
        </div>

        <div className ="site-section">
            <div className ="container">
                <div className ="row mb-5">
                <form className ="col-md-12" method="post">
                    <div className ="site-blocks-table">
                    <table className ="table table-bordered">
                        <thead>
                        <tr>
                            <th className ="product-thumbnail">Image</th>
                            <th className ="product-name">Product</th>
                            <th className ="product-price">Price</th>
                            <th className ="product-quantity" style={{width: '20%'}}>Quantity</th>
                            <th className ="product-total">Total</th>
                            <th className ="product-remove">Remove</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            {/* Image */}
                            <td className ="product-thumbnail">
                            <img src={require("../images/compare_iphone13_pro_max_alpine_green.jpg")} alt="../image" className ="img-fluid" />
                            </td>
                            {/* Item Name */}
                            <td className ="product-name">
                            <h2 className ="h5 text-black">iPhone 13 Pro Max</h2>
                            </td>
                            {/* Price */}
                            <td>₱75,990</td>
                            {/* Quatity */}
                            <td>
                                <div className ="input-group-prepend justify-content-center">
                                {/*ADD to INPUT value="1" once database is connected, check and make sure it cannot go 0 AND below*/}
                                <input type="number" className ="form-control text-center" placeholder="" onChange={OnFormChange} aria-label="Example text with button addon" aria-describedby="button-addon1" />                                    
                                </div>
                            <div className ="cartCheckOut input-group mb-3 justify-content-center">
                            </div>

                            </td>
                            <td>₱75,990</td>
                            <td><a href="#" className ="btn btn-primary btn-sm">X</a></td>
                        </tr>

                        
                        </tbody>
                    </table>
                    </div>
                </form>
                </div>

                <div className ="row">
                <div className ="col-md-6">
                
                    <div className ="row">
                    <div className ="col-md-12">
                        <label className ="text-black h4">Coupon</label>
                        <p>Enter your coupon code if you have one.</p>
                    </div>
                    <div className ="col-md-8 mb-3 mb-md-0">
                        <input type="text" className ="form-control py-3" id="coupon" placeholder="Coupon Code" />
                    </div>
                    <div className ="col-md-4">
                        <button className ="btn btn-primary btn-sm">Apply Coupon</button>
                    </div>
                    </div>
                </div>
                <div className ="col-md-6 pl-5">
                    <div className ="row justify-content-end">
                    <div className ="col-md-7">
                        <div className ="row">
                        <div className ="col-md-12 text-right border-bottom mb-5">
                            <h3 className ="text-black h4 text-uppercase">Cart Totals</h3>
                        </div>
                        </div>
                        <div className ="row mb-3">
                        <div className ="col-md-6">
                            <span className ="text-black">Subtotal</span>
                        </div>
                        <div className ="col-md-6 text-right">
                            <strong className ="text-black">₱75,990</strong>
                        </div>
                        </div>
                        <div className ="row mb-5">
                        <div className ="col-md-6">
                            <span className ="text-black">Total</span>
                        </div>
                        <div className ="col-md-6 text-right">
                            <strong className ="text-black">₱75,990</strong>
                        </div>
                        </div>

                        <div className ="row">
                        <div className ="col-md-12">
                            <button className ="btn btn-primary btn-lg py-3 btn-block" onClick={OnFormSubmit}>Proceed To Checkout</button>
                            
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Cart