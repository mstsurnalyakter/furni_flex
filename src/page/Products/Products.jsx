import React from 'react'
import useProducts from '../../Hooks/useProducts';
import Sidebar from '../../components/Sidebar';
import ProductCard from '../../components/ProductCard';

const Products = () => {
  const products = useProducts();
  console.log("products",products);
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-7 ">
        <div className="lg:col-span-2">
          <Sidebar />
        </div>
        <div className="lg:col-span-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {products?.length &&
              products.map((item) => <ProductCard key={item.id} item={item} />)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products