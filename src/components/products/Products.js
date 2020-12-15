import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/products';
import AddToCart from './AddToCart';
const Products = ({ getProducts, products: { products } }) => {
    useEffect(() => {
        getProducts();
    }, [getProducts]);
    return (
        <><main role='main' className='container-fluid home-container'>
            <div className='row'>
                {(products.length) ?
                    products.map((product) =>
                        <div key={product['_id']} className='col-md-12 col-sm-12 mt-2 mb-2 col-lg-3'>
                            <div className='card shadow-sm border-0 rounded-0'>
                                <div className='card-body'>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <img
                                                className='card-img-top'
                                                src={product.imgurl}
                                                alt='Title'
                                            />
                                        </div>
                                        <div className='col-6'>
                                            <p className='font-weight-bold product-title'>{product.title}</p>
                                            <small className='text-muted h6'>&#8377;{product.unitprice['$numberDecimal']}</small>
                                            <AddToCart productId={product['_id']} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    : null}

            </div>
        </main>
        </>
    );
}
const mapStateToProps = (state) => ({
    products: state.products
});

export default connect(mapStateToProps, { getProducts })(Products);
