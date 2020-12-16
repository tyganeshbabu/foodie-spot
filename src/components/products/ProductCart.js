import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AddToCart from './AddToCart';

const ProductCart = ({ product, products: { addedItems } }) => {
    const [unit, setUnit] = useState(0);
    console.log(product.imgurl);
    useEffect(() => {
        if (addedItems.length) {
            let obj = addedItems.find(p => p['_id'] === product['_id']);
            if (obj) {
                setUnit(obj.unit);
            }
        }
    }, [addedItems, product]);
    return (
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
                            <span>{product.unit}</span>
                        </div>
                        <div className='col-6'>
                            <p className='font-weight-bold product-title'>{product.title}</p>
                            <small className='text-muted h6'>&#8377;{product.unitprice['$numberDecimal']}</small>
                            <AddToCart productId={product['_id']} unit={unit} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    products: state.products
});

export default connect(mapStateToProps)(ProductCart)
