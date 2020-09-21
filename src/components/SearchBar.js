import React, { useState } from "react";
import ProductListContainer from "../containers/ProductListContainer";
import ProductList from "./ProductList";
import { Link } from 'react-router-dom';

export default function SearchBar({onSearch}) {
  const [query, setQuery] = useState("");
  
  
  return (
    <form onSubmit={(e) => {
     e.preventDefault();
      onSearch(query);
    }}>
      <input
        type="text"
        placeholder="Productos..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <Link to={`/products/${query}`} >
        <input type="submit" value="Buscar" />
      </Link>
    </form>
  );
}