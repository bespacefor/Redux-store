import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
import './app.css';

const App = () => {
    return (
        <main role='main' className='container'>
            <Routes>
                <Route
                    path='/'
                    element={<HomePage />}
                    exact
                />
                <Route
                    path='/cart'
                    element={<CartPage />}
                />
            </Routes>

        </main>
    );
};

export default App;
