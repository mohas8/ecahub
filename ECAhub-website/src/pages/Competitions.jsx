import React from "react";
import Opportunities from "../components/Opportunities";

const Competitions = () => {
  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl font-bold lg:text-7xl leading-snug mb-10">Competitions</h2>
        <h2 className="text-gray-100 lg: w-3/5 mx-auto mb-5 font-primary">Find the right competitions</h2>
      </div>
      <div className="max-w-7xl mx-auto">
        <Opportunities />

      </div>
    </div>
  );
};

export default Competitions;
