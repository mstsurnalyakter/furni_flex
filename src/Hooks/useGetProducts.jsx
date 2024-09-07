import React, { useEffect, useState } from 'react'
import useProducts from './useProducts'
import { getProductLS } from '../utils/localStore';

const useGetProducts = () => {
    const products = useProducts();
    const [addProducts,setAddProducts] = useState([]);

    useEffect(()=>{
        const getCartProductsId = getProductLS();
        const filterProducts = products.filter(product=>getCartProductsId.includes(product?.id));
        setAddProducts(filterProducts);
    },[products]);

  return addProducts;
}

export default useGetProducts