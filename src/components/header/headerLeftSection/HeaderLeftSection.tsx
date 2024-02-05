import TopNavigationBar from '../topNavigationBar/TopNavigationBar';
import styles from './HeaderLeftSection.module.css';
import headerStyles from '../Header.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuItem } from '../../../types';

type HeaderLeftNavigationProps = {
    isMobile: boolean;
    onToggleNavigation: (showNavigation: boolean) => void;
    showNavigation: boolean;
    label: string;
    menuItems: MenuItem[];
};
const HeaderLeftSection = ({
    isMobile,
    onToggleNavigation,
    showNavigation,
    label,
    menuItems
}: HeaderLeftNavigationProps) => {
    return (
        <div aria-label="header-left-section" className={styles.headerLeft}>
            {isMobile ? (
                <>
                    <button className={headerStyles.iconButton}>
                        <MenuIcon onClick={() => onToggleNavigation(!showNavigation)} />
                    </button>
                    <button className={headerStyles.logoButton}>
                        <h2>{label}</h2>
                    </button>
                </>
            ) : (
                <>
                    <button className={headerStyles.logoButton}>
                        <h2>{label}</h2>
                    </button>
                    <TopNavigationBar menuItems={menuItems} />
                </>
            )}
        </div>
    );
};

export default HeaderLeftSection;
