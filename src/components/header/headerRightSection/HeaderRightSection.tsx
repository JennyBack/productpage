import styles from '../Header.module.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

type HeaderRightSectionProps = {
    onOpenCart: () => void;
    numberOfCartItems: number;
};

const HeaderRightSection = ({ onOpenCart, numberOfCartItems }: HeaderRightSectionProps) => {
    return (
        <div aria-label="header-right-section" className={styles.headerRight}>
            <button className={styles.iconButton}>
                <AccountCircleIcon className={styles.icon} />
            </button>
            <button className={styles.iconButton}>
                <div style={{ position: 'relative' }} onClick={onOpenCart}>
                    <ShoppingCartIcon className={styles.icon} />
                    {numberOfCartItems != 0 ? (
                        <div className={styles.cartBadge}>{numberOfCartItems}</div>
                    ) : null}
                </div>
            </button>
        </div>
    );
};

export default HeaderRightSection;
