import * as React from 'react';
import {Provider} from 'react-redux';
import {Route, Routes} from 'react-router-dom';

import store from '@src/features/crudList/redux/store';

import {ErrorMessage} from './components/ErrorMessage';
import {Loading} from './components/Loading';
import {EditPost} from './pages/EditPost';
import {NotFound} from './pages/NotFound';
import {Posts} from './pages/Posts';

function CRUDList() {
    return (
        <Provider store={store}>
            <div className="App">
                <ErrorMessage />
                <Loading />

                <Routes>
                    <Route path="/" element={<Posts />} />
                    <Route path="/posts/:postKey/edit" element={<EditPost />} />
                    {/*<Route path="/" element={<Navigate to="/posts" />} />*/}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Provider>
    );
}

export default CRUDList;
