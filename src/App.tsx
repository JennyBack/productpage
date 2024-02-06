import Header from './components/header/Header';
import ProductSlider from './components/main/productImageSlider/ProductSlider';
import useCheckMobileScreen from './hooks/useCheckMobileScreen';
import Cart from './components/main/cart/Cart';
import ProductImageGallery from './components/main/productImageGallery/ProductImageGallery';
import useCart from './state/useCart';
import ProductInfoSection from './components/main/productInfoSection/ProductInfoSection';
import { menuItems, product } from './mockData';
import './app.css';

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

    return (
        <div>
            <Header
                numberOfCartItems={cartItems.length}
                onOpenCart={handleOpenCart}
                label={'candles'}
                isMobile={isMobile}
                menuItems={menuItems}
            />
            <main className={'main'}>
                {isMobile ? (
                    <ProductSlider product={product} />
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
                {openCart ? (
                    <Cart
                        cartItems={cartItems}
                        currency={currency}
                        numberOfProducts={numberOfProducts}
                        onRemoveFromCart={handleRemoveFromCart}
                    />
                ) : null}
            </main>
        </div>
    );
}

export default App;
