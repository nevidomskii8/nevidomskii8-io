import './style.scss';

import Search from 'antd/lib/input/Search';
import * as React from 'react';
import {useCallback} from 'react';
import {useDispatch} from 'react-redux';

import {postsSearch} from '../../redux/actions/posts';

export const PostsSearch = () => {
    const dispatch = useDispatch();

    const handleSearch = useCallback(
        (value: string) => {
            dispatch(postsSearch(value));
        },
        [dispatch],
    );

    return (
        <div className="search-container">
            <label className="search-label">Search: </label>
            <Search onSearch={handleSearch} enterButton />
        </div>
    );
};
