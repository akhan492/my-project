import React, { lazy, useEffect } from "react";
import Header from "./component/Header";
import Banner from "./component/Banner";
import data from "./component/data.json";
import SmallCard from "./component/SmallCard";
import CardData from "./component/Cardsdata.json";
import MediumCard from "./component/MediumCard";
import LargeCard from "./component/LargeCard";
import Footer from "./component/Footer";
function App() {
  return (
    <>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data?.map((item, index) => {
            return (
              <SmallCard
                key={index}
                url={item.img}
                location={item.location}
                distance={item.distance}
              />
            );
          })}
        </div>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide py-2 -m-3">
            {CardData?.map((item, index) => {
              return (
                <MediumCard key={index} img={item.img} title={item.title} />
              );
            })}
          </div>
        </section>

        <LargeCard  img="https://links.papareact.com/4cj" title="The Greatest Outdoors" discription="Wishlist curated by Airbnb." buttonText="Get Inspired"/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
