import { useContext } from 'react'
import ProductsProvider from '../providers/ProductsProvider'

const useProducts = () => {
    const products = useContext(ProductsProvider)
  return products;
}

export default useProducts;