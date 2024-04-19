import styles from './ButtonComponents.module.css';

type IconButtonProps = {
    children: any;
    onClick?: () => void;
};

type BadgeButtonProps = {
    children: any;
    onClick: () => void;
    numberOfItems: number | null;
};

const CheckoutButtonStyle = (disableCartButton?: boolean) => {
    return {
        border: 'none',
        padding: '17px 77px',
        font: 'inherit',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '12px auto',
        height: '100%',
        width: '100%',
        borderRadius: '10px',
        backgroundColor: !disableCartButton ? '#77AA9E' : 'lightgray',
        boxShadow: '0px 8px 10px 0px #FFEDE0',
        color: 'white'
    };
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

export const FilledButton = ({ children, onClick }: any) => {
    return (
        <button onClick={onClick} style={CheckoutButtonStyle()}>
            {children}
        </button>
    );
};
