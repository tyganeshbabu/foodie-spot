import React from 'react';
import { Link } from 'react-router-dom';
const CartEmpty = () => {
    return (
        <section className="p-5 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 ">
                        <div className="col-sm-12 text-center">
                            <div className="mb-2">
                                <div className="h1 text-center text-secondary">Cart Empty</div>
                            </div>
                            <div className="">
                                <Link to="/products" className="link_404">Add Items</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default CartEmpty
