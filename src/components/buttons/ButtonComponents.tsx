import styles from './ButtonComponents.module.css';

export const IconButton = ({ children }: any) => {
    return <button className={styles.iconButton}>{children}</button>;
};

export const BadgeButton = ({ children, onClick, numberOfItems }: any) => {
    return (
        <button className={styles.iconButton}>
            <div style={{ position: 'relative' }} onClick={onClick}>
                {children}{' '}
                {numberOfItems != 0 ? (
                    <div className={styles.cartBadge}>{numberOfItems}</div>
                ) : null}
            </div>
        </button>
    );
};
