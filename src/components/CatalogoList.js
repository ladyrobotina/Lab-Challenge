import React, {Fragment} from 'react';
import CatalogoCard from './CatalogoCard';
import { Grid } from '@material-ui/core';

function CatalogoList({newArray, varMeli}) {
    return(
        <Fragment>
            
            <Grid container spacing={24} justify='center' >
                {newArray.map(producto => {
                    let image = producto.thumbnail.replace('I.jpg','B.jpg')
                    
                    return (
                    <Grid item md={4}>
                    <CatalogoCard to={`/catalogoinfo/${varMeli}/${producto.id}`} 
                    name={producto.title} image={image} price={producto.price} currency_id={producto.currency_id} />
                    </Grid>);
                })}
            {/* metemos las cards dentro de esos grids */}
            </Grid>
            
        </Fragment>
    );
}

export default CatalogoList;