import React, { Children, useState } from 'react';
import styles from './ProductSlider.module.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Product } from '../../../types';

type ProductSliderProps = {
    product: Product;
};

type Image = {
    src: string;
};

type ProductListItemProps = {
    image: Image;
};

const ProductListItem = ({ image }: ProductListItemProps) => {
    return (
        <li className={styles.productsListItem}>
            <img
                id={image.src}
                src={image.src}
                alt="product"
                className={styles.productsListImage}
            />
        </li>
    );
};

const ProductSlider = ({ product }: ProductSliderProps) => {
    const [currentImageIndex, setCurrentImageIndex] = React.useState<number>(0);

    const showNextImage = () => {
        if (currentImageIndex < product.images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
        if (currentImageIndex === product.images.length - 1) {
            setCurrentImageIndex(0);
        }
    };

    const showPreviousImage = () => {
        if (currentImageIndex < product.images.length) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
        if (currentImageIndex === 0) {
            setCurrentImageIndex(product.images.length - 1);
        }
    };

    return (
        <div className={styles.sliderContainer}>
            <div aria-label="product-slider" className={styles.productsWrapper}>
                <div>
                    <ul className={styles.productsList}>
                        <div className={styles.buttonLeft} onClick={showPreviousImage}>
                            <ChevronLeftIcon />
                        </div>
                        {product.images.map((image, index) =>
                            index === currentImageIndex ? (
                                <ProductListItem key={image.src} image={image} />
                            ) : null
                        )}
                        <div className={styles.buttonRight} onClick={showNextImage}>
                            <ChevronRightIcon />
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductSlider;
