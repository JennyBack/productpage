import { Product } from '../../../types';
import ProductCounter from '../productCounter/ProductCounter';
import ProductInfo from '../productInfo/ProductInfo';

type ProductInfoProps = {
    product: Product;
    currency: string;
    isMobile: boolean;
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
        padding: !isMobile ? '3rem 0' : '2rem 0'
    };
};

const ProductInfoSection = ({ product, currency, isMobile, handleAddToCart }: ProductInfoProps) => {
    return (
        <div style={ProductInfoSectionStyle(isMobile)}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: isMobile ? 'center' : 'flex-start',
                    alignItems: 'center',
                    padding: isMobile ? '0.5em' : '3em',
                    overflow: 'hidden',
                    flexDirection: 'column'
                }}
            >
                <ProductInfo product={product} currency={currency} />
                <ProductCounter
                    productId={product.id}
                    onAddToCart={handleAddToCart}
                    label={'Add to cart'}
                    isMobile={isMobile}
                />
            </div>
        </div>
    );
};

export default ProductInfoSection;
