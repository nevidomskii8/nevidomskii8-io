import './menu.scss';

import React, {FC, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';

interface MenuProp {
    active: boolean;
    setActive: (active: boolean) => void;
}

const Menu: FC<MenuProp> = ({active, setActive}) => {
    const location = useLocation();

    useEffect(() => {
        setActive(false);
    }, [location]);

    return (
        <ul className={`menu ${active ? 'active' : ''}`}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/portfolio">Service</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    );
};

export default Menu;
