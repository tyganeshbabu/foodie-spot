import React from 'react';
import { connect } from 'react-redux';
import AddToCart from '../products/AddToCart';
import { removeProductFromCart } from '../../actions/products';

const CartBill = ({ removeProductFromCart, products: { addedItems } }) => {
    const removeItemFromCart = (productId, event) => {
        removeProductFromCart({ 'id': productId });
        event.preventDefault();
    }

    return (
        addedItems.map((product, i) =>
            <li key={i} className="items even">
                <div className="infoWrap">
                    <div className="cartSection w-75">
                        <img
                            className='itemImg'
                            src={product.imgurl}
                            alt='Title'
                        />
                        <h3>{product.title}</h3>
                        <AddToCart productId={product['_id']} unit={product.unit} />

                    </div>

                    <div className="prodTotal cartSection">
                        <p>&#8377;{product.unit * parseInt(product.unitprice['$numberDecimal'])}</p>
                    </div>
                    <div className="cartSection removeWrap">
                        <a href="!#" className="remove" onClick={(event) => removeItemFromCart(product['_id'], event)}>x</a>
                    </div>
                </div>
            </li>
        )


    )
}
const mapStateToProps = (state) => ({
    products: state.products
});
export default connect(mapStateToProps, { removeProductFromCart })(CartBill)
