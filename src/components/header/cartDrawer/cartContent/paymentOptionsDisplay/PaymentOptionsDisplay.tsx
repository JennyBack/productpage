import React from 'react';
import styles from './PaymentOptionsDisplay.module.css';
import { paymentOptionsImgs } from '../../../../../mockData';

const PaymentOptionsDisplay = () => {
    return (
        <div className={styles.displayContainer}>
            <ul>
                {paymentOptionsImgs &&
                    paymentOptionsImgs.map((image, index) => (
                        <li className={styles.listItem}>
                            <img src={image.src} />
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default PaymentOptionsDisplay;
