import styles from './ButtonComponents.module.css';

type IconButtonProps = {
    children: any;
    onClick?: () => void;
};

type BadgeButtonProps = {
    children: any;
    onClick: () => void;
    numberOfItems: number;
};

export const IconButton = ({ children, onClick }: IconButtonProps) => {
    return (
        <button className={styles.iconButton} onClick={onClick}>
            {children}
        </button>
    );
};

export const BadgeButton = ({ children, onClick, numberOfItems }: BadgeButtonProps) => {
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
