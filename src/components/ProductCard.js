import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography, colors } from '@material-ui/core';
import { Link } from 'react-router-dom';

function ProductCard({ name, classes, image, price, condition, to, permalink, url }){
    return(
        // construccion de la card
        <Card className={classes.item}>
            <CardMedia className={classes.media} image={image} />
            <CardContent>
                <Link to={to}><Typography component='p' variant='p' color='textPrimary' >{name}</Typography></Link>
                
            </CardContent>   
            <CardContent>
            <Typography component='p' variant='p' color='textPrimary' >${price}</Typography>
            </CardContent>   
            <CardContent>
            <Typography component='p' variant='p' color='textPrimary' >Condicion: {condition}</Typography>
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
})(ProductCard);