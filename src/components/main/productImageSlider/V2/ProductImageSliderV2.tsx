import React, { createRef, useEffect, useRef, useState } from 'react';
import styles from './ProductSliderV2.module.css';
import { Image } from '../../../../types';

type ProductSliderProps = {
    images: Image[];
};

const ProductImageSliderV2 = ({ images }: ProductSliderProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    const [isVisible, setIsVisible] = useState<boolean>(false);

    // const handleTouchMove = (index: number) => {
    //     if (index != currentImageIndex) {
    //         setCurrentImageIndex((prevState) => (prevState = index));
    //     }
    // };

    const imageRef: React.MutableRefObject<HTMLImageElement | null> = useRef(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleVisibleImg = ([entry]: any) => {
        let imgIndex = images.findIndex((image) => image.src === entry.target.id);
        setIsVisible(entry.isIntersecting);
        setCurrentImageIndex(imgIndex);
    };

    const options = {
        root: containerRef.current,
        rootMargin: '-250px'
        // treshold: 0.5
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleVisibleImg, options);

        observer.observe(imageRef.current as HTMLElement);

        return () => observer.disconnect();
    }, []);

    // useEffect(() => {
    //     if (isVisible) {
    //     }
    // }, [isVisible]);

    console.log('isVisible', isVisible);

    return (
        <div
            ref={containerRef}
            className={styles.sliderContainer}
            aria-label="product-image-slider"
        >
            <img
                style={{ height: '100vh' }}
                key={images[0].src}
                id={images[0].src}
                src={images[0].src}
                alt="product"
            />

            <img
                style={{ height: '100vh' }}
                ref={imageRef}
                key={images[1].src}
                id={images[1].src}
                src={images[1].src}
                alt="product"
            />

            <img
                style={{ height: '100vh' }}
                key={images[2].src}
                id={images[2].src}
                src={images[2].src}
                alt="product"
            />

            {/* {images.length > 0 &&
                images.map((image, index) => {
                    let counter = index + 1;
                    return (
                        <>
                            <img
                                key={image.src}
                                id={image.src}
                                src={image.src}
                                alt="product"
                                onTouchMove={() => handleTouchMove(index)}
                            />
                            {index === currentImageIndex ? (
                                <p
                                    style={{
                                        position: 'absolute',
                                        bottom: '1.2rem',
                                        zIndex: '100'
                                    }}
                                >
                                    {counter}/{images.length}
                                </p>
                            ) : null}
                        </>
                    );
                })} */}

            <div className={styles.sliderContainerButtons}>
                {/* {images.length > 0 &&
                    images.map((image, index) => ( */}
                <a
                    className={currentImageIndex === 0 ? `${styles.active}` : ''}
                    key={0}
                    href={`#${images[0].src}`}
                    onClick={() => setCurrentImageIndex(0)}
                />
                <a
                    className={currentImageIndex === 1 ? `${styles.active}` : ''}
                    key={1}
                    href={`#${images[1].src}`}
                    onClick={() => setCurrentImageIndex(1)}
                />{' '}
                <a
                    className={currentImageIndex === 2 ? `${styles.active}` : ''}
                    key={2}
                    href={`#${images[2].src}`}
                    onClick={() => setCurrentImageIndex(2)}
                />
                {/* ))} */}
            </div>
        </div>
    );
};

export default ProductImageSliderV2;
