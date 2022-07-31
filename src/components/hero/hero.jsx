import React from 'react';
import './hero.scss'
import SearchTable from '../searchTable';

function Hero() {
  return (
    <section className='hero'>
      <div className='container hero__container'>
        <h1 className='hero__title'>Eng so’ngi master klasslar va tadbirlar bizning saytda</h1>
        <SearchTable/>
      </div>
    </section>
  );
}

export default Hero;