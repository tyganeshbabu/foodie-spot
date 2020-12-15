import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const Cart = () => {
    return (
        <main role="main" className="container-fluid bill-container">
            <div className="wrap cf shadow-sm">
                <h1 className="projTitle">BILLING DETAILS</h1>
                <div className="heading cf">
                    <h1>My Cart</h1>
                    <Link to="/products" className="continue">Continue to Add Item</Link>
                    {/* <a href="#" className="continue">Continue to Add Item</a> */}
                </div>
                <div className="cart">
                    <ul className="cartWrap">
                        <li className="items odd">
                            <div className="infoWrap">
                                <div className="cartSection">
                                    <img src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg" alt="" className="itemImg" />

                                    <h3>Item Name 1</h3>

                                    <p>
                                        <input type="text" className="qty" placeholder="3" /> x $5.00
                </p>

                                </div>

                                <div className="prodTotal cartSection">
                                    <p>$15.00</p>
                                </div>
                                <div className="cartSection removeWrap">
                                    <a href="!#" className="remove">x</a>
                                </div>
                            </div>
                        </li>
                        <li className="items even">
                            <div className="infoWrap">
                                <div className="cartSection">
                                    <img src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg" alt="" className="itemImg" />

                                    <h3>Item Name 1</h3>

                                    <p>
                                        <input type="text" className="qty" placeholder="3" /> x $5.00
                </p>

                                </div>

                                <div className="prodTotal cartSection">
                                    <p>$15.00</p>
                                </div>
                                <div className="cartSection removeWrap">
                                    <a href="!#" className="remove">x</a>
                                </div>
                            </div>
                        </li>

                        <li className="items odd">
                            <div className="infoWrap">
                                <div className="cartSection">
                                    <img src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg" alt="" className="itemImg" />
                                    <h3>Item Name 1</h3>

                                    <p>
                                        <input type="text" className="qty" placeholder="3" /> x $5.00
                </p>

                                </div>

                                <div className="prodTotal cartSection">
                                    <p>$15.00</p>
                                </div>
                                <div className="cartSection removeWrap">
                                    <a href="!#" className="remove">x</a>
                                </div>
                            </div>
                        </li>
                        <li className="items even">
                            <div className="infoWrap">
                                <div className="cartSection info">
                                    <img src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg" alt="" className="itemImg" />

                                    <h3>Item Name 1</h3>

                                    <p>
                                        <input type="text" className="qty" placeholder="3" /> x $5.00
                </p>


                                </div>

                                <div className="prodTotal cartSection">
                                    <p>$15.00</p>
                                </div>

                                <div className="cartSection removeWrap">
                                    <a href="!#" className="remove">x</a>
                                </div>
                            </div>

                        </li>


                    </ul>
                </div>

                <div className="subtotal cf">
                    <ul className="pr-5">
                        <li className="totalRow">
                            <span className="label">Subtotal</span><span className="value">$35.00</span>
                        </li>

                        <li className="totalRow">
                            <span className="label">Shipping</span><span className="value">$5.00</span>
                        </li>

                        <li className="totalRow">
                            <span className="label">Tax</span><span className="value">$4.00</span>
                        </li>
                        <li className="totalRow final">
                            <span className="label">To Pay</span><span className="value">$44.00</span>
                        </li>
                        <li className="totalRow checkout-btn">
                            <a href="!#" className="btn continue">Checkout</a>
                        </li>
                    </ul>
                </div>
            </div>

        </main>
    )
}

const mapStateToProps = (state) => ({
    products: state.products
});

export default connect(mapStateToProps)(Cart);
