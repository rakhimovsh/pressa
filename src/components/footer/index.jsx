import React from 'react';
import './styles.scss'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import tel from '../../assets/tel.png'
import fav from  '../../assets/fav.png'

function Index() {
  return (
    <footer>
      <div className='container footer__container'>
        <Logo/>
        <nav className='footer__nav'>
          <ul className='footer__list'>
            <li className='footer__item'><Link to='/'>Biz haqimizda</Link></li>
            <li className='footer__item'><Link to='/'>Savol va Javoblar</Link></li>
          </ul>
          <img src={tel} alt='img'/>
          <img src={fav} alt='img'/>
        </nav>
      </div>
    </footer>
  );
}

export default Index;