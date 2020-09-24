import React, {Fragment} from 'react';
import ProductCard from './ProductCard';
import { Grid } from '@material-ui/core';

function ProductList({arrayOrdenado, condicion}) {
    let newCondicion = []
    if (condicion){
        newCondicion = [... arrayOrdenado.filter(c => {
            return c.condition === condicion
        })]
        console.log(newCondicion)
    }
    return(
        <Fragment>
            {/* <h1>Resultado de busqueda</h1> */}
            <Grid container spacing={24} justify='center' >
                
                {
                    newCondicion && newCondicion.length ?

                        newCondicion.map(producto => {
                            let image = producto.thumbnail.replace('I.jpg','B.jpg')
                            let cardTitle = producto.title.split(' ').join('-')   
                        return (
                        <Grid item md={3}>
                        <ProductCard to={`/productinfo/${cardTitle}/${producto.id} `} 
                        name={producto.title} 
                        image={image} 
                        price={producto.price}
                        condition={producto.condition} />
                        </Grid>);
                    })

                    :

                    arrayOrdenado.map(producto => {
                        let image = producto.thumbnail.replace('I.jpg','B.jpg')
                        let cardTitle = producto.title.split(' ').join('-')
                    return (
                    <Grid item md={3}>
                    <ProductCard to={`/productinfo/${cardTitle}/${producto.id} `} 
                    name={producto.title} 
                    image={image} 
                    price={producto.price}
                    condition={producto.condition} />
                    </Grid>);
                })}
            {/* metemos las cards dentro de esos grids */}
            </Grid>
            
        </Fragment>
    );
}

export default ProductList;

