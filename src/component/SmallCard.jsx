import React from "react";

function SmallCard({ url, location, distance }) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-2xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-200 ease-out">
      {/* left */}
      <div className="relative h-16 w-16">
        <img src={url} alt="img" className="w-full rounded-xl" />
      </div>
      {/* right */}
      <h2>{location}</h2>
      <h3 className="text-gray-500">{distance}</h3>
    </div>
  );
}

export default SmallCard;
