import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addItemToCart, addProductToCart, removeProductFromCart } from '../../actions/products';

const AddToCart = ({ addProductToCart, addItemToCart, removeProductFromCart, productId, products: { products, addedItems, total } }) => {
    // let addBtn = products.find((p) => p['_id'] === productId);
    console.log(addedItems);
    console.log(total);
    let findProduct = addedItems.find(f => f['_id'] === productId);
    console.log(findProduct);
    const [unitCounter, setUnitCounter] = useState(0);

    useEffect(() => {
        console.log(unitCounter);
        console.log(productId);
        if (unitCounter > 0) {
            addProductToCart({ 'id': productId, 'unit': unitCounter });
        }
        console.log('called again');
    }, [unitCounter, productId, addProductToCart]);
    const addItem = () => {
        setUnitCounter(1);
        // addItemToCart(productId);
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
export default connect(mapStateToProps, { addItemToCart, addProductToCart, removeProductFromCart })(AddToCart);
