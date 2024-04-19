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

    const handleChangeProductQuantity = (add: boolean, productId?: number) => {
        if (productId != undefined) {
            if (add) {
                let isProduct = (el: Product) => el.id === productId;
                let index = cartItems.findIndex(isProduct);
                let newArray = cartItems;
                newArray[index].quantity = newArray[index].quantity + 1;

                setCartItems([...newArray]);
            }
            if (!add) {
                let isProduct = (el: Product) => el.id === productId;
                let index = cartItems.findIndex(isProduct);
                let newArray = cartItems;
                newArray[index].quantity = newArray[index].quantity - 1;
                setCartItems([...newArray]);
            }
        }
        if (add && productId === undefined) {
            setProductQuantity((prevState) => prevState + 1);
        }
        if (!add && productQuantity != 1 && productId === undefined) {
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
        handleAddToCart,
        handleRemoveFromCart,
        handleOpenCart,
        handleChangeProductQuantity,
        productQuantity,
        openCart,
        cartItems
    };
};

export default useCart;
