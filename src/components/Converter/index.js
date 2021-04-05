import React from 'react';

// == Import
import Header from '../Header';
import Currencies from '../Currencies';
import Amount from '../Amount';
import './converter.scss';

// == Composant
const Converter = () => (
  <div className="converter">
    <Header />
    <Currencies />
    <Amount />
  </div>
);

// == Export
export default Converter;
