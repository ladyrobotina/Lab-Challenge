import React, {Fragment} from 'react';
import ProductCard from './ProductCard';
import { Grid } from '@material-ui/core';

// en este componente renderizamos la busqueda ordenanda por precion y ademas 
// añadimos la condicion de mejorar la imagen 
// el filtro lo hacemos si llega algo al array, entonce filtramos por condicion

function ProductList({arrayOrdenado, condicion, varMeli}) {
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

                {/* aqui estan contenidos el array ordenado de los productos */}
                
                {
                    newCondicion && newCondicion.length ?

                        newCondicion.map(producto => {
                            let image = producto.thumbnail.replace('I.jpg','B.jpg')
                              
                        return (
                        <Grid item md={3}>
                        <ProductCard to={`/productinfo/${varMeli}/${producto.id} `} 
                        name={producto.title} 
                        image={image} 
                        price={producto.price}
                        condition={producto.condition} />
                        </Grid>);
                    })

                    :

                    arrayOrdenado.map(producto => {
                        let image = producto.thumbnail.replace('I.jpg','B.jpg')
                        
                    return (
                    <Grid item md={3}>
                    <ProductCard to={`/productinfo/${varMeli}/${producto.id} `} 
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

