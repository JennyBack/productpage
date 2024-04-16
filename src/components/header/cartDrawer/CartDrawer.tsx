import useSelectedMenuItem from '../../../state/useSelectedMenuItem';
import { MenuItem } from '../../../types';
import styles from './CartDrawer.module.css';
import CloseIcon from '@mui/icons-material/Close';

type CartDrawerProps = {
    isOpen: boolean;
    onClose: () => void;
};

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
    return (
        <div
            className={
                isOpen ? `${styles.navigationDrawer} ${styles.open}` : `${styles.navigationDrawer}`
            }
        >
            <button>
                <CloseIcon onClick={onClose} className={styles.icon} />
            </button>
        </div >
    );
};

export default CartDrawer;
