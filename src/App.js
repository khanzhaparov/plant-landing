import React from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import './scss/App.scss';

const App = () => (
  <div className="wrapper">
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
