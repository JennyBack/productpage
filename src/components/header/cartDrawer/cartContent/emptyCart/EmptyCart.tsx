import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
        width: '100%',
        borderRadius: '10px',
        backgroundColor: !disableCartButton ? '#77AA9E' : 'lightgray',
        boxShadow: '0px 8px 10px 0px #FFEDE0',
        color: 'white'
    };
};

type EmptyCartProps = {
    onClose: () => void;
};

const EmptyCart = ({ onClose }: EmptyCartProps) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '10rem 1rem'
            }}
        >
            <ShoppingCartIcon style={{ color: 'var(--icons--)' }} />
            <p style={{ textAlign: 'center' }} className={'paragraph-regular'}>
                Your cart is empty. <br /> Added items will appear here.
            </p>
            <button onClick={onClose} style={CheckoutButtonStyle()}>
                <h5 style={{ color: 'white' }} className={'heading-h5-regular'}>
                    Close cart
                </h5>
            </button>
        </div>
    );
};

export default EmptyCart;
