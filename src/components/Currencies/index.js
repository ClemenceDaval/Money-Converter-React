import React from 'react';
import PropTypes from 'prop-types';

import Currency from './Currency';

import './currencies.scss';

const Currencies = ({
  currencies,
  changeCurrency,
  currencySearch,
  changeCurrencySearch,
}) => {
  function handleChange(event) {
    changeCurrencySearch(event.target.value);
  }

  return (
    <div className="currencies">
      <input type="text" className="currencies__search" placeholder="Research currency" value={currencySearch} onChange={handleChange} />
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
    </div>
  );
};

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape(
      {
        name: PropTypes.string.isRequired,
      },
    ).isRequired,
  ).isRequired,
  changeCurrency: PropTypes.func.isRequired,
  currencySearch: PropTypes.string.isRequired,
  changeCurrencySearch: PropTypes.func.isRequired,

};

export default Currencies;
