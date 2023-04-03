import './style.scss';

import * as React from 'react';
import {memo, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {PostsSearch} from './../../components/PostsSearch';
import {PostsTable} from './../../components/PostsTable';
import {postsFetchStart} from '../../redux/actions/posts';
import {getFilteredPosts} from '../../redux/selectors/posts';

const MemoizedPostsSearch = memo(PostsSearch);

export const Posts = () => {
    const posts = useSelector(getFilteredPosts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postsFetchStart());
    }, [dispatch]);

    if (!posts) return null;

    return (
        <div className="posts-container">
            <MemoizedPostsSearch />
            <PostsTable posts={posts} />
        </div>
    );
};
