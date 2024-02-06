import { MenuItem } from '../../../types';
// import styles from './NavigationDrawer.module.css';
import './NavigationDrawer.css';

type NavigationDrawerProps = {
    menuItems: MenuItem[];
    isOpen: boolean;
};

const NavigationDrawer = ({ menuItems, isOpen }: NavigationDrawerProps) => {
    return (
        <nav className={isOpen ? 'side-drawer open' : 'side-drawer'}>
            {menuItems.length > 0 && (
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default NavigationDrawer;
