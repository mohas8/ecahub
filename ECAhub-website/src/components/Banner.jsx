import React from "react";
import { Link } from "react-router-dom";
import {FaArrowRight} from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="px-4 py-32 bg-black mx-auto">
      <div className="text-white text-center">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5"> Welcome to ECAhub</h1>
        <h2 className="text-gray-100 lg: w-3/5 mx-auto mb-5 font-primary">Your go-to hub for discovering exciting opportunities</h2>
        <div>
          <Link to="/" className="bg-orange-500 text-white px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 inline-flex items-center transition-all duration-200 ease-in">Explore Scholarships<FaArrowRight className="mt-1 ml-2"/></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
