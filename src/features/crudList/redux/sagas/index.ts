import {all, takeEvery} from 'redux-saga/effects';

import {
    POSTS_FETCH_START,
    POST_DELETE_START,
    POST_EDIT_START,
    SINGLE_POST_FETCH_START,
} from '../constants/posts';
import {
    handleDeletePost,
    handleEditPost,
    handleFetchPosts,
    handleFetchSinglePost,
} from './posts';

function* rootSaga() {
    yield all([
        takeEvery(POSTS_FETCH_START, handleFetchPosts),
        takeEvery(SINGLE_POST_FETCH_START, handleFetchSinglePost),
        takeEvery(POST_EDIT_START, handleEditPost),
        takeEvery(POST_DELETE_START, handleDeletePost),
    ]);
}

export default rootSaga;
