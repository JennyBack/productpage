import { MenuItem, Product } from './types';

export const product: Product = {
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
};

export const menuItems: MenuItem[] = [
    { id: 1, title: 'collections' },
    { id: 2, title: 'candles' },
    { id: 3, title: 'furniture' },
    { id: 4, title: 'about' },
    { id: 5, title: 'contact' }
];