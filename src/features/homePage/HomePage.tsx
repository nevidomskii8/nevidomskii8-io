import './index.scss';

import TextAnimation from '@styledComponents/animation/TextAnimation';
import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';

const HomePage = () => {
    const {t} = useTranslation();
    return (
        <div className='home_page_container'>
            <div className={'home_header'}>
                <img
                    src={'../../assets/IMG_4062.jpg'}
                    className={'home_page_image'}
                    alt={'photo'}
                />
                <div className={'home_welcome_container'}>
                    <TextAnimation>{t('homePage.welcome')}</TextAnimation>
                    <h2 className={'home_welcome'}>
                        <Link to='/portfolio'>{t('homePage.subWelcome')}</Link>
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
