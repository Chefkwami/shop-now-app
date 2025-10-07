import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiShoppingCart } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";

function Headers() {
  return (
    
    <div className="@container bg-green-800 flex justify-between items-center gap-3 py-1 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <h1 className="text-4xl font-semibold p-4">Shop.ng</h1>
      <div className=" flex justify-center items-center">
      <input 
        className="h-10 w-100 p-4 rounded-tl rounded-bl text-sm bg-white text-black "
        placeholder="Search"
      />
      <button className="h-10 w-10 bg-green-400 rounded-tr rounded-br"><HiArrowRight className="ml-2.5 text-black"/></button>
      </div>
      <div className="flex justify-center items-center gap-8 text-xl p-4">
        <h3>Orders</h3>
        <div className="flex justify-center items-center gap-1">
          <HiShoppingCart />
          <h3>Cart</h3>
        </div>
      </div>
    </div>
    
  );
}

export default Headers;

<HiMagnifyingGlass />;
