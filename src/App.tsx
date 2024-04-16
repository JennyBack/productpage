import useCheckMobileScreen from './hooks/useCheckMobileScreen';
import ProductImageGallery from './components/main/productImageGallery/ProductImageGallery';
import useCart from './state/useCart';
import ProductInfoSection from './components/main/productInfoSection/ProductInfoSection';
import { menuItems, product } from './mockData';
import './app.css';
import ProductImageSliderV2 from './components/main/productImageSlider/V2/ProductImageSliderV2';
import HeaderSection from './components/header/HeaderSection';

function App() {
    let {
        handleAddProduct,
        handleRemoveProduct,
        handleAddToCart,
        handleRemoveFromCart,
        handleOpenCart,
        numberOfProducts,
        openCart,
        cartItems
    } = useCart({ product });

    let isMobile = useCheckMobileScreen();
    let currency = 'kr';
    let companyName = 'Paper & co';

    return (
        <div>
            <header style={{ minHeight: '4rem', height: '100%', width: '100%' }}>
                <HeaderSection
                    numberOfCartItems={cartItems.length}
                    showCart={openCart}
                    onOpenCart={handleOpenCart}
                    label={companyName}
                    isMobile={isMobile}
                    menuItems={menuItems}
                />
            </header>
            <main className={'main'} style={{ height: '100%' }}>
                {isMobile ? (
                    <ProductImageSliderV2 images={product.images} />
                ) : (
                    <ProductImageGallery images={product.images} />
                )}
                <ProductInfoSection
                    cartItems={cartItems}
                    numberOfProducts={numberOfProducts}
                    currency={currency}
                    product={product}
                    handleAddProduct={handleAddProduct}
                    handleRemoveProduct={handleRemoveProduct}
                    handleAddToCart={handleAddToCart}
                    isMobile={isMobile}
                />
            </main>
            <footer style={{ backgroundColor: 'var(--primary--)', width: '100%' }}>
                <ul style={{ color: 'white', padding: '1rem', listStyle: 'none' }}>
                    <li>Portfolio site</li>
                    <li>LinkedIn</li>
                    <li>GitHub</li>
                </ul>
            </footer>
        </div>
    );
}

export default App;
