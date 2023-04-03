import * as React from 'react';
// import { ErrorMessage } from './components/ErrorMessage';
// import { Loading } from './components/Loading';
// import { EditPost } from './pages/EditPost';
// import { NotFound } from './pages/NotFound';
// import { Posts } from './pages/Posts';
// import store from '@src/features/crudList/redux/store';
// import {Provider} from 'react-redux';

function CRUDList() {
    return (
        <div>CRUD List Page</div>
        // <Provider store={store}>
        //     <div className="App">
        //         <ErrorMessage />
        //         <Loading />
        //
        //         <Routes>
        //             <Route path="/" element={<Posts />} />
        //             <Route path="/posts/:postKey/edit" element={<EditPost />} />
        //             {/*<Route path="/" element={<Navigate to="/posts" />} />*/}
        //             <Route path="*" element={<NotFound />} />
        //         </Routes>
        //     </div>
        // </Provider>
    );
}

export default CRUDList;
