import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addProductToCart, removeProductFromCart } from '../../actions/products';

const AddToCart = ({ addProductToCart, removeProductFromCart, productId, products: { products, addedItems, total } }) => {
    let findProduct = addedItems.find(f => f['_id'] === productId);
    const [unitCounter, setUnitCounter] = useState(0);

    useEffect(() => {
        if (unitCounter > 0) {
            addProductToCart({ 'id': productId, 'unit': unitCounter });
        }
    }, [unitCounter, productId, addProductToCart]);

    const addItem = () => {
        setUnitCounter(1);
    };

    const removeItem = (event) => {
        if (unitCounter === 1) {
            removeProductFromCart({ 'id': productId });
        }
        setUnitCounter(unitCounter - 1);
        event.preventDefault();
    }

    const incrementItem = (event) => {
        setUnitCounter(unitCounter + 1);
        event.preventDefault();
    }

    return (
        <>{(!findProduct || findProduct.unit === 0) ?
            <>
                <button className='btn btn-primary btn-sm d-block mt-2' onClick={addItem}>Add</button>
            </> :
            <>
                <div className="quantity mt-2">
                    <a href="!#" className="quantity-minus" onClick={removeItem}><span>-</span></a>
                    <input name="quantity" disabled type="text" className="quantity-input text-muted" value={findProduct.unit} maxLength="2" autoComplete="off" />
                    <a href="!#" className="quantity-plus" onClick={incrementItem}><span>+</span></a>
                </div>

            </>}
        </>
    )
}

const mapStateToProps = (state) => ({
    products: state.products
});
export default connect(mapStateToProps, { addProductToCart, removeProductFromCart })(AddToCart);
