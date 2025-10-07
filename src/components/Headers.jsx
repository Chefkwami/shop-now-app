import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

import { HiArrowRight } from "react-icons/hi";
import {Link} from "react-router"





function Headers() {
  return (
    <div className="@container bg-green-800 flex justify-between items-center gap-3 py-2 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <h1 className="text-4xl font-semibold p-4">Shop.ng</h1>
      <div className=" flex justify-center items-center">
        <input
          className="h-12 w-100 p-4 rounded-tl rounded-bl text-sm bg-white text-black "
          placeholder="Search"
        />
        <button className="h-12 w-12 bg-green-400 rounded-tr rounded-br">
          <HiArrowRight className="ml-4 text-black" />
        </button>
      </div>
      <div className="flex justify-center items-center gap-6 text-sm p-4">
        <button className="border-white">
          Login
        </button>
        <button className=" text-white border border-white border-solid rounded h-12 w-35 cursor-pointer shadow-green-800">
          <Link to="/create">
          Create Account
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Headers;

<HiMagnifyingGlass />;
