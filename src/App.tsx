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

type CartContextType = {
    productQuantity: number;
    cartItems: Product[];
};

export const CartContext = createContext<CartContextType>({ productQuantity: 0, cartItems: [] });

function App() {
    let {
        handleAddProduct,
        handleRemoveProduct,
        handleAddToCart,
        handleRemoveFromCart,
        handleOpenCart,
        productQuantity,
        openCart,
        cartItems
    } = useCart({ product });

    let isMobile = useCheckMobileScreen();
    let currency = 'kr';
    let companyName = 'Paper & co';

    return (
        <div>
            <CartContext.Provider value={{ productQuantity, cartItems }}>
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
                        handleAddProduct={handleAddProduct}
                        handleRemoveProduct={handleRemoveProduct}
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
