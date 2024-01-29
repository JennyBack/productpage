import React from 'react';
import Header from './components/header/Header';
import ProductSlider from './components/main/productImageSlider/ProductSlider';
import ProductInfo from './components/main/productInfo/ProductInfo';
import useCheckMobileScreen from './hooks/useCheckMobileScreen';

type Image = {
    src: string;
};

export type Product = {
    id: number;
    make: string;
    images: Image[];
    title: string;
    description: string;
    price: number;
    reducedByPercentage: number | null;
};

const Products: Product[] = [
    {
        id: 1,
        make: 'sneaker company',
        images: [
            { src: '/images/pexels-vlada-karpovich-6755869.jpg' },
            { src: '/images/pexels-vlada-karpovich-6755805.jpg' },
            { src: '/images/pexels-vlada-karpovich-6755793.jpg' },
            { src: '/images/pexels-vlada-karpovich-6755792.jpg' },
            { src: '/images/pexels-vlada-karpovich-6755649.jpg' }
        ],
        title: 'Fall limited edition sneakers',
        description:
            'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
        price: 1250.0,
        reducedByPercentage: 50
    }
];

function App() {
    let isMobile = useCheckMobileScreen();
    return (
        <div>
            <Header />
            <main
                style={{
                    display: 'flex',
                    flexWrap: isMobile ? 'wrap' : 'nowrap',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <ProductSlider product={Products[0]} />
                <ProductInfo product={Products[0]} />
            </main>
        </div>
    );
}

export default App;
