import '@styles/styles.less';
import '@styles/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import crudListRoute from './features/crudList/routes';
import dndTableRoute from './features/dndTable/routes';
import homePageRoute from './features/homePage/routes';

const router = createBrowserRouter([
    ...homePageRoute,
    ...crudListRoute,
    ...dndTableRoute,
]);

// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
