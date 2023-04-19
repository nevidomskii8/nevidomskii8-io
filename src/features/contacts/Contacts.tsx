import './index.scss';

import {Link} from '@mui/material';
import CubeAnimation from '@styledComponents/animation/CubeAnimation';
import {StyledLink} from '@styledComponents/StyledLink';
import React, {useState} from 'react';

const Contacts: () => JSX.Element = () => {
    const [hoverState, setHoverState] = useState<HoverLink>();

    const handleHover = (name: HoverLink) => () => setHoverState(name);
    return (
        <div className={'contact_container'}>
            <div className={'wrapper'}>
                <div className={'contact'}>
                    <CubeAnimation hover={hoverState === Links.GITHUB}>
                        <div>
                            <div>
                                <img
                                    src={'../../assets/github-logo.svg'}
                                    alt={'tg'}
                                    className={'contact_image'}
                                />
                            </div>
                            <div>
                                <img
                                    src={'../../assets/github_qr.png'}
                                    alt={'github'}
                                    className={'contact_image'}
                                />
                            </div>
                        </div>
                    </CubeAnimation>
                    <StyledLink
                        href={'https://github.com/nevidomskii8'}
                        onMouseOver={handleHover(Links.GITHUB)}
                    >
                        Github
                    </StyledLink>
                </div>
                <div className={'contact'}>
                    <CubeAnimation hover={hoverState === Links.LINKEDIN}>
                        <div>
                            <div>
                                <img
                                    src={'../../assets/linkedin-logo.svg'}
                                    alt={'tg'}
                                    className={'contact_image'}
                                />
                            </div>
                            <div>
                                <img
                                    src={'../../assets/linkedin_qr.png'}
                                    alt={'linkedin'}
                                    className={'contact_image'}
                                />
                            </div>
                        </div>
                    </CubeAnimation>
                    <StyledLink
                        href={'www.linkedin.com/in/nevidomskii'}
                        onMouseOver={handleHover(Links.LINKEDIN)}
                    >
                        Linkedin
                    </StyledLink>
                </div>
                <div className={'contact'}>
                    <CubeAnimation hover={hoverState === Links.TELEGRAM}>
                        <div>
                            <div>
                                <img
                                    src={'../../assets/telegram-logo.svg'}
                                    alt={'tg'}
                                    className={'contact_image'}
                                />
                            </div>
                            <div>
                                <img
                                    src={'../../assets/tg_qr.png'}
                                    alt={'tg'}
                                    className={'contact_image'}
                                />
                            </div>
                        </div>
                    </CubeAnimation>
                    <StyledLink
                        href={'https://t.me/Jack_Dom'}
                        onMouseOver={handleHover(Links.TELEGRAM)}
                    >
                        Telegram
                    </StyledLink>
                </div>
                <div className={'contact'}>
                    <CubeAnimation hover={hoverState === Links.MAIL}>
                        <div>
                            <div>
                                <img
                                    src={'../../assets/gmail-logo.svg'}
                                    alt={'tg'}
                                    className={'contact_image'}
                                />
                            </div>
                            <div>
                                <img
                                    src={'../../assets/gmail_qr.png'}
                                    alt={'gmail'}
                                    className={'contact_image'}
                                />
                            </div>
                        </div>
                    </CubeAnimation>
                    <StyledLink
                        onMouseOver={handleHover(Links.MAIL)}
                        href={'nevidomskiy8@gmail.com'}
                    >
                        Mail
                    </StyledLink>
                </div>
            </div>
        </div>
    );
};

enum Links {
    MAIL = 'MAIL',
    TELEGRAM = 'TELEGRAM',
    LINKEDIN = 'LINKEDIN',
    GITHUB = 'GITHUB',
}

type HoverLink = keyof typeof Links;

export default Contacts;
