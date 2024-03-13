import { MenuItem } from '../../../types';
import styles from './TopNavigationBar.module.css';
import useSelectedMenuItem from '../../../state/useSelectedMenuItem';

type TopNavigationBarProps = {
    menuItems: MenuItem[];
    label: string;
};

const TopNavigationBar = ({ menuItems, label }: TopNavigationBarProps) => {
    let { selectedMenuItem, handleSelectMenuItem } = useSelectedMenuItem();

    return (
        <nav aria-label="top-navigation-bar" className={styles.topNavigationBar}>
            <h2>{label}</h2>
            <ul>
                {menuItems.length > 0 &&
                    menuItems.map((item, index) => (
                        <li
                            key={item.id}
                            // onClick={() => handleSelectMenuItem(index)}
                        >
                            {item.title}
                            {selectedMenuItem === index ? (
                                <span className={styles.selectedMenuItem} />
                            ) : null}
                        </li>
                    ))}
                <span className={styles.headerLeftDivider} />
            </ul>
        </nav>
    );
};

export default TopNavigationBar;
