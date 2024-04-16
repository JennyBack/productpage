import React from 'react';
import { Image } from '../../../types';
import styles from './ProductImageGallery.module.css';

type ProductImageGalleryProps = {
    images: Image[];
};

const ProductImageGallery = ({ images }: ProductImageGalleryProps) => {
    const [selectedImageIndex, setSelectedImageIndex] = React.useState<number>(0);

    const handleSelectImage = (index: number) => {
        if (selectedImageIndex != index) {
            setSelectedImageIndex((prevState) => (prevState = index));
        }
    };

    return (
        <div aria-label="image-gallery" className={styles.imageGallery}>
            <div className={styles.imageGalleryContainer}>
                <div className={styles.imageHolder}>
                    <img src={images[selectedImageIndex].src} />
                </div>
                <div className={styles.thumbsHolder}>
                    <ul>
                        {images.length > 0 &&
                            images.map((image, index) => (
                                <li
                                    key={image.src + index}
                                    onClick={() => handleSelectImage(index)}
                                    className={
                                        selectedImageIndex === index
                                            ? `${styles.selectedThumb}`
                                            : ''
                                    }
                                >
                                    <img src={image.src} alt={'product'} />
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductImageGallery;
