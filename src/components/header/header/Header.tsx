import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from './Header.module.css';
import React from 'react';
import { MenuItem } from '../../../types';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DesktopTopBar from './DesktopTopBar';
import { BadgeButton, IconButton } from '../../buttons/ButtonComponents';
import { CartContext } from '../../../App';

type HeaderProps = {
    onOpenCart: () => void;
    onToggleDrawer: () => void;
    isMobile: boolean;
    label: string;
    menuItems: MenuItem[];
};

const Header = ({ onOpenCart, onToggleDrawer, isMobile, label, menuItems }: HeaderProps) => {
    const { cartItems } = React.useContext(CartContext);
    return (
        <div className={isMobile ? `${styles.Header} ${styles.sticky}` : styles.Header}>
            {isMobile ? (
                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <IconButton>
                        <MenuIcon onClick={onToggleDrawer} className={styles.icon} />
                    </IconButton>
                    <h2 className={'logo-font'}>{label}</h2>
                </div>
            ) : (
                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <h2 className={'logo-font'}>{label}</h2>
                    <DesktopTopBar menuItems={menuItems} />
                </div>
            )}
            <div aria-label="header-right-section" className={styles.rightIconBar}>
                <IconButton>
                    <AccountCircleIcon className={styles.icon} style={{ marginRight: '5px' }} />
                </IconButton>
                <BadgeButton onClick={onOpenCart} numberOfItems={cartItems.length}>
                    <ShoppingCartIcon className={styles.icon} />
                </BadgeButton>
            </div>
        </div>
    );
};

export default Header;
