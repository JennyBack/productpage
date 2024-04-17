import { Product } from '../../../types';
import { IconButton } from '../../buttons/ButtonComponents';
import styles from './Cart.module.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

type CartProps = {
    cartItems: Product[];
    currency: string;
    numberOfProducts: number;
    onRemoveFromCart: (item: Product) => void;
    onClose: () => void;
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

const EmptyCart = ({ onClose }: any) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '10rem 1rem'
            }}
        >
            <ShoppingCartIcon style={{ color: 'var(--icons--)' }} />
            <p style={{ textAlign: 'center' }} className={'paragraph-regular'}>
                Your cart is empty. <br /> Added items will appear here.
            </p>
            <button onClick={onClose} style={CheckoutButtonStyle()}>
                <h5 style={{ color: 'white' }} className={'heading-h5-regular'}>
                    Close cart
                </h5>
            </button>
        </div>
    );
};

type CartListItemProps = {
    item: any;
    index: number;
    currency: string;
    numberOfProducts: number;
    totalItemCost: number;
    onRemoveFromCart: (item: any) => void;
};

const CartListItem = ({
    item,
    index,
    currency,
    numberOfProducts,
    totalItemCost,
    onRemoveFromCart
}: CartListItemProps) => {
    const handleRemoveItem = () => {
        onRemoveFromCart(item);
    };
    return (
        <li
            key={item}
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 3fr 1fr',
                padding: 0,
                margin: 0
            }}
        >
            <div
                style={{
                    placeSelf: 'start',

                    padding: '0.5rem'
                }}
            >
                <img
                    style={{
                        height: '100px',
                        width: 'auto',
                        maxWidth: '70px',
                        objectFit: 'cover',
                        overflow: 'hidden'
                    }}
                    src={item.images[0].src}
                />
            </div>
            <div
                style={{
                    justifySelf: 'start',
                    padding: '0.5rem'
                }}
            >
                <h3
                    style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}
                    className={'heading-h3-regular'}
                >
                    {item.title}
                </h3>
                <p className={'paragraph-regular'}>
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
            <div
                style={{
                    placeSelf: 'end'
                }}
            >
                <IconButton onClick={handleRemoveItem}>
                    <DeleteOutlineIcon className={styles.icon} />
                </IconButton>
            </div>
        </li>
    );
};

const Cart = ({ cartItems, currency, numberOfProducts, onRemoveFromCart, onClose }: CartProps) => {
    let totalItemCost =
        cartItems && cartItems.length > 0 ? cartItems[0].price * numberOfProducts : 0;

    console.log(numberOfProducts);

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
                                numberOfProducts={numberOfProducts}
                                totalItemCost={totalItemCost}
                                onRemoveFromCart={(item) => onRemoveFromCart(item)}
                            />
                        ))}
                    </ul>
                    <div>Order-details</div>
                    <button>Checkout</button>
                    <div>Payment Methods</div>
                </div>
            ) : (
                <EmptyCart onClose={onClose} />
            )}
        </div>
    );
};

export default Cart;
