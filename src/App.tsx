import useCheckMobileScreen from './hooks/useCheckMobileScreen';
import ProductImageGallery from './components/main/productImageGallery/ProductImageGallery';
import useCart from './state/useCart';
import ProductInfoSection from './components/main/productInfoSection/ProductInfoSection';
import { menuItems, product } from './mockData';
import './app.css';
import ProductImageSlider from './components/main/productImageSlider/ProductImageSlider';
import HeaderSection from './components/header/HeaderSection';
import { createContext } from 'react';
import { Product } from './types';

export type CartContextType = {
    productQuantity: number;
    cartItems: Product[];
    onChangeProductQuantity: (add: boolean, productId?: number) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

function App() {
    let {
        handleAddToCart,
        handleRemoveFromCart,
        handleOpenCart,
        handleChangeProductQuantity,
        productQuantity,
        openCart,
        cartItems
    } = useCart({ product });

    let isMobile = useCheckMobileScreen();
    let currency = 'kr';
    let companyName = 'Paper & co';

    return (
        <div>
            <CartContext.Provider
                value={{
                    productQuantity,
                    cartItems,
                    onChangeProductQuantity: handleChangeProductQuantity
                }}
            >
                <header style={{ minHeight: '4rem', height: '100%', width: '100%' }}>
                    <HeaderSection
                        showCart={openCart}
                        onOpenCart={handleOpenCart}
                        label={companyName}
                        isMobile={isMobile}
                        menuItems={menuItems}
                        currency={currency}
                        onRemoveFromCart={(item) => handleRemoveFromCart(item)}
                    />
                </header>
                <main className={'main'} style={!isMobile ? { height: '100vh' } : { height: '' }}>
                    {isMobile ? (
                        <ProductImageSlider images={product.images} />
                    ) : (
                        <ProductImageGallery images={product.images} />
                    )}
                    <ProductInfoSection
                        currency={currency}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        isMobile={isMobile}
                    />
                </main>
            </CartContext.Provider>
            <footer style={{ backgroundColor: 'var(--primary--)', width: '100%' }}>
                <ul style={{ color: 'white', padding: '1rem', listStyle: 'none' }}>
                    <li>
                        <a href="https://jennydev.netlify.app/">Portfolio site</a>
                    </li>
                    <li>LinkedIn</li>
                    <li>GitHub</li>
                </ul>
            </footer>
        </div>
    );
}

export default App;
