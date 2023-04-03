import {call, put} from 'redux-saga/effects';

import {
    deletePost,
    editPost,
    fetchPosts,
    fetchSinglePost,
} from './../../api/posts';
import {Post} from '../../models';
import {
    PostDeleteStartAction,
    PostEditStartAction,
    SinglePostFetchStartAction,
} from '../actions-types/posts';
import {
    deletePostSuccess,
    postsFetchError,
    postsFetchSuccess,
    singlePostFetchError,
    singlePostFetchSuccess,
} from '../actions/posts';

export function* handleFetchPosts() {
    try {
        const posts: Post[] = yield call(fetchPosts);
        yield put(postsFetchSuccess(posts));
    } catch (err: any) {
        yield put(postsFetchError(err.message));
    }
}

export function* handleFetchSinglePost(action: SinglePostFetchStartAction) {
    try {
        const post: Post = yield call(fetchSinglePost, action.payload.key);
        yield put(singlePostFetchSuccess(post));
    } catch (err: any) {
        yield put(singlePostFetchError(err.message));
    }
}

export function* handleEditPost(action: PostEditStartAction) {
    const {key, data, successCallback, errorCallback} = action.payload;
    try {
        yield call(editPost, key, data);
        successCallback();
    } catch (err: any) {
        errorCallback();
    }
}

export function* handleDeletePost(action: PostDeleteStartAction) {
    const {key, successCallback, errorCallback} = action.payload;
    try {
        yield call(deletePost, key);
        yield put(deletePostSuccess(key));
        successCallback();
    } catch (err: any) {
        errorCallback();
    }
}
