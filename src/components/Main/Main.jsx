import React from 'react';

import Service from './Service/Service';
import BestSeller from './BestSeller/BestSeller';
import Interior from './Interior/Interior';
import Caring from './Caring/Caring';

const Main = () => (
  <div className="main">
    <div className="main__container">
      <Service />
      <BestSeller />
      <Interior />
      <Caring />
    </div>
  </div>
);

export default Main;
