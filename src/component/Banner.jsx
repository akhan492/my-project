import React from "react";

function Banner() {
  return (
    <>
      <div className="relative h-[300px] sm:h-[400px] lg-h-[500px] xl:h-[600px] 2xl:h-[800px]">
        <img
          className="w-full h-full"
          src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg"
          alt="banner"
        />
        <div className="absolute top-1/2 w-full text-center">
          <p className="text-sm sm:text-lg">Not sure Where to go? Perfect.</p>
          <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-2 hover:shadow-xl active:scale-90 transition duration-150">
            i'm flexiable
          </button>
        </div>
      </div>
    </>
  );
}

export default Banner;
