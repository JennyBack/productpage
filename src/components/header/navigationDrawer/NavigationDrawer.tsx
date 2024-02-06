import useSelectedMenuItem from '../../../state/useSelectedMenuItem';
import { MenuItem } from '../../../types';
import styles from './NavigationDrawer.module.css';
import CloseIcon from '@mui/icons-material/Close';

type NavigationDrawerProps = {
    menuItems: MenuItem[];
    isOpen: boolean;
    onClose: () => void;
};

const NavigationDrawer = ({ menuItems, isOpen, onClose }: NavigationDrawerProps) => {
    let { selectedMenuItem, handleSelectMenuItem } = useSelectedMenuItem();

    return (
        <nav
            className={
                isOpen ? `${styles.navigationDrawer} ${styles.open}` : `${styles.navigationDrawer}`
            }
        >
            <button>
                <CloseIcon onClick={onClose} className={styles.icon} />
            </button>
            {menuItems.length > 0 && (
                <ul>
                    {menuItems.map((item, index) => (
                        <li
                            // onClick={() => handleSelectMenuItem(index)}
                            key={item.id}
                            className={
                                selectedMenuItem === index ? `${styles.selectedNavItem}` : ''
                            }
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default NavigationDrawer;
