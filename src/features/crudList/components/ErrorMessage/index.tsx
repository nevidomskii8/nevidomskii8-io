import './style.scss';

import {WarningFilled} from '@ant-design/icons';
import * as React from 'react';
import {useSelector} from 'react-redux';

import {getError} from '../../redux/selectors/posts';

export const ErrorMessage = () => {
    const error = useSelector(getError);

    if (!error) return null;

    return (
        <div className="error-message-container">
            <h2>
                <WarningFilled /> OOPS!
            </h2>
            <p>Error happened, please try again later</p>
            <p>Error message: {error}</p>
        </div>
    );
};
