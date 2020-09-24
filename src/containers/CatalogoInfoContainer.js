import React, { Component } from 'react';
import axios from 'axios';
import CatalogoInfo from '../components/CatalogoInfo'


// vamos a hacer una peticion a la api para que traiga la informacion de acuerdo al id que enviamos a la ruta
class CatalogotInfoContainer extends Component {
    
    state = {
        // vamos a almacenar la data
        meliData: []
    }    
    
    componentDidMount(){
        // destructurar
        const {match} = this.props
        const {title} = match.params
        // llamado a la api
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${title}`)
        .then(res =>{
            const {results} = res.data;
            console.log(results)

            // para actualizar ese state o esa meliData
            this.setState({
                // le estamos diciendo que va a tener esa constante
                meliData: results
            })
        })
        .catch(error =>{
            console.log(error);
        })
    }

    render(){
        const {match} = this.props
        const {id} = match.params
        const data = this.state.meliData
        const info = data.filter(infoProduct => {
            return infoProduct.id===id
        })
        console.log(info)
        return(
            <div>
            {info.map(producto =>{
                console.log(producto)
                let image = producto.thumbnail.replace('I.jpg','B.jpg')
                return (
                <CatalogoInfo name={producto.title} 
                image={image}
                price={producto.price}
                currency_id={producto.currency_id}
                available_quantity={producto.available_quantity}
                condition={producto.condition} />
                );
            })}
            </div>
        );

    }
}

export default CatalogotInfoContainer;