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
    reducedByPercentage: number | null;
};
