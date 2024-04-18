import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '../../buttons/ButtonComponents';
import styles from './Cart.module.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { CartContext } from '../../../App';
import React from 'react';

type CartListItemProps = {
    item: any;
    index: number;
    currency: string;
    numberOfProducts: number;
    totalItemCost: number;
    onRemoveFromCart: (item: any) => void;
};

const CartListItem = ({ item, currency, onRemoveFromCart }: CartListItemProps) => {
    const cart = React.useContext(CartContext);

    let onChangeProductQuantity = cart && cart.onChangeProductQuantity;

    const handleChangeQuantity = (add: boolean) => {
        if (onChangeProductQuantity != null) {
            onChangeProductQuantity(add, item.id);
        }
    };

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
                    Quantity:{item.quantity}
                    <br /> Price: {item.price * item.quantity}
                    {currency}
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
                <button onClick={() => handleChangeQuantity(false)}>
                    <RemoveIcon sx={{ color: 'rgb(119, 170, 158)' }} />
                </button>
                <p>{item.quantity}</p>
                <button onClick={() => handleChangeQuantity(true)}>
                    <AddIcon sx={{ color: 'rgb(119, 170, 158)' }} />
                </button>
            </div>
        </li>
    );
};

export default CartListItem;
