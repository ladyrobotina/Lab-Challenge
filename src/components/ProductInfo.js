import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { useEffect } from 'react'

const useStyles = makeStyles({
    
    root: {
      maxWidth: 345,
      padding: 30,
      margin: '60px auto',
      
    },
  });

function ProductInfo({ name, image, price, currency_id, available_quantity, condition, url, permalink  }){

    const classes = useStyles();
    

//      var url = window.location.href;
//      //Esta variable separa la url conn "/", para luego tomar el ultimo valor 
//      var separarUrl = url.split("/");
//      //Esta variable toma el ultimo valor de la URL, para hacerla dinamica
//      var tomarUltValor = separarUrl.pop();
//      //URL dinamica
//      var urlreal = `http://localhost:3000/products/${tomarUltValor}`;

//      // recibe como parámetro una función que se ejecutará cada vez que nuestro componente se renderice, ya sea por un cambio de estado
//    useEffect(() => {
//      fetch(`http://localhost:3000/products/${tomarUltValor}`)
//        .then((response) => response.json())

//        .then(producto => {

//          setDetalles({
//            id: producto[0].id,
//            name: producto[0].name,
//            price: producto[0].price,
//            currency_id: producto[0].currency_id,
//            available_quantity: producto[0].available_quantity,
//            image: producto[0].image,
//            condition: producto[0].condition
           
//          })
//        })
//        .catch(error => {
//          return error;
//        })


//    }, []);

    return(
        // construccion de la card
        
        <Card className={classes.root}>
            <CardActionArea>
            <CardMedia component="img" height="240" image={image} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" >Producto: {name}</Typography>
                <Typography component='p' variant='p' color='textPrimary' >Precio: ${price}</Typography>
                <Typography component='p' variant='p' color='textPrimary' >Moneda: {currency_id}</Typography>
                <Typography component='p' variant='p' color='textPrimary' >Cantidad disponible: {available_quantity}</Typography>
                <Typography component='p' variant='p' color='textPrimary' >Condicion: {condition}</Typography>
                
            </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" color="primary" href="#contained-buttons">
                <Link to='/products'>
                    Volver
                    </Link>
                </Button>
            </CardActions>           
        </Card>
    );
}

export default ProductInfo;