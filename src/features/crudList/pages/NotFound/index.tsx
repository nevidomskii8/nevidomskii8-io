import './style.scss';

import {WarningFilled} from '@ant-design/icons';
import {Button} from 'antd';
import {useCallback} from 'react';
import * as React from 'react';
import {useNavigate} from 'react-router-dom';

export const NotFound = () => {
    const navigate = useNavigate();
    const handleNavigate = useCallback(() => navigate('/'), [navigate]);

    return (
        <div className="page-not-found-container">
            <h2>
                <WarningFilled /> OOPS!
            </h2>

            <p>Error 404, Page Not Found</p>

            <Button
                type="primary"
                onClick={handleNavigate}
                title={'Home Pages'}
            />
        </div>
    );
};
