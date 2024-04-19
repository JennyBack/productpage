import React from 'react';
import { MenuItem } from '../../../types';
import styles from './DesktopTopBar.module.css';
import useSelectedMenuItem from '../../../state/useSelectedMenuItem';

type DesktopTopBarProps = {
    menuItems: MenuItem[];
};

const DesktopTopBar = ({ menuItems }: DesktopTopBarProps) => {
    let { selectedMenuItem, handleSelectMenuItem } = useSelectedMenuItem();

    return (
        <nav aria-label="top-navigation-bar" className={styles.topNavigationBar}>
            <ul>
                {menuItems.length > 0 &&
                    menuItems.map((item, index) => (
                        <li key={item.id} onClick={() => handleSelectMenuItem(index)}>
                            <h3 className={'heading-h3-regular'}>{item.title}</h3>
                            {selectedMenuItem === index ? (
                                <div className={styles.selectedMenuItem} />
                            ) : null}
                        </li>
                    ))}
            </ul>
        </nav>
    );
};

export default DesktopTopBar;
