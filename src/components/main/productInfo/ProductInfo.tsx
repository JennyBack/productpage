import { Product } from '../../../App';
import styles from './ProductInfo.module.css';

type ProductInfoProps = {
    product: Product;
};

const ProductInfo = ({ product }: ProductInfoProps) => {
    let currency = 'kr';
    return (
        <div style={{ margin: '20px' }}>
            <h5 className={styles.productMakeText}>{product.make}</h5>
            <h2 className={styles.productTitle}>{product.title}</h2>
            <p className={styles.productDescription}>{product.description}</p>
            <div style={{ display: 'flex', alignItems: 'center', margin: 'auto', width: '100%' }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        width: '50%',
                        margin: 'auto'
                    }}
                >
                    <p className={styles.productPrice}>
                        {product.price}
                        {currency}
                    </p>
                    {product.reducedByPercentage ? (
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
                                <p className={styles.productMakeText}>
                                    {product.reducedByPercentage}%
                                </p>
                            </div>
                        </div>
                    ) : null}
                </div>
                {product.reducedByPercentage ? (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            width: '50%',
                            margin: 'auto'
                        }}
                    >
                        <div>
                            <p className={styles.productOldPrice}>2500.00</p>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default ProductInfo;
