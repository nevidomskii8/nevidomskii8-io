import './menu.scss';

import React, {FC, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Link, useLocation} from 'react-router-dom';

interface MenuProp {
    active: boolean;
    setActive: (active: boolean) => void;
}

const Menu: FC<MenuProp> = ({active, setActive}) => {
    const location = useLocation();
    const {t} = useTranslation();

    useEffect(() => {
        setActive(false);
    }, [location]);

    return (
        <ul className={`menu ${active ? 'active' : ''}`}>
            <li>
                <Link to='/'>{t('navigation.links.homePage')}</Link>
            </li>
            <li>
                <Link to='/contact'>{t('navigation.links.contacts')}</Link>
            </li>
            <li>
                <Link to='/portfolio'>{t('navigation.links.portfolio')}</Link>
            </li>
        </ul>
    );
};

export default Menu;
