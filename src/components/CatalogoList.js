import React, {Fragment} from 'react';
import CatalogoCard from './CatalogoCard';
import { Grid } from '@material-ui/core';

function CatalogoList({newArray}) {
    return(
        <Fragment>
            
            <Grid container spacing={24} justify='center' >
                {newArray.map(producto => {
                    return (
                    <Grid item md={3}>
                    <CatalogoCard to={`/catalogoinfo/${producto.title}/${producto.id}`} 
                    name={producto.title} image={producto.thumbnail} price={producto.price} />
                    </Grid>);
                })}
            {/* metemos las cards dentro de esos grids */}
            </Grid>
            
        </Fragment>
    );
}

export default CatalogoList;