import * as React from 'react';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from './Header.module.css';

import HeaderLeftSection from './headerLeftSection/HeaderLeftSection';
import { MenuItem } from '../../types';
import NavigationDrawer from './navigationDrawer/NavigationDrawer';

type HeaderProps = {
    numberOfCartItems: number;
    onOpenCart: () => void;
    label: string;
    isMobile: boolean;
    menuItems: MenuItem[];
};

const Header = ({ numberOfCartItems, onOpenCart, label, isMobile, menuItems }: HeaderProps) => {
    const [showNavigation, setShowNavigation] = React.useState<boolean>(false);

    return (
        <>
            <header aria-label="header" className={styles.header}>
                <HeaderLeftSection
                    isMobile={isMobile}
                    onToggleNavigation={() => setShowNavigation(!showNavigation)}
                    label={label}
                    showNavigation={showNavigation}
                    menuItems={menuItems}
                />
                <div aria-label="header-right-section" className={styles.headerRight}>
                    <button className={styles.iconButton}>
                        <AccountCircleIcon className={styles.icon} />
                    </button>
                    <button className={styles.iconButton}>
                        <div style={{ position: 'relative' }} onClick={onOpenCart}>
                            <ShoppingCartIcon className={styles.icon} />
                            {numberOfCartItems != 0 ? (
                                <div className={styles.cartCounter}>{numberOfCartItems}</div>
                            ) : null}
                        </div>
                    </button>
                </div>
            </header>
            <NavigationDrawer
                menuItems={menuItems}
                isOpen={isMobile && showNavigation}
                onClose={() => setShowNavigation(false)}
            />
        </>
    );
};

export default Header;
