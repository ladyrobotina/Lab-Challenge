import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography, colors } from '@material-ui/core';
import { Link } from 'react-router-dom';

function CatalogoCard({ name, classes, image, price, currency_id, to }){
    return(
        // construccion de la card
        <Card className={classes.item}>
            <CardMedia className={classes.media} image={image} />
            <CardContent>
                <Link to={to}><Typography component='p' variant='h6' color='textPrimary' >{name}</Typography></Link>
                
            </CardContent>   
            <CardContent>
            <Typography component='p' variant='p' color='textPrimary' >Precio ${price}</Typography>
            </CardContent>
            <CardContent>
            <Typography component='p' variant='p' color='textPrimary' >Moneda: {currency_id}</Typography>
            </CardContent>          
        </Card>
    );
}

export default withStyles({
    item:{
        Width: '350px',
        height: '500px',
        margin: '1em',
        textAlign: 'center',
        boxSizing: 'border-box',
        margin: '2em',
        padding: '1em',
    },
    media:{
        height: '250px',
              
    }
})(CatalogoCard);