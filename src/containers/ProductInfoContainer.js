import React, { Component } from 'react';
import axios from 'axios';
import ProductInfo from '../components/ProductInfo'


// vamos a hacer una peticion a la api para que traiga la informacion de acuerdo al id que enviamos a la ruta
class ProductInfoContainer extends Component {
    
    state = {
        // vamos a almacenar la data
        meliData: [],
    }    
    
    componentDidMount(){
        // destructurar
         const {match} = this.props
         const {title, id} = match.params
         const name = title.split('-').join(' ')
        
        
        // llamado a la api
        
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${name}`)
           .then(res =>{
            const {results} = res.data;
            console.log(results)

            // para actualizar ese state o esa meliData
            this.setState({
                // le estamos diciendo que va a tener esa constante
                meliData: results.filter(r => {
                    return r.id===id
                })
            })
        })
        .catch(error =>{
            console.log(error);
        })
    }

    render(){
                
        const data = this.state.meliData
        console.log(data)
        
        
        
        return(
            <div>
            {data.map(producto =>{
                let image = producto.thumbnail.replace('I.jpg','B.jpg')
                return (
                <ProductInfo name={producto.title} 
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

export default ProductInfoContainer;