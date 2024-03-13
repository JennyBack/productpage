import Header from './components/header/Header';
// import ProductImageSlider from './components/main/productImageSlider/ProductImageSlider';
import useCheckMobileScreen from './hooks/useCheckMobileScreen';
import Cart from './components/main/cart/Cart';
import ProductImageGallery from './components/main/productImageGallery/ProductImageGallery';
import useCart from './state/useCart';
import ProductInfoSection from './components/main/productInfoSection/ProductInfoSection';
import { menuItems, product } from './mockData';
import './app.css';
import ProductImageSliderV2 from './components/main/productImageSlider/V2/ProductImageSliderV2';

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
            <Header
                numberOfCartItems={cartItems.length}
                onOpenCart={handleOpenCart}
                label={companyName}
                isMobile={isMobile}
                menuItems={menuItems}
            />
            <main className={'main'}>
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
