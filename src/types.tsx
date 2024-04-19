export type Image = {
    src: string;
};

export type Product = {
    id: number;
    make: string;
    images: Image[];
    title: string;
    description: string;
    price: number;
    oldPrice: number;
    discountInPercent: number;
    quantity: number;
};

export type MenuItem = {
    id: number;
    title: string;
};
