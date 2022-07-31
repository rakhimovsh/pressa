import React from 'react';
import './styles.scss';
import ad1 from '../../assets/ad1.png';
import ad2 from '../../assets/ad2.png';

function Index() {
  return (
    <section>
      <div className="container ad__container">
        <img src={ad1} alt="ad" width={625} />
        <img src={ad2} alt="ad" />
      </div>
    </section>
  );
}

export default Index;