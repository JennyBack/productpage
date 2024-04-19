import { MenuItem, Product } from './types';

export const product: Product = {
    id: 1,
    make: 'To my senses',
    images: [
        { src: '/images/pexels-vlada-karpovich-6755869.jpg' },
        { src: '/images/pexels-vlada-karpovich-6755805.jpg' },
        { src: '/images/pexels-vlada-karpovich-6755793.jpg' },
        { src: '/images/pexels-vlada-karpovich-6755792.jpg' },
        { src: '/images/pexels-vlada-karpovich-6755649.jpg' }
    ],
    title: 'FallSense, limited edition candles',
    description:
        'These carefully handmade scented candles are perfect on a fall evening journaling. Let the room fill with the smell of warm spices that warms the soul. Comes in 2 pack - autumn mist & pumpkin spice.',
    price: 200.0,
    oldPrice: 400.0,
    discountInPercent: 50,
    quantity: 1
};

export const menuItems: MenuItem[] = [
    { id: 1, title: 'fountain-pens' },
    { id: 2, title: 'candles' },
    { id: 3, title: 'journals' },
    { id: 4, title: 'about' },
    { id: 5, title: 'contact' }
];

export const paymentOptionsImgs = [
    { src: '/images/applePay.png' },
    { src: '/images/googlePay.png' },
    { src: '/images/klarna.png' },
    { src: '/images/visa.png' },
    { src: '/images/mastercard.png' },
    { src: '/images/paypal.png' }
];
