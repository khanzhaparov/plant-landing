/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import HeaderPicker from './HeaderPicker/HeaderPicker';
import headerLogo from '../../assets/img/header/Logo.svg';
import chart from '../../assets/img/header/chart.svg';
import search from '../../assets/img/header/btn-search-removebg-preview.png';
import './Header.scss';

const Header = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(0);

  const menuItems = ['Home', 'Shop', 'About', 'Contact'];

  return (
    <header className="header">
      <HeaderPicker />
      <div className="header__container">
        <div className="header__title row">
          <div className="title__logo col">
            <img src={headerLogo} alt="title logo" />
          </div>
          <div className="title__menu col">
            <ul className="menu__list">
              {menuItems.map((value, index) => (
                <li onClick={() => setActiveMenuItem(index)} className={activeMenuItem === index ? 'active' : ''}>{value}</li>
              ))}
            </ul>
          </div>
          <div className="title__button col">
            <a href="#">
              <img src={chart} alt="chart" />
            </a>
          </div>
        </div>
        <div className="header__content">
          <h1>Bring Serenity to Your Place With Interior Plants</h1>
          <p>find your dream plant for you home decoration with us, and we will make it happen.</p>
          <form className="header__search row">
            <input type="text" placeholder="Search plant" name="search" />
            <button type="submit">
              <img src={search} alt="search icon" />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
