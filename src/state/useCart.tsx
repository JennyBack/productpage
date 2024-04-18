import React from 'react';
import { Product } from '../types';

type Props = {
    product: Product;
};

const useCart = ({ product }: Props) => {
    const [productQuantity, setProductQuantity] = React.useState<number>(1);
    const [cartItems, setCartItems] = React.useState<Product[]>([]);
    const [openCart, setOpenCart] = React.useState<boolean>(false);

    const handleResetProductQuantity = () => {
        setProductQuantity(1);
    };

    const handleAddProduct = () => {
        setProductQuantity((prevState) => prevState + 1);
    };

    const handleRemoveProduct = () => {
        if (productQuantity != 1) {
            setProductQuantity((prevState) => prevState - 1);
        }
    };

    const handleAddToCart = (productId: number) => {
        let existsInCart: boolean = cartItems.some((product) => product.id === productId);
        if (product.id === productId && !existsInCart) {
            setCartItems((prevState) =>
                prevState.concat({ ...product, quantity: productQuantity })
            );
            handleResetProductQuantity();
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
        productQuantity,
        openCart,
        cartItems
    };
};

export default useCart;
