import * as React from 'react';

import styles from './Header.module.css';

import HeaderLeftSection from './headerLeftSection/HeaderLeftSection';
import { MenuItem } from '../../types';
import NavigationDrawer from './navigationDrawer/NavigationDrawer';
import HeaderRightSection from './headerRightSection/HeaderRightSection';
import CartDrawer from './cartDrawer/CartDrawer';

type HeaderProps = {
    numberOfCartItems: number;
    onOpenCart: () => void;
    label: string;
    isMobile: boolean;
    menuItems: MenuItem[];
    showCart: boolean;
};

const Header = ({
    numberOfCartItems,
    onOpenCart,
    label,
    isMobile,
    menuItems,
    showCart
}: HeaderProps) => {
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
                <HeaderRightSection onOpenCart={onOpenCart} numberOfCartItems={numberOfCartItems} />
            </header>
            <NavigationDrawer
                menuItems={menuItems}
                isOpen={isMobile && showNavigation}
                onClose={() => setShowNavigation(false)}
            />
            <CartDrawer isOpen={showCart} onClose={onOpenCart} />
        </>
    );
};

export default Header;
