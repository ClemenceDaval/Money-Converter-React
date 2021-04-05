import React from 'react';
import PropTypes from 'prop-types';

import Currency from './Currency';

import './currencies.scss';

const Currencies = ({ currencies, changeCurrency }) => (
  <main className="currencies">
    <div className="currencies__title">Currencies</div>
    <ul className="currencies__list">
      {
        currencies.map((currency) => (
          <Currency
            changeCurrency={changeCurrency}
            key={currency.name}
            {...currency}
          />
        ))
      }
    </ul>
  </main>
);

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape(
      {
        name: PropTypes.string.isRequired,
      },
    ).isRequired,
  ).isRequired,
  changeCurrency: PropTypes.func.isRequired,
};

export default Currencies;
