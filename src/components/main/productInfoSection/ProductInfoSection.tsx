import { Product } from '../../../types';
import ProductCounter from '../productCounter/ProductCounter';
import ProductInfo from '../productInfo/ProductInfo';

type ProductInfoProps = {
    product: Product;
    currency: string;
    isMobile: boolean;
    handleAddProduct: () => void;
    handleRemoveProduct: () => void;
    handleAddToCart: (productId: number) => void;
};

const ProductInfoSectionStyle = (isMobile: boolean) => {
    return {
        display: 'flex',
        justifyContent: isMobile ? 'center' : 'flex-start',
        alignItems: 'center',
        width: isMobile ? '100%' : '50%',
        height: '100%',
        margin: 0,
        padding: '2rem 0'
    };
};

const ProductInfoSection = ({
    product,
    currency,
    isMobile,
    handleAddProduct,
    handleRemoveProduct,
    handleAddToCart
}: ProductInfoProps) => {
    return (
        <div style={ProductInfoSectionStyle(isMobile)}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: isMobile ? 'center' : 'flex-start',
                    alignItems: 'center',
                    padding: isMobile ? '0.5em' : '3em',
                    overflow: 'hidden',
                    maxWidth: '600px',
                    flexDirection: 'column'
                }}
            >
                <ProductInfo product={product} currency={currency} />
                <ProductCounter
                    productId={product.id}
                    onAddProduct={handleAddProduct}
                    onRemoveProduct={handleRemoveProduct}
                    onAddToCart={handleAddToCart}
                    label={'Add to cart'}
                    isMobile={isMobile}
                />
            </div>
        </div>
    );
};

export default ProductInfoSection;
