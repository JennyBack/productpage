import React from 'react';
import { Product } from '../../../types';
import EmptyCart from './EmptyCart';

import CartListItem from './ProductList';
import { CartContext } from '../../../App';

type CartProps = {
    currency: string;
    onRemoveFromCart: (item: Product) => void;
    onClose: () => void;
};

const Cart = ({ currency, onRemoveFromCart, onClose }: CartProps) => {
    const cart = React.useContext(CartContext);

    let cartItems = cart && cart.cartItems;
    let productQuantity = cart && cart.productQuantity;

    let totalItemCost =
        cartItems && cartItems.length > 0 && productQuantity != null
            ? cartItems[0].price * productQuantity
            : 0;

    return (
        <div
            style={{
                margin: 'auto',
                paddingRight: '10%',
                alignSelf: 'center',
                height: '100%',
                width: '100%'
            }}
        >
            {cartItems != null && cartItems.length > 0 ? (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <ul style={{ display: 'grid', gridTemplateRows: '1fr' }}>
                        {cartItems.map((item, index) => (
                            <CartListItem
                                key={item.quantity.toString()}
                                item={item}
                                index={index}
                                currency={currency}
                                numberOfProducts={item.quantity}
                                totalItemCost={totalItemCost}
                                onRemoveFromCart={(item) => onRemoveFromCart(item)}
                            />
                        ))}
                    </ul>
                    <div style={{ backgroundColor: 'lightblue' }}>
                        Discounts:
                        <div>Add coupon code here:</div>
                    </div>
                    <button style={{ backgroundColor: 'lightgrey' }}>Checkout</button>
                    <div>Payment Methods</div>
                </div>
            ) : (
                <EmptyCart onClose={onClose} />
            )}
        </div>
    );
};

export default Cart;
