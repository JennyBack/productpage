import CartContent from './cartContent/CartContent';
import CartHeader from './cartContent/cartHeader/CartHeader';
import styles from './CartDrawer.module.css';

type CartDrawerProps = {
    isOpen: boolean;
    onClose: () => void;
    isMobile: boolean;
    currency: string;
    onRemoveFromCart: (item: any) => void;
};

const CartDrawer = ({ isOpen, onClose, isMobile, currency, onRemoveFromCart }: CartDrawerProps) => {
    return (
        <div
            className={
                isOpen && isMobile
                    ? `${styles.cartDrawer} ${styles.open} ${styles.mobile}`
                    : isOpen && !isMobile
                    ? `${styles.cartDrawer} ${styles.open} ${styles.desktop}`
                    : `${styles.cartDrawer}`
            }
        >
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
