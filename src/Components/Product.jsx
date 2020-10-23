import { h } from 'preact';
// import { useState, useEffect } from 'preact/hooks';

const Product = () => {
  return(
    <div className="w-full mb-6 h-auto bg-white rounded-3xl shadow-card-white flex flex-row items-center pl-3 py-4">
      <img src="https://bit.ly/3m9WDFh" alt="This is a product" className="w-20 h-20 shadow-xl border-white border-1 object-cover rounded-circular"/>
      <div className="flex flex-col pl-3 justify-between">
        <div className="font-hairline text-gray-700">Canon EOS 200D II 24.1MP </div>
        <div className="text-black">$200</div>
        <a href="/" className="rounded-b-md text-purple-600 self-end">Buy on Amazon &#8594;	</a>
      </div>
    </div>
  )
}

export default Product;