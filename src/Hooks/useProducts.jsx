import { useContext } from 'react'
import  { ProductsContext } from '../providers/ProductsProvider'

const useProducts = () => {
    const products = useContext(ProductsContext);
  return products;
}

export default useProducts;