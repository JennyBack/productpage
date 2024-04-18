import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '../../buttons/ButtonComponents';
import styles from './Cart.module.css';

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
        </li>
    );
};

export default CartListItem;
