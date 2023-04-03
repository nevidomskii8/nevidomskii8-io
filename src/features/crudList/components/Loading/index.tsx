import './style.scss';

import {Spin} from 'antd';
import * as React from 'react';
import {useSelector} from 'react-redux';

import {getLoading} from '../../redux/selectors/posts';

export const Loading = () => {
    const loading = useSelector(getLoading);

    if (!loading) return null;

    return (
        <div className="loading-wrapper">
            <Spin size="large" />
        </div>
    );
};
