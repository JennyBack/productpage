import * as React from 'react';

import { MenuItem } from '../../types';
import NavigationDrawer from './navigationDrawer/NavigationDrawer';
import CartDrawer from './cartDrawer/CartDrawer';
import Header from './header/Header';

type HeaderProps = {
    numberOfCartItems: number;
    onOpenCart: () => void;
    label: string;
    isMobile: boolean;
    menuItems: MenuItem[];
    showCart: boolean;
};

const HeaderSection = ({
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
            <Header
                onOpenCart={onOpenCart}
                numberOfCartItems={numberOfCartItems}
                onToggleDrawer={() => setShowNavigation(!showNavigation)}
                label={label}
                isMobile={isMobile}
                menuItems={menuItems}
            />

            <NavigationDrawer
                menuItems={menuItems}
                isOpen={isMobile && showNavigation}
                onClose={() => setShowNavigation(false)}
            />
            <CartDrawer isOpen={showCart} onClose={onOpenCart} />
        </>
    );
};

export default HeaderSection;
