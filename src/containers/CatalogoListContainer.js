import React, { Component } from 'react';
import axios from 'axios';
import CatalogoList from '../components/CatalogoList';

import Pagination from '@material-ui/lab/Pagination';


class CatalogoListContainer extends Component {

    state = {
        // vamos a almacenar la data
        meliData: [],
        currentOffset: 0,
        pageCounter: 0,
        index: 0,
        limit: 30,
        newArray: [],
        varMeli: 'MLA',
    }    
    
    componentDidMount(){
       this.fetchData(); 
    }

    // paginacion
    fetchData = (offSet = 0) => {
        
        // const { match } = this.props
        // const { query } = match.params
        
        // llamado a la api
        const url = `https://api.mercadolibre.com/sites/MLA/search?q=MLA`;
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

         
        

    render(){

        // le vamos a pasar como props esa data que esta en el estado
        const { newArray, index, currentOffset, pageCounter, varMeli } = this.state;
        //console.log(currentOffset)
        // solo queremos la data del estado

        return(
            <div className='catalogoList'>
                
                <CatalogoList newArray={newArray} varMeli={varMeli} />
                
                <Pagination count={index} page={pageCounter} onChange={this.handleChange} />
            </div>
        );
    }
}

export default CatalogoListContainer;