import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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

const AddToCartButtonStyle = (disableCartButton?: boolean) => {
    return {
        border: 'none',
        padding: 0,
        font: 'inherit',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        width: '100%',
        borderRadius: '10px',
        backgroundColor: !disableCartButton ? '#77AA9E' : 'lightgray',
        boxShadow: '0px 8px 10px 0px #FFEDE0'
    };
};

type ProductCounterProps = {
    productId: number;
    numberOfProducts: number;
    onAddProduct: () => void;
    onRemoveProduct: () => void;
    onAddToCart: (productId: number) => void;
    label: string;
    numberOfItemsInCart: number;
};

const ProductCounter = ({
    productId,
    numberOfProducts,
    onAddProduct,
    onRemoveProduct,
    onAddToCart,
    label,
    numberOfItemsInCart
}: ProductCounterProps) => {
    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                padding: '10px 24px '
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    margin: '0 0 12px 0',
                    backgroundColor: '#F7F8FD'
                }}
            >
                <button style={IconButtonStyle} onClick={onRemoveProduct}>
                    <RemoveIcon sx={{ color: 'rgb(119, 170, 158)' }} />
                </button>
                <p style={CounterStyle}>{numberOfProducts}</p>
                <button style={IconButtonStyle} onClick={onAddProduct}>
                    <AddIcon sx={{ color: 'rgb(119, 170, 158)' }} />
                </button>
            </div>
            <button
                style={AddToCartButtonStyle(numberOfItemsInCart > 0)}
                onClick={() => {
                    onAddToCart(productId);
                }}
                disabled={numberOfItemsInCart > 0}
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
                    {label}
                </p>
            </button>
        </div>
    );
};

export default ProductCounter;
