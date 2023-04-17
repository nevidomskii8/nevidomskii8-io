import './index.scss';

import CubeAnimation from '@styledComponents/animation/CubeAnimation';
import React from 'react';

const Contacts: () => JSX.Element = () => {
    return (
        <div className={'contact_container'}>
            <div className={'wrapper'}>
                <CubeAnimation>
                    <div>
                        <div> github </div>
                        <div>
                            <img
                                src={'../../assets/github_qr.png'}
                                alt={'github'}
                            />
                        </div>
                    </div>
                </CubeAnimation>
                <CubeAnimation>
                    <div>
                        <div>gmail</div>
                        <div>
                            <img
                                src={'../../assets/gmail_qr.png'}
                                alt={'gmail'}
                            />
                        </div>
                    </div>
                </CubeAnimation>
                <CubeAnimation>
                    <div>
                        <div>linkedin</div>
                        <div>
                            <img
                                src={'../../assets/linkedin_qr.png'}
                                alt={'linkedin'}
                            />
                        </div>
                    </div>
                </CubeAnimation>
                <CubeAnimation>
                    <div>
                        <div>telegram</div>
                        <div>
                            <img src={'../../assets/tg_qr.png'} alt={'tg'} />
                        </div>
                    </div>
                </CubeAnimation>
            </div>
        </div>
    );
};

export default Contacts;
