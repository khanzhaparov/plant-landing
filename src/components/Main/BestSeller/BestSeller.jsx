import React from 'react';

import firstPlant from '../../../assets/img/main/bestseller/1.png';
import secondPlant from '../../../assets/img/main/bestseller/2.png';
import thirdPlant from '../../../assets/img/main/bestseller/3.png';
import buttonPlus from '../../../assets/img/main/bestseller/akar-icons_circle-plus-fill.svg';
import stars from '../../../assets/img/main/bestseller/stars.svg';
import './BestSeller.scss';

const BestSeller = () => (
  <div className="bestseller row">
    <div className="bestseller__text col">
      <h2 className="text__title">Best Seller <br />Product</h2>
      <p className="text__subtitle">See all colection</p>
    </div>
    <div className="bestseller__content col">
      <div className="bestseller__cards row">
        <div className="card col">
          <div className="card-plant-img">
            <img src={firstPlant} alt="plant" />
          </div>
          <div className="card__white">
            <div className="white__up">
              <div className="white__up-title">Cammile</div>
              <img src={stars} alt="stars" />
            </div>
            <div className="white__down row">
              <div className="white__down-price col">$65.00</div>
              <button type="submit">
                <img src={buttonPlus} alt="add button" />
              </button>
            </div>
          </div>
        </div>
        <div className="card col">
          <div className="card-plant-img">
            <img src={secondPlant} alt="plant" />
          </div>
          <div className="card__white">
            <div className="white__up">
              <div className="white__up-title">Cammile</div>
              <img src={stars} alt="stars" />
            </div>
            <div className="white__down row">
              <div className="white__down-price col">$65.00</div>
              <button type="submit">
                <img src={buttonPlus} alt="add button" />
              </button>
            </div>
          </div>
        </div>
        <div className="card col">
          <div className="card-plant-img">
            <img src={thirdPlant} alt="plant" />
          </div>
          <div className="card__white">
            <div className="white__up">
              <div className="white__up-title">Cammile</div>
              <img src={stars} alt="stars" />
            </div>
            <div className="white__down row">
              <div className="white__down-price col">$65.00</div>
              <button type="submit">
                <img src={buttonPlus} alt="add button" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BestSeller;
