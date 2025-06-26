import React, { useState } from "react";
import Attraction from "./Attraction";
import attractions from "../attractions.json";
import { FaSearch } from "react-icons/fa";
import bgImage from '../assets/images/background.jpg'

const AttractionsList = ({ isHome = false }) => {
//   console.log(attractions);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredAttractions = attractions.filter((attraction) => attraction.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const displayAttractions = isHome ? attractions.slice(0, 3) : filteredAttractions;

  return (
    <section className="bg-no-repeat bg-cover bg-top min-h-screen px-4 py-10" style={{backgroundImage: `url(${bgImage})`}}>
      <div className="container-xl lg:container m-auto">
        {!isHome && (
        //   <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">
        //     Browse Attractions
        //   </h2>
        <div className="relative mb-6 w-full max-w-2xl mx-auto">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
            type="text"
            placeholder="Search attractions..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 transition" />

        </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayAttractions.map((attraction) => (
            <Attraction key={attraction.id} attraction={attraction} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AttractionsList;
