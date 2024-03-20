import { Product } from '../../../types';
import styles from './Cart.module.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

type CartProps = {
    cartItems: Product[];
    currency: string;
    numberOfProducts: number;
    onRemoveFromCart: (item: Product) => void;
};

const CheckoutButtonStyle = (disableCartButton?: boolean) => {
    return {
        border: 'none',
        padding: '17px 77px',
        font: 'inherit',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '12px auto',
        width: '100%',
        borderRadius: '10px',
        backgroundColor: !disableCartButton ? '#77AA9E' : 'lightgray',
        boxShadow: '0px 8px 10px 0px #FFEDE0',
        color: 'white'
    };
};

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

const Cart = ({ cartItems, currency, numberOfProducts, onRemoveFromCart }: CartProps) => {
    let totalItemCost = cartItems.length > 0 && cartItems[0].price * numberOfProducts;

    return (
        <div className={styles.cartWrapper}>
            <h4>Cart</h4>
            {cartItems.length > 0 ? (
                cartItems.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            margin: 'auto'
                        }}
                    >
                        <div
                            style={{
                                height: '50px',
                                width: '50px',
                                borderRadius: '4px',
                                overflow: 'hidden'
                            }}
                        >
                            <img
                                style={{ height: '100%', width: 'auto', objectFit: 'cover' }}
                                src={item.images[0].src}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <p className={styles.cartProductInfo}>{item.title}</p>
                            <p className={styles.cartProductInfo}>
                                {item.price}
                                {currency}
                                {numberOfProducts > 1 ? (
                                    <>
                                        X {numberOfProducts} {totalItemCost}
                                        {currency}
                                    </>
                                ) : null}
                            </p>
                        </div>
                        <button style={IconButtonStyle} onClick={() => onRemoveFromCart(item)}>
                            <DeleteOutlineIcon className={styles.icon} />
                        </button>
                    </div>
                ))
            ) : (
                <div className={styles.cartEmpty}>
                    <p>Your cart is empty</p>
                </div>
            )}
            <button style={CheckoutButtonStyle()}>Check out</button>
        </div>
    );
};

export default Cart;
