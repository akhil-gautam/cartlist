import { h } from 'preact';
// import { useState, useEffect } from 'preact/hooks';
import Product from './Product';

const CartList = () => {
  return(
    <div className="flex flex-col px-4 mt-2">
      <a href="/" className="text-2xl font-semibold text-blue-800 rounded-sm flex items-baseline">+ Create</a>
      <div className="text-2xl font-bold mx-auto my-4">Cart List</div>
      {
        [1,2,3,4,5,6,7,8,9,0,2].map(_ => {
          return (<Product/>)
        })
      }
    </div>
  )
}

export default CartList;