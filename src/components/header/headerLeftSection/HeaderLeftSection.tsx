import TopNavigationBar from '../topNavigationBar/TopNavigationBar';
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
        <div aria-label="header-left-section" className={headerStyles.headerLeft}>
            {isMobile ? (
                <>
                    <button className={headerStyles.iconButton}>
                        <MenuIcon
                            onClick={() => onToggleNavigation(!showNavigation)}
                            className={headerStyles.icon}
                        />
                    </button>
                    <h2>{label}</h2>
                </>
            ) : (
                <TopNavigationBar menuItems={menuItems} label={label} />
            )}
        </div>
    );
};

export default HeaderLeftSection;
