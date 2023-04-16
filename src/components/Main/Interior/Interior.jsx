import React from 'react';

import './Interior.scss';

import livingroom from '../../../assets/img/main/interior/livingroom.png';
import small from '../../../assets/img/main/interior/small.png';
import tall from '../../../assets/img/main/interior/tall.png';

const Interior = () => (
  <div className="interior">
    <h2>Interior Plant Reference</h2>
    <p>make your home so comfortable with refreshing plants</p>
    <div className="interior__content row">
      <div className="interior__content-left col">
        <div className="interior__content-left__images row">
          <div className="livingroom">
            <img src={livingroom} alt="livingroom" />
          </div>
          <div className="small">
            <img src={small} alt="small" />
          </div>
        </div>
      </div>
      <div className="interior__content-right col">
        <div className="tall">
          <img src={tall} alt="tall" />
        </div>
      </div>
    </div>
  </div>
);

export default Interior;
