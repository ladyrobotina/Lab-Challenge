import React from 'react';
import { Link } from 'react-router-dom';
import AppNav from './AppNav';
import '../App.css';
import { carouselExampleSlidesOnly } from 'bootstrap';
import Slider from './Slider';

const Home = () => {

    return(
        <div className='App'>
            <AppNav/>
            <header className='App-header'>
                {/* <img src={process.env.PUBLIC_URL + '/images/mitiendita.png'} width='200' alt='tiendita' /> */}
                <h1>Labs Challenge</h1>
                <Slider/>
                <Link to='/products'>Pase</Link> 
            </header>
        </div>
    );
    
}

export default Home;