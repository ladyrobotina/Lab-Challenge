import React from 'react';
import { Link } from 'react-router-dom';
import AppNav from './AppNav';
import '../App.css';
import CatalogoListContainer from './CatalogoList';
import Slider from './Slider';

const Home = () => {

    return(
        <div className='App'>
            <AppNav/>
            
            <header className='App-header'>
                
                <h1>Labs Challenge</h1>
                <h2>Henry Store</h2>
                 {/* <CatalogoListContainer/>  */}
            </header>
        </div>
    );
    
}

export default Home;