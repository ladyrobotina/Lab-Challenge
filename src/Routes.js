import React from 'react';
import { Switch , Route } from 'react-router-dom';
import Home from './components/Home';
import AppNav from './components/AppNav';
import ProductInfoContainer from './containers/ProductInfoContainer';
import ProductListContainer from './containers/ProductListContainer';
import CatalogoInfoContainer from './containers/CatalogoInfoContainer';
//import AppBar from './containers/AppBar';

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
           {/* <Route path='/products' component={ProductListContainer} /> */}
            <Route path='/products/:query' component={ProductListContainer} />
            <Route path='/productinfo/:url/:id' component={ProductInfoContainer} />
            <Route path='/catalogoinfo/:title/:id' component={CatalogoInfoContainer} />
        </Switch>
    );
}

export default Routes;