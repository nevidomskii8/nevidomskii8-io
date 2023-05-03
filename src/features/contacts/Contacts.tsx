import './index.scss';

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
                        target={'_blank'}
                        href={'https://github.com/nevidomskii8'}
                        onMouseOver={handleHover(Links.GITHUB)}
                        onMouseLeave={handleHover(Links.RESET)}
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
                        target={'_blank'}
                        href={'https://www.linkedin.com/in/nevidomskii/'}
                        onMouseOver={handleHover(Links.LINKEDIN)}
                        onMouseLeave={handleHover(Links.RESET)}
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
                        target={'_blank'}
                        href={'https://t.me/Jack_Dom'}
                        onMouseOver={handleHover(Links.TELEGRAM)}
                        onMouseLeave={handleHover(Links.RESET)}
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
                        target={'_blank'}
                        onMouseOver={handleHover(Links.MAIL)}
                        href={'https://nevidomskiy8@gmail.com'}
                        onMouseLeave={handleHover(Links.RESET)}
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
    RESET = 'RESET',
}

type HoverLink = keyof typeof Links;

export default Contacts;
