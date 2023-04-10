import './header.scss';

import * as React from 'react';
import {FC} from 'react';

interface HeaderProp {
    active: boolean;
    setActive: (active: boolean) => void;
}
const Header: FC<HeaderProp> = ({setActive, active}) => {
    return (
        <div className="header">
            <div className="header__content">
                <div className="logo">Portfolio</div>
                <div
                    className={`menu-toggle ${active ? 'active' : ''}`}
                    onClick={() => setActive(!active)}
                >
                    <div className={'hamburger-lines'}>
                        <li
                            className={`line ${active ? 'line1-t' : 'line1'}`}
                        />
                        <li
                            className={`line ${active ? 'line2-t' : 'line2'}`}
                        />
                        <li
                            className={`line ${active ? 'line3-t' : 'line3'}`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
