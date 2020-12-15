import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CartBill from './CartBill';
import CartEmpty from './CartEmpty';
import { submitProducts } from '../../actions/products';

const Cart = ({ submitProducts, products: { addedItems, total } }) => {
    const calculateTax = () => {
        return (total * (5 / 100)).toFixed(2);
    }

    const calculateTotal = () => {
        return (total + (total * (5 / 100)) + 25).toFixed(2);
    }

    const submitOrder = (event) => {
        let products = addedItems.map(({ title, unit }) => ({ title, unit }));
        submitProducts({ 'products': products, 'total': calculateTotal() });
        event.preventDefault();
    }
    return (
        <>
            {(addedItems.length) ? <main role="main" className="container-fluid bill-container">
                <div className="wrap cf shadow-sm">
                    <h1 className="projTitle">BILLING DETAILS</h1>
                    <div className="heading cf">
                        <h1>My Cart</h1>
                        <Link to="/products" className="continue">Continue to Add Item</Link>
                        {/* <a href="#" className="continue">Continue to Add Item</a> */}
                    </div>
                    <div className="cart">
                        <ul className="cartWrap">
                            <CartBill />
                        </ul>
                    </div>

                    <div className="subtotal cf">
                        <ul className="pr-5">
                            <li className="totalRow">
                                <span className="label">Subtotal</span><span className="value">&#8377;{total.toFixed(2)}</span>
                            </li>

                            <li className="totalRow">
                                <span className="label">Delivery Fee</span><span className="value">&#8377;25.00</span>
                            </li>

                            <li className="totalRow">
                                <span className="label">Tax (5%)</span><span className="value">&#8377;{calculateTax()}</span>
                            </li>
                            <li className="totalRow final">
                                <span className="label">To Pay</span><span className="value">&#8377;{calculateTotal()}</span>
                            </li>
                            <li className="totalRow checkout-btn mt-5">
                                <a href="!#" className="btn continue p-3" onClick={submitOrder}>Submit Order</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </main>
                :
                <CartEmpty />}
        </>
    )
}

const mapStateToProps = (state) => ({
    products: state.products
});

export default connect(mapStateToProps, { submitProducts })(Cart);
