import React from 'react';

import { Navbar } from './Navbar/Navbar';
import { HeroSection } from './HeroSection/HeroSection';
import { Card } from './Card/Card';

import data from '../data/data';

import './../styles/normalize.css';
import './../styles/global.css';

export const App = () => {
  console.log(data);

  const cardsElement = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}

        /* 
        We can replace it by item 

        img={`/image${card.coverImg}.png`}
        rating={card.stats.rating}
        location={card.location}
        title={card.title}
        price={card.price}
        reviewCount={card.stats.reviewCount}
        openSpots={card.openSpots}
        */
      />
    );
  });

  return (
    <div className="container">
      <Navbar />
      <HeroSection />
      <section className="cardsList">{cardsElement}</section>
    </div>
  );
};
