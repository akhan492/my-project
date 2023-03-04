import React from "react";

function LargeCard({ img, title, discription, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <img className="w-full h-full object-cover rounded-2xl" src={img} alt="img" />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{discription}</p>
        <button className="text-sm text-white bg-gray-900 py-2 px-4 rounded-lg mt-5">{buttonText}</button>
      </div>
    </section>
  );
}

export default LargeCard;
