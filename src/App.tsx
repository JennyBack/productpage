import React from 'react';
import Header from './components/header/Header';
import ProductSlider from './components/main/productImageSlider/ProductSlider';
import ProductInfo from './components/main/productInfo/ProductInfo';
import useCheckMobileScreen from './hooks/useCheckMobileScreen';
import ProductCounter from './components/main/productCounter/ProductCounter';
import Cart from './components/main/cart/Cart';

type Image = {
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
                    alignItems: 'center'
                }}
            >
                <ProductSlider product={product} />
                <ProductInfo product={product} currency={currency} />
                <ProductCounter
                    productId={product.id}
                    numberOfProducts={numberOfProducts}
                    onAddProduct={handleAddProduct}
                    onRemoveProduct={handleRemoveProduct}
                    onAddToCart={handleAddToCart}
                    label={'Add to cart'}
                    numberOfItemsInCart={cartItems.length}
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
