import '@styles/styles.less';
import '@styles/styles.scss';

import crudListRoute from '@features/crudList/routes';
import dndTableRoute from '@features/dndTable/routes';
import homePageRoute from '@features/homePage/routes';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter} from 'react-router-dom';

import App from './components/app/App';

const router = createBrowserRouter([
    ...homePageRoute,
    ...crudListRoute,
    ...dndTableRoute,
]);

// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
