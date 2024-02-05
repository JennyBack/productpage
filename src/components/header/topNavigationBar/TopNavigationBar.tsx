import React from 'react';
import { MenuItem } from '../../../types';
import styles from './TopNavigationBar.module.css';

type TopNavigationBarProps = {
    menuItems: MenuItem[];
};

const TopNavigationBar = ({ menuItems }: TopNavigationBarProps) => {
    const [selectedMenuItem, setSelectedMenuItem] = React.useState<number>(1);

    return (
        <nav aria-label="top-navigation-bar" className={styles.topNavigationBar}>
            <ul>
                {menuItems.length > 0 &&
                    menuItems.map((item, index) => (
                        <li
                            key={item.id}
                            onClick={() => setSelectedMenuItem(index)}
                            // className={selectedMenuItem === index ? styles.selectedMenuItem : ''}
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
