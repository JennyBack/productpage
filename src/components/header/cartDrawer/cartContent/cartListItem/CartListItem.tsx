import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '../../../../buttons/ButtonComponents';
import styles from './CartListItem.module.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { CartContext } from '../../../../../App';
import React from 'react';
import { Product } from '../../../../../types';

type CartListItemProps = {
    item: Product;
    index: number;
    currency: string;
    numberOfProducts: number;
    totalItemCost: number;
    onRemoveFromCart: (item: any) => void;
};

type QuantityPickerProps = {
    item: Product;
};

const QuantityPicker = ({ item }: QuantityPickerProps) => {
    const cart = React.useContext(CartContext);
    let onChangeProductQuantity = cart && cart.onChangeProductQuantity;

    const handleChangeQuantity = (add: boolean) => {
        if (onChangeProductQuantity != null) {
            onChangeProductQuantity(add, item.id);
        }
    };
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'nowrap',
                width: '200px',
                height: '60px',
                border: '2px solid var(--lightgrey--)',
                borderRadius: '10px'
            }}
        >
            <button onClick={() => handleChangeQuantity(false)}>
                <RemoveIcon sx={{ color: 'rgb(119, 170, 158)' }} />
            </button>
            <p>{item.quantity}</p>
            <button onClick={() => handleChangeQuantity(true)}>
                <AddIcon sx={{ color: 'rgb(119, 170, 158)' }} />
            </button>
        </div>
    );
};

const CartListItem = ({ item, currency, onRemoveFromCart }: CartListItemProps) => {
    const handleRemoveItem = () => {
        onRemoveFromCart(item);
    };
    return (
        item && (
            <li aria-label="cart-list-item" key={item.title} className={styles.cartListItem}>
                <div className={styles.imgContainer}>
                    <img src={item.images[0].src} alt={'product-in-cart'} />
                </div>
                <div className={styles.productDetailsContainer}>
                    <h3 className={'heading-h3-regular'}>{item.title}</h3>
                    <p className={'paragraph-regular'}>
                        Quantity:{item.quantity}
                        <br /> Price: {item.price * item.quantity}
                        {currency}
                    </p>
                </div>
                <div className={styles.deleteButtonContainer}>
                    <IconButton onClick={handleRemoveItem}>
                        <DeleteOutlineIcon className={styles.icon} />
                    </IconButton>
                </div>
                <div className={styles.quantityPickerContainer}>
                    <QuantityPicker item={item} />
                </div>
            </li>
        )
    );
};

export default CartListItem;
