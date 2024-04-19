import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import styles from './DiscountInputField.module.css';

const DiscountInputField = () => {
    return (
        <form className={styles.discountForm}>
            <label className={styles.inputLabel} htmlFor="discount-code">
                Discount code
            </label>
            <div className={styles.discountFieldContainer}>
                <input type="text" id="discount-code" placeholder="Have a discount code?" />
                <i>
                    <AddIcon />
                </i>
            </div>
        </form>
    );
};

export default DiscountInputField;
