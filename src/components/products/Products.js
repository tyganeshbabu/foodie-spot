import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/products';
import ProductCart from './ProductCart';
const Products = ({ getProducts, products: { products } }) => {
    useEffect(() => {
        getProducts();
    }, [getProducts]);
    return (
        <main role='main' className='container-fluid home-container'>
            <div className='row'>
                {(products.length) ?
                    products.map((product, i) =>
                        <ProductCart key={i} product={product} />)
                    : null}

            </div>
        </main>
    );
}
const mapStateToProps = (state) => ({
    products: state.products
});

export default connect(mapStateToProps, { getProducts })(Products);
