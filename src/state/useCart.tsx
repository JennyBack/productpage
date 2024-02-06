import React from 'react';
import { Product } from '../types';

type Props = {
    product: Product;
};

const useCart = ({ product }: Props) => {
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

    return {
        handleAddProduct,
        handleRemoveProduct,
        handleAddToCart,
        handleRemoveFromCart,
        handleOpenCart,
        numberOfProducts,
        openCart,
        cartItems
    };
};

export default useCart;
