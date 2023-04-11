import './header.scss';
import '../../config/i18n';

import {Button, ButtonGroup} from '@mui/material';
import * as React from 'react';
import {FC} from 'react';

interface HeaderProp {
    active: boolean;
    setActive: (active: boolean) => void;
    onChangeLanguage: (lg: string) => void;
}
const Header: FC<HeaderProp> = ({setActive, active, onChangeLanguage}) => {
    return (
        <div className="header">
            <div className="header__content">
                <ButtonGroup variant="text" color="inherit">
                    <Button onClick={() => onChangeLanguage('en')}>🇺🇸</Button>
                    <Button onClick={() => onChangeLanguage('ua')}>🇺🇦</Button>
                </ButtonGroup>
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
