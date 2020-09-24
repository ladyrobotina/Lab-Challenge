import React, { Component } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import AppNav from '../components/AppNav';
import './ProductListContainer.css'

import Pagination from '@material-ui/lab/Pagination';


class ProductListContainer extends Component {

    state = {
        // vamos a almacenar la data
        meliData: [],
        currentOffset: 0,
        pageCounter: 0,
        index: 0,
        limit: 30,
        newArray: [],
        condicion: '',
    }    
    
    componentDidMount(){
       this.fetchData(); 
    }

    // paginacion
    fetchData = (offSet = 0) => {
        // busqueda 
        const { match } = this.props
        const { query } = match.params
        
        // llamado a la api
        const url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;
        // crear parametros
        
        axios.get(url)
        .then(res =>{
            const { results } = res.data;

            // para actualizar ese state o esa meliData
            this.setState({
                // le estamos diciendo que va a tener esa constante
                meliData: results,
                // dividir el results de la peticion de la api por el limite
                index: Math.ceil(results.length/this.state.limit),
                // divide el array
                newArray: results.slice(this.state.currentOffset, this.state.currentOffset+this.state.limit),
            })
        })
        .catch(error =>{
            console.log(error);
        })
    }

    // trae el valor del boton de la paginacion
    handleChange = (e, value)  => {
        const selectPage = value -1;
        // multiplica para cambiar el valor del currentOffset
        const offSet = selectPage*this.state.limit;
        this.setState({
            pageCounter: selectPage,
            currentOffset: offSet,
        })

        this.fetchData()
    }

    // seleccionar la condicion     
    onSelectedChange = (e) => {
        if (e.target.value !== ''){
            this.setState({
                condicion:e.target.value
            })
            alert (e.target.value)
        }
    } 

    render(){

        // le vamos a pasar como props esa data que esta en el estado
        const { newArray, index, currentOffset, pageCounter } = this.state;
        //console.log(currentOffset)
        // solo queremos la data del estado

        // ordenar por precio
        const arrayOrdenado = newArray.sort((a, b) => {
            return b.price - a.price
        })

        // ordenar por condicion
        let arrayCondicion = newArray.map(filtrar => {
            return filtrar.condition
            })
            var newArrayCondicion = Array.from(new Set(arrayCondicion))
             console.log(newArrayCondicion)

        return(
            <div className='productList'>
                <AppNav/>
                <h1>Resultado de busqueda</h1>
                <div className='filtro' >
                {
                    newArrayCondicion.length===1?
                    <p>Solo hay una sola condicion</p>
                    :
                    newArrayCondicion.length > 1?
                    <select onChange={this.onSelectedChange}>
                        <option value='' >Filtrar por condicion</option>
                        {
                            newArrayCondicion.map(filtrado => {
                            return <option value={filtrado}>{filtrado}</option>
                            })
                        }
                    </select>
                    :
                    <span/>
                }
                </div>
                <ProductList arrayOrdenado={arrayOrdenado} condicion={this.state.condicion}  />
                
                <Pagination count={index} page={pageCounter} onChange={this.handleChange} />
            </div>
        );
    }
}

export default ProductListContainer;