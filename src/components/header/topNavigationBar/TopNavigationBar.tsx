import React from 'react';
import { MenuItem } from '../../../types';
import styles from './TopNavigationBar.module.css';
import useSelectedMenuItem from '../../../state/useSelectedMenuItem';

type TopNavigationBarProps = {
    menuItems: MenuItem[];
};

const TopNavigationBar = ({ menuItems }: TopNavigationBarProps) => {
    let { selectedMenuItem, handleSelectMenuItem } = useSelectedMenuItem();

    return (
        <nav aria-label="top-navigation-bar" className={styles.topNavigationBar}>
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
