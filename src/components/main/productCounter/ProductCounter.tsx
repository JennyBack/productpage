import React, { useContext } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext, CartContextType } from '../../../App';

const IconButtonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    margin: '0.3em',
    padding: 0,
    font: 'inherit',
    borderRadius: 0,
    height: '24px',
    width: '24px',
    cursor: 'pointer'
};

const CounterStyle = {
    fontFamily: 'Kumbh Sans',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
    letterSpacing: '1.28px'
};

const AddToCartButtonStyle = (disableCartButton?: boolean, isMobile?: boolean) => {
    return {
        border: 'none',
        padding: '1rem',
        font: 'inherit',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        width: isMobile ? '100%' : '70%',
        borderRadius: '10px',
        backgroundColor: !disableCartButton ? '#77AA9E' : 'lightgray',
        boxShadow: '0px 8px 10px 0px #FFEDE0'
    };
};

type ProductCounterProps = {
    productId: number;
    onAddToCart: (productId: number) => void;
    label: string;
    isMobile: boolean;
};

const ProductCounter = ({ productId, onAddToCart, label, isMobile }: ProductCounterProps) => {
    const cart = React.useContext<CartContextType | null>(CartContext);

    let numberOfItemsInCart = cart && cart.cartItems.length;
    let productQuantity = cart && cart.productQuantity;
    let onChangeProductQuantity = cart && cart.onChangeProductQuantity;

    const handleChangeQuantity = (add: boolean) => {
        if (onChangeProductQuantity != null) {
            onChangeProductQuantity(add);
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                flexDirection: isMobile ? 'column' : 'row',
                padding: '10px 24px '
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: isMobile ? '100%' : '50%',
                    flexWrap: 'nowrap',
                    margin: isMobile ? '0 0 12px 0' : '10px',
                    backgroundColor: '#F7F8FD',
                    padding: '1rem'
                }}
            >
                <button style={IconButtonStyle} onClick={() => handleChangeQuantity(false)}>
                    <RemoveIcon sx={{ color: 'rgb(119, 170, 158)' }} />
                </button>
                <p style={CounterStyle}>{productQuantity}</p>
                <button style={IconButtonStyle} onClick={() => handleChangeQuantity(true)}>
                    <AddIcon sx={{ color: 'rgb(119, 170, 158)' }} />
                </button>
            </div>
            <button
                style={AddToCartButtonStyle(
                    numberOfItemsInCart !== null && numberOfItemsInCart > 0,
                    isMobile
                )}
                onClick={() => {
                    onAddToCart(productId);
                }}
            >
                <ShoppingCartIcon sx={{ color: 'white', marginRight: '12px' }} />
                <p
                    style={{
                        color: 'white',
                        fontFamily: 'Kumbh Sans',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: 'normal'
                    }}
                >
                    {numberOfItemsInCart != null && numberOfItemsInCart > 0
                        ? 'Item added'
                        : `${label}`}
                </p>
            </button>
        </div>
    );
};

export default ProductCounter;
