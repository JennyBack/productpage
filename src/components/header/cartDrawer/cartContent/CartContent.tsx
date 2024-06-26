import React from 'react';
import { Product } from '../../../../types';
import EmptyCart from './emptyCart/EmptyCart';

import CartListItem from './cartListItem/CartListItem';
import { CartContext } from '../../../../App';
import CartSummary from './cartSummary/CartSummary';
import DiscountInputField from './discountInputField/DiscountInputField';
import PaymentOptionsDisplay from './paymentOptionsDisplay/PaymentOptionsDisplay';
import styles from './CartContent.module.css';

type CartProps = {
    currency: string;
    onRemoveFromCart: (item: Product) => void;
    onClose: () => void;
};

const CartContent = ({ currency, onRemoveFromCart, onClose }: CartProps) => {
    const cart = React.useContext(CartContext);

    let cartItems = cart && cart.cartItems;
    let productQuantity = cart && cart.productQuantity;

    let totalItemCost =
        cartItems && cartItems.length > 0 ? cartItems[0].price * cartItems[0].quantity : 0;

    //TODO: calculate properly
    let totalCartCost = totalItemCost;

    return (
        <div className={styles.cartContentWrapper}>
            {cartItems != null && cartItems.length > 0 ? (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <ul>
                        {cartItems.map((item, index) => (
                            <CartListItem
                                key={index}
                                item={item}
                                currency={currency}
                                onRemoveFromCart={(item) => onRemoveFromCart(item)}
                            />
                        ))}
                    </ul>
                    <DiscountInputField />
                    <CartSummary
                        totalCartCost={totalCartCost}
                        totalItemCost={totalItemCost}
                        currency={currency}
                    />
                    <PaymentOptionsDisplay />
                </div>
            ) : (
                <EmptyCart onClose={onClose} />
            )}
        </div>
    );
};

export default CartContent;
