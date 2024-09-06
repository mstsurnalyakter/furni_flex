import React, { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ProductsContext = createContext()

const ProductsProvider = ({children}) => {
      const [products, setProducts] = useState([]);
       useEffect(() => {
         fetch("products.json")
           .then((res) => res.json())
           .then((data) => setProducts(data));
       }, []);
       console.log(products);
  return (
    <ProductsContext.Provider value={products}>{children}</ProductsContext.Provider>
  )
}

ProductsProvider.propTypes = {}

export default ProductsProvider