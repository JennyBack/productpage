import * as React from 'react';

import { MenuItem } from '../../types';
import NavigationDrawer from './navigationDrawer/NavigationDrawer';
import CartDrawer from './cartDrawer/CartDrawer';
import Header from './header/Header';
import { CartContext } from '../../App';

type HeaderProps = {
    onOpenCart: () => void;
    label: string;
    isMobile: boolean;
    menuItems: MenuItem[];
    showCart: boolean;
    currency: string;
    onRemoveFromCart: (item: any) => void;
};

const HeaderSection = ({
    onOpenCart,
    label,
    isMobile,
    menuItems,
    showCart,
    onRemoveFromCart,
    currency
}: HeaderProps) => {
    const [showNavigation, setShowNavigation] = React.useState<boolean>(false);

    return (
        <>
            <Header
                onOpenCart={onOpenCart}
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
            <CartDrawer
                isOpen={showCart}
                onClose={onOpenCart}
                isMobile={isMobile}
                onRemoveFromCart={(item) => onRemoveFromCart(item)}
                currency={currency}
            />
        </>
    );
};

export default HeaderSection;
