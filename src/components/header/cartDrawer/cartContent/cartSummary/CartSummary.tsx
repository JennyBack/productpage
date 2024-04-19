import React from 'react';
import { FilledButton } from '../../../../buttons/ButtonComponents';
import styles from './CartSummary.module.css';

const CartSummary = ({ totalItemCost, currency, totalCartCost }: any) => {
    return (
        <div className={styles.cartSummaryContainer}>
            <ul>
                <li className={styles.cartSummaryListItem}>
                    <h5 className={'heading-h3-regular'}>Subtotal: </h5>
                    <p className={'paragraph-regular'}>
                        {totalItemCost}
                        {currency}
                    </p>
                </li>
                <li className={styles.cartSummaryListItem}>
                    <h5 className={'heading-h3-regular'}>Delivery:</h5>
                    <p className={'paragraph-regular'} style={{ color: 'var(--primary--)' }}>
                        Free
                    </p>
                </li>
                <li className={styles.cartSummaryListItem}>
                    <h5 className={'heading-h3-regular'}>Estimated total: </h5>{' '}
                    <p className={'paragraph-regular'}>
                        {totalCartCost}
                        {currency}
                    </p>
                </li>
            </ul>
            <div className={styles.buttonContainer}>
                <FilledButton onClick={() => console.log('clicked checkout ')}>
                    <h5 style={{ color: 'white' }} className={'heading-h5-regular'}>
                        Checkout
                    </h5>
                </FilledButton>
            </div>
        </div>
    );
};

export default CartSummary;
