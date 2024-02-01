import React from 'react';
import Header from './components/header/Header';
import ProductSlider from './components/main/productImageSlider/ProductSlider';
import ProductInfo from './components/main/productInfo/ProductInfo';
import useCheckMobileScreen from './hooks/useCheckMobileScreen';
import ProductCounter from './components/main/productCounter/ProductCounter';
import Cart from './components/main/cart/Cart';
import ProductImageGallery from './components/main/productImageGallery/ProductImageGallery';

export type Image = {
    src: string;
};

export type Product = {
    id: number;
    make: string;
    images: Image[];
    title: string;
    description: string;
    price: number;
    reducedByPercentage: number | null;
};

function App() {
    const [numberOfProducts, setNumberOfProducts] = React.useState<number>(1);
    const [cartItems, setCartItems] = React.useState<Product[]>([]);
    const [openCart, setOpenCart] = React.useState<boolean>(false);

    const handleAddProduct = () => {
        setNumberOfProducts((prevState) => prevState + 1);
    };

    const handleRemoveProduct = () => {
        if (numberOfProducts != 0) {
            setNumberOfProducts((prevState) => prevState - 1);
        }
    };

    const handleAddToCart = (productId: number) => {
        let existsInCart: boolean = cartItems.some((product) => product.id === productId);
        if (product.id === productId && !existsInCart) {
            setCartItems((prevState) => prevState.concat(product));
        }
    };

    const handleRemoveFromCart = (product: Product) => {
        let newCartItems = cartItems.filter((item) => item.id !== product.id);
        setCartItems(newCartItems);
    };

    const handleOpenCart = () => {
        setOpenCart(!openCart);
    };

    let isMobile = useCheckMobileScreen();
    let currency = 'kr';

    const product: Product = {
        id: 1,
        make: 'sneaker company',
        images: [
            { src: '/images/pexels-vlada-karpovich-6755869.jpg' },
            { src: '/images/pexels-vlada-karpovich-6755805.jpg' },
            { src: '/images/pexels-vlada-karpovich-6755793.jpg' },
            { src: '/images/pexels-vlada-karpovich-6755792.jpg' },
            { src: '/images/pexels-vlada-karpovich-6755649.jpg' }
        ],
        title: 'Fall limited edition sneakers',
        description:
            'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
        price: 1250.0,
        reducedByPercentage: 50
    };

    const ProductPageContainerStyle = {
        display: 'flex',
        justifyContent: isMobile ? 'center' : 'flex-end',
        alignItems: 'center',
        width: isMobile ? '100%' : '50%',
        height: '100%',
        margin: 0,
        padding: 0,
        flexDirecton: 'column'
    };

    const ProductInfoSectionStyle = {
        display: 'flex',
        justifyContent: isMobile ? 'center' : 'flex-start',
        alignItems: 'center',
        width: isMobile ? '100%' : '50%',
        height: '100%',
        margin: 0,
        padding: 0,
        flexDirecton: 'column'
    };

    const ProductInfoWrapperStyle = {
        display: 'flex',
        justifyContent: isMobile ? 'center' : 'flex-start',
        alignItems: 'center',
        padding: isMobile ? 0 : '3em',
        overflow: 'hidden',
        maxWidth: '600px',
        flexDirection: 'column'
    };

    return (
        <div>
            <Header
                numberOfCartItems={cartItems.length}
                onOpenCart={handleOpenCart}
                label={'candles'}
            />

            <main
                style={{
                    display: 'flex',
                    flexWrap: isMobile ? 'wrap' : 'nowrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    margin: isMobile ? 0 : '5em auto'
                }}
            >
                {isMobile ? (
                    <ProductSlider product={product} />
                ) : (
                    <div aria-label="image-gallery" style={ProductPageContainerStyle}>
                        <ProductImageGallery images={product.images} />
                    </div>
                )}
                <div style={ProductInfoSectionStyle}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: isMobile ? 'center' : 'flex-start',
                            alignItems: 'center',
                            padding: isMobile ? '0.5em' : '3em',
                            overflow: 'hidden',
                            maxWidth: '600px',
                            flexDirection: 'column'
                        }}
                    >
                        <ProductInfo product={product} currency={currency} />
                        <ProductCounter
                            productId={product.id}
                            numberOfProducts={numberOfProducts}
                            onAddProduct={handleAddProduct}
                            onRemoveProduct={handleRemoveProduct}
                            onAddToCart={handleAddToCart}
                            label={'Add to cart'}
                            numberOfItemsInCart={cartItems.length}
                            isMobile={isMobile}
                        />
                    </div>
                </div>

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
