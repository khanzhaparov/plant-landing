import React from 'react';

import sun from '../../../assets/img/main/caring/icon-park-outline_sun.svg';
import water from '../../../assets/img/main/caring/akar-icons_water.svg';
import plant from '../../../assets/img/main/caring/charm_plant-pot.svg';
import tabler from '../../../assets/img/main/caring/tabler_temperature.svg';
import rightImage from '../../../assets/img/main/caring/unsplash_sEApBUS4fIk.png';

import './Caring.scss';

const Caring = () => (
  <div className="caring row">
    <div className="caring__left col">
      <h2>How to care <br /> for plants</h2>
      <p>Take care of plants with all your heart</p>
      <div className="caring__left-content">
        <div className="card row">
          <div className="card__image col">
            <img src={sun} alt="sun" />
          </div>
          <div className="card__text col">
            <div className="title">Adjust Lighting</div>
            <div className="subtitle">When caring for indoor plants, make sure the <br /> room temperature is neither too cold nor too hot</div>
          </div>
        </div>
        <div className="card row">
          <div className="card__image col">
            <img src={water} alt="water" />
          </div>
          <div className="card__text col">
            <div className="title">Don't water too often</div>
            <div className="subtitle">Watering ornamental plants indoors does <br />not have to be done every day.</div>
          </div>
        </div>
        <div className="card row">
          <div className="card__image col">
            <img src={plant} alt="plant" />
          </div>
          <div className="card__text col">
            <div className="title">Don't water too often</div>
            <div className="subtitle">Watering ornamental plants indoors does <br />not have to be done every day.</div>
          </div>
        </div>
        <div className="card row">
          <div className="card__image col">
            <img src={tabler} alt="tabler" />
          </div>
          <div className="card__text col">
            <div className="title">Fertilize regularly</div>
            <div className="subtitle">The nutrients most indoor houseplants need are <br /> nitrogen for balance and potassium for stem <br />strength</div>
          </div>
        </div>
      </div>
    </div>
    <div className="caring__right col">
      <div className="caring__right-image">
        <img src={rightImage} alt="fucker" />
      </div>
    </div>
  </div>
);

export default Caring;
