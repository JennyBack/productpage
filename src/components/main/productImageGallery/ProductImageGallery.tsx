import React from 'react';
import { Image } from '../../../types';

type ProductImageGalleryProps = {
    images: Image[];
};

const ProductPageContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '50%',
    height: '100%',
    margin: 0,
    padding: 0,
    flexDirecton: 'column'
};

const ProductImageGallery = ({ images }: ProductImageGalleryProps) => {
    const [selectedImageIndex, setSelectedImageIndex] = React.useState<number>(0);

    const handleSelectImage = (index: number) => {
        if (selectedImageIndex != index) {
            setSelectedImageIndex((prevState) => (prevState = index));
        }
    };
    return (
        <div aria-label="image-gallery" style={ProductPageContainerStyle}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    padding: '5px',
                    overflow: 'hidden'
                }}
            >
                <div
                    style={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        maxHeight: '550px',
                        maxWidth: '550px',
                        borderRadius: '30px',
                        overflow: 'hidden',
                        width: '100%'
                    }}
                >
                    <img
                        src={images[selectedImageIndex].src}
                        style={{
                            height: '100%',
                            width: 'auto',
                            objectFit: 'contain'
                        }}
                    />
                    <div style={{ position: 'absolute', right: '3px', bottom: '3px', zIndex: 100 }}>
                        zoom
                    </div>
                </div>

                <div
                    style={{
                        margin: '12px 70px',
                        width: '100%',
                        maxWidth: '550px'
                    }}
                >
                    <ul
                        style={{
                            display: 'flex',
                            listStyle: 'none',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            margin: 'auto',
                            padding: 0
                        }}
                    >
                        {images.map((image, index) => (
                            <li
                                style={{
                                    height: '88px',
                                    width: '88px',
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                    border: selectedImageIndex === index ? '3px solid black' : '',
                                    cursor: 'pointer'
                                }}
                                onClick={() => handleSelectImage(index)}
                            >
                                <img
                                    src={image.src}
                                    style={{
                                        height: '100%',
                                        width: 'auto',
                                        objectFit: 'contain'
                                    }}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductImageGallery;
