import React, { Children, useState } from 'react';
import styles from './ProductSlider.module.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Image } from '../../../types';

type ProductSliderProps = {
    images: Image[];
};

const ProductImageSlider = ({ images }: ProductSliderProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    const showNextImage = () => {
        if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
        if (currentImageIndex === images.length - 1) {
            setCurrentImageIndex(0);
        }
    };

    const showPreviousImage = () => {
        if (currentImageIndex < images.length) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
        if (currentImageIndex === 0) {
            setCurrentImageIndex(images.length - 1);
        }
    };

    return (
        <div className={styles.sliderContainer} aria-label="product-image-slider">
            <ul>
                {images.length > 0 &&
                    images.map((image, index) =>
                        index === currentImageIndex ? (
                            <li key={image.src + index}>
                                <button className={styles.buttonLeft} onClick={showPreviousImage}>
                                    <ChevronLeftIcon className={styles.icon} />
                                </button>
                                <img id={image.src} src={image.src} alt="product" />
                                <button className={styles.buttonRight} onClick={showNextImage}>
                                    <ChevronRightIcon className={styles.icon} />
                                </button>
                            </li>
                        ) : null
                    )}
            </ul>
        </div>
    );
};

export default ProductImageSlider;
