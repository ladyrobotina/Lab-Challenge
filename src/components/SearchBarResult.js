import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Grid } from '@material-ui/core';

import * as actions from "../../../redux/actions";


import ProductListContainer from "../containers/ProductListContainer";
import AppNav from "./AppNav";
import ProductList from "./ProductList";
//import "./styles/Results.css";

const SearchBar = () => {
  const [query, setQuery] = useState([]);
  
  function onSearch(producto) {
    //Llamado a la API del clima
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const producto = {
            name: recurso.title, 
            image: recurso.thumbnail,
            price: recurso.price,
            
          };
          
        } else {
          alert("Producto no encontrado");
        }
      });

      setQuery(producto);
      
  }

return (
  <div className='Results'>
    <AppNav onSearch={onSearch} /> 
    <ProductList producto={producto} />
  </div>
);

}
export default SearchBar;