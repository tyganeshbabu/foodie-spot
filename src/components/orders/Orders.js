import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getOrders } from '../../actions/orders';
import formatDate from '../../utils/formatDate';
import { Link } from 'react-router-dom';
const Orders = ({ getOrders, orders: { orders } }) => {
    useEffect(() => {
        getOrders();
    }, [getOrders]);

    return (
        <main role='main' className='container-fluid home-container'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="past-order-account-page-right p-4 h-100">
                            <div className="tab-content" id="myTabContent">
                                <div
                                    className="tab-pane fade active show"
                                    id="orders"
                                    role="tabpanel"
                                    aria-labelledby="orders-tab"
                                >
                                    {(orders.length) ? <h4 className="font-weight-bold mt-0 mb-4">Past Orders</h4> : null}
                                    {(orders.length) ? orders.map((data, i) => <div key={i} className="bg-white card mb-4 order-list shadow-sm border-0">
                                        <div className="gold-members">
                                            <div className="media">
                                                <div className="media-body">

                                                    <span className="float-right text-info"
                                                    >Delivered on {formatDate(data.createdAt)}
                                                        <i className="icofont-check-circled text-success"></i
                                                        ></span>
                                                    <h5 className="mb-2">ORDER #{data.orderId}</h5>
                                                    <p className="text-dark">
                                                        {data.products.map((product, i, arr) => {
                                                            return <span key={i}> {product.title} x {product.unit}{(arr.length - 1 !== i) ? ',' : ''}</span>

                                                        })}
                                                    </p>
                                                    <hr />
                                                    <p className="mb-0 text-black pt-2 h5">
                                                        <span className="text-black font-weight-bold">
                                                            Total Paid:</span
                                                        >
                                                        <span className="h3 font-weight-bold">&#8377;{data.total['$numberDecimal']}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)

                                        : <><div className="h1 text-center mt-5 text-secondary">No Orders Found</div>
                                            <div className="text-center h3">
                                                <Link to='/products'>Click here to Order</Link>
                                            </div></>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

const mapStateToProps = (state) => ({
    orders: state.orders
});


export default connect(mapStateToProps, { getOrders })(Orders)
