import './index.scss';

import React from 'react';
import {useTranslation} from 'react-i18next';

const Portfolio = () => {
    const {t} = useTranslation();
    return (
        <div className={'portfolio_container'}>
            <h2>{t('portfolio.error')}</h2>
            <h4>{t('portfolio.title')}</h4>
        </div>
    );
};

export default Portfolio;
