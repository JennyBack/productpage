import React from 'react';
import { Product } from '../../../types';
import EmptyCart from './EmptyCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import CartListItem from './ProductList';
import { CartContext } from '../../../App';

type CartProps = {
    currency: string;
    onRemoveFromCart: (item: Product) => void;
    onClose: () => void;
};

const Cart = ({ currency, onRemoveFromCart, onClose }: CartProps) => {
    const { cartItems, productQuantity } = React.useContext(CartContext);

    let totalItemCost =
        cartItems && cartItems.length > 0 ? cartItems[0].price * productQuantity : 0;

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
            {cartItems.length > 0 ? (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <ul style={{ display: 'grid', gridTemplateRows: '1fr' }}>
                        {cartItems.map((item, index) => (
                            <CartListItem
                                key={item.title}
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
                        Quantity:
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',

                                flexWrap: 'nowrap',

                                backgroundColor: '#F7F8FD',
                                padding: '0.5rem'
                            }}
                        >
                            <button>
                                <RemoveIcon sx={{ color: 'rgb(119, 170, 158)' }} />
                            </button>
                            <p>{productQuantity}</p>
                            <button>
                                <AddIcon sx={{ color: 'rgb(119, 170, 158)' }} />
                            </button>
                        </div>
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
