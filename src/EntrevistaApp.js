import React from 'react';
import './App.css'
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';

export const EntrevistaApp = ()=>{
    return(
        <div className="container">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}