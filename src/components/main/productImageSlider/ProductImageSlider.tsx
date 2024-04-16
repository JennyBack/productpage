import React, { createRef, useEffect, useRef, useState } from 'react';
import styles from './ProductSlider.module.css';
import { Image } from '../../../types';

type ProductImageSliderProps = {
    images: Image[];
};

const ProductImageSlider = ({ images }: ProductImageSliderProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    const imageRef: React.MutableRefObject<any | null[]> = useRef([]);

    const handleVisibleImg = (entries: any) => {
        entries.forEach((entry: any) => {
            if (entry.isIntersecting) {
                let imgIndex = images.findIndex((image) => image.src === entry.target.id);
                if (entry.isIntersecting) {
                    setCurrentImageIndex(imgIndex);
                }
            }
        });
    };

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleVisibleImg, options);

        images.forEach((image, index) => {
            observer.observe(imageRef.current[index] as HTMLImageElement);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.sliderContainer} aria-label="product-image-slider">
            {images.length > 0 &&
                images.map((image, index) => (
                    <img
                        ref={(element) => (imageRef.current[index] = element)}
                        key={image.src}
                        id={image.src}
                        src={image.src}
                        alt="product"
                    />
                ))}

            <div className={styles.sliderContainerButtons}>
                {images.length > 0 &&
                    images.map((image, index) => (
                        <a
                            className={currentImageIndex === index ? `${styles.active}` : ''}
                            key={index}
                            href={`#${images[index].src}`}
                            onClick={() => setCurrentImageIndex(index)}
                        />
                    ))}
            </div>
        </div>
    );
};

export default ProductImageSlider;
