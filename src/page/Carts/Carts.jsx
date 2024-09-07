import React, { useState } from 'react'
import useGetProducts from '../../Hooks/useGetProducts';
import { RxCross1 } from "react-icons/rx";
import { removeProductIdFromLS } from '../../utils/localStore';
const Carts = () => {
    const addProducts= useGetProducts();
    const handleRemoveProduct = (id) =>{
        removeProductIdFromLS(id);
    }

    const totalDiscountPrice = addProducts.reduce(
      (sum, item) => sum + item.discount_price,
      0
    );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 grid grid-cols-1 gap-4">
        {addProducts?.map((product) => (
          <div className="bg-[#DEDEDE] flex justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-2 border-2 px-3">
                <button className="border-r-2 pr-2">-</button>
                <span>1</span>
                <button className="border-l-2 pl-2">+</button>
              </div>
              <img className="w-24 h-24" src={product?.image} alt="" />
              <h3>{product?.name}</h3>
            </div>
            <div className="flex flex-col justify-between">
              <button
                onClick={() => handleRemoveProduct(product?.id)}
                className="border-2 p-3 rounded-full"
              >
                <RxCross1 />
              </button>
              <h3>{product?.discount_price}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="w-1/3 lg:w-full space-y-4">
        <div className="bg-[#FAFAFA]  p-5 flex flex-col gap-3">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$ {totalDiscountPrice}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between">
            <div className="flex  items-center gap-1">
              <span>Estimated Tax</span>
              <img src="information-circle.png" alt="" />
            </div>
            <span>$-</span>
          </div>
          <div className="flex justify-between">
            <b>Total</b>
            <b>{totalDiscountPrice}</b>
          </div>
        </div>
        <button className="bg-[#202020] w-full py-2 text-white rounded-md">Go to Checkout</button>
      </div>
    </div>
  );
}

export default Carts
