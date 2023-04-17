import './App.scss';

import Contacts from '@features/contacts/Contacts';
import HomePage from '@features/homePage/HomePage';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import MainLayout from '@components/layout/MainLayout';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path='portfolio' element={<Portfolio />} />
                    <Route path='contact' element={<Contacts />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

function Portfolio(): JSX.Element {
    return (
        <div>
            {' '}
            <h1>Portfolio</h1>
        </div>
    );
}
