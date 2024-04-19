import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '../../../../buttons/ButtonComponents';
import styles from './CartHeader.module.css';

type CartHeaderProps = {
    onClose: () => void;
};

const CartHeader = ({ onClose }: CartHeaderProps) => {
    return (
        <div className={styles.cartHeaderWrapper}>
            <h2 className={'heading-h3-regular'}>Cart</h2>
            <div className={styles.iconButtonContainer}>
                <IconButton>
                    <CloseIcon onClick={onClose} className={styles.icon} />
                </IconButton>
            </div>
        </div>
    );
};

export default CartHeader;
