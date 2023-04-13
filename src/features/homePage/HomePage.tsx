import './index.scss';

import * as React from 'react';
import {useTranslation} from 'react-i18next';

const {t} = useTranslation();

const HomePage = () => {
    return (
        <div className='home_page_container'>
            <div className={'home_header'}>
                <img
                    src={'../../assets/IMG_4062.jpg'}
                    className={'home_page_image'}
                />
                <div className={'home_welcome_container'}>
                    <h1 className={'home_welcome'}>{t('homePage.welcome')}</h1>
                    <h2 className={'home_welcome'}>
                        {t('homePage.subWelcome')}
                    </h2>
                </div>
            </div>
            <h3 className={'home_welcome_describe_header'}>
                {t('homePage.describeHeader')}
            </h3>
            <h4 className={'home_welcome_describe'}>
                {t('homePage.describe')}
            </h4>
        </div>
    );
};

export default HomePage;
