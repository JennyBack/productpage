import { Product } from '../../../types';
import styles from './ProductInfo.module.css';

type ProductInfoProps = {
    product: Product;
    currency: string;
};

const ProductInfo = ({ product, currency }: ProductInfoProps) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '2rem'
            }}
        >
            <h5 className={`heading-h5-regular ${styles.productMakeText}`}>{product.make}</h5>
            <h2 className={`heading-h2-regular ${styles.productTitle}`}>{product.title}</h2>
            <p className={`paragraph-regular ${styles.productDescription}`}>
                {product.description}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', margin: 'auto', width: '100%' }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        width: '50%',
                        margin: 'auto'
                    }}
                >
                    <h2 className={`heading-h2-regular ${styles.productPrice}`}>
                        {product.price}
                        {currency}
                    </h2>
                    {product.discountInPercent ? (
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                width: '50%',
                                margin: 'auto'
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: 'auto',
                                    backgroundColor: '#FFEDE0',
                                    borderRadius: '5px',
                                    padding: '5px',
                                    width: '51px',
                                    height: '27px'
                                }}
                            >
                                <h5 className={'heading-h5-regular'}>
                                    {product.discountInPercent}%
                                </h5>
                            </div>
                        </div>
                    ) : null}
                </div>
                {product.oldPrice ? (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            width: '50%',
                            margin: 'auto'
                        }}
                    >
                        <div>
                            <p className={styles.productOldPrice}>
                                {product.oldPrice}
                                {currency}
                            </p>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default ProductInfo;
