import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const HeaderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: ' 8px 24px 21px 24px'
};

const IconButtonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    margin: '0.3em',
    padding: 0,
    font: 'inherit',
    borderRadius: 0,
    height: '24px',
    width: '24px',
    cursor: 'pointer'
};

const LogoButtonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    margin: 0,
    padding: 0,
    font: 'inherit',
    borderRadius: 0,
    cursor: 'pointer'
};

const LogoTextStyle = {
    fontFamily: 'Outfit',
    fontSize: '31px',
    fontStyle: 'normal',
    fontWeight: 700,
    letterSpacing: '1.24px',
    margin: '0 0 0 16px'
};

const Header = () => {
    const [showNavigation, setShowNavigation] = React.useState<boolean>(false);
    return (
        <>
            <header aria-label="header" style={HeaderStyle}>
                <div
                    style={{
                        display: 'flex',
                        width: '50%',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}
                >
                    <button style={IconButtonStyle}>
                        <MenuIcon onClick={() => setShowNavigation(!showNavigation)} />
                    </button>
                    <button style={LogoButtonStyle}>
                        <h2 style={LogoTextStyle}>sneakers</h2>
                    </button>
                </div>
                <div
                    style={{
                        display: 'flex',
                        width: '50%',
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                    }}
                >
                    <button style={IconButtonStyle}>
                        <AccountCircleIcon />
                    </button>
                    <button style={IconButtonStyle}>
                        <ShoppingCartIcon />
                    </button>
                </div>
            </header>
            {showNavigation ? <nav>navigation</nav> : null}
        </>
    );
};

export default Header;
