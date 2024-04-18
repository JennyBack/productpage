import { IconButton } from '../../buttons/ButtonComponents';
import CartContent from '../../main/cart/Cart';
import styles from './CartDrawer.module.css';
import CloseIcon from '@mui/icons-material/Close';

type CartDrawerProps = {
    isOpen: boolean;
    onClose: () => void;
    isMobile: boolean;
    currency: string;
    onRemoveFromCart: (item: any) => void;
};

const CartHeader = ({ onClose }: any) => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                paddingRight: '10%'
            }}
        >
            <h2
                className={'heading-h3-regular'}
                style={{ marginRight: 'auto', paddingLeft: '1rem' }}
            >
                Cart
            </h2>
            <div style={{ marginLeft: 'auto' }}>
                <IconButton>
                    <CloseIcon onClick={onClose} className={styles.icon} />
                </IconButton>
            </div>
        </div>
    );
};

const CartDrawer = ({ isOpen, onClose, isMobile, currency, onRemoveFromCart }: CartDrawerProps) => {
    return (
        <div className={isOpen ? `${styles.cartDrawer} ${styles.open}` : `${styles.cartDrawer}`}>
            <CartHeader onClose={onClose} />
            <CartContent
                currency={currency}
                onRemoveFromCart={onRemoveFromCart}
                onClose={onClose}
            />
        </div>
    );
};

export default CartDrawer;