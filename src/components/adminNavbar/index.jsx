import React from 'react';
import './styles.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';

function Index() {
  return (
    <div className="admin">
      <Logo />
      <ul className='admin__list'>
        <li className='admin__item'>Bosh sahifa</li>
        <li className='admin__item'>Statistika</li>
        <li className='admin__item'>O’chirilganlar</li>
        <li className='admin__item'>Sozlamalar</li>
        <li className='admin__item'>Chiqish</li>
      </ul>
      <p>2022 All Rights</p>
    </div>
  );
}

export default Index;