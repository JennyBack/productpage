import React, { Children, useState } from 'react';
import styles from './ProductSlider.module.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Product } from '../../App';

type ProductSliderProps = {
    products: Product[];
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

const ProductSlider = ({ products }: ProductSliderProps) => {
    const step = 8;
    const isScrollRef = React.useRef();
    let scrollRef = React.useRef<HTMLDivElement>(null);
    let testRef = React.useRef<HTMLDivElement>(null);

    return (
        <div ref={testRef} className={styles.sliderContainer}>
            <div aria-label="product-slider" className={styles.productsWrapper}>
                <div ref={scrollRef} className={styles.buttonLeft}>
                    <ChevronLeftIcon />
                </div>

                <div>
                    <ul className={styles.productsList}>
                        {products.map((product: Product) =>
                            product.images.map((image) => <ProductListItem image={image} />)
                        )}
                    </ul>
                </div>

                <div ref={scrollRef} className={styles.buttonRight}>
                    <ChevronRightIcon />
                </div>
            </div>
        </div>
    );
};

export default ProductSlider;
