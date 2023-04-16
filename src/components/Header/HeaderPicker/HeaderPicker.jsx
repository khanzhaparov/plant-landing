import React, { useState } from 'react';

import './HeaderPicker.scss';
import message from '../../../assets/img/header/Union.svg';
import pointProduct from '../../../assets/img/header/point-product.svg';

const HeaderPicker = () => {
  const [showCaption, setShowCaption] = useState(false);

  const handleClick = () => {
    setShowCaption(!showCaption); // toggle showCaption
  };

  return (
    <div className="header__picker" onClick={handleClick}>
      {showCaption && (
        <div className="picker__content">
          <div className="picker__message">
            <div className="message__image">
              <img src={message} alt="message" />
            </div>
            <div className="message__text">
              <div className="message__price">$65.00</div>
              <div className="message__title">Dracena Fragnas</div>
            </div>
          </div>
        </div>
      )}
      <img src={pointProduct} alt="picker" className="picker-point" />
    </div>
  );
};

export default HeaderPicker;
