import React, {Fragment} from 'react';
import ProductCard from './ProductCard';
import { Grid } from '@material-ui/core';

function ProductList({newArray}) {
    return(
        <Fragment>
            <h1>Catalogo</h1>
            <Grid container spacing={24} justify='center' >
                {newArray.map(producto => {
                    return (
                    <Grid item md={3}>
                    <ProductCard to={`/productinfo/${producto.title}/${producto.id}`} name={producto.title} image={producto.thumbnail} price={producto.price} />
                    </Grid>);
                })}
            {/* metemos las cards dentro de esos grids */}
            </Grid>
            
        </Fragment>
    );
}

export default ProductList;

