/* eslint-disable react/prefer-stateless-function */
// == Import npm
import React from 'react';

// == Import locaux
import currenciesData from 'src/data/currencies';

import Header from '../Header';
import Currencies from '../Currencies';
import Amount from '../Amount';
import Toggler from '../Toggler';

import './converter.scss';

class Converter extends React.Component {
  state = {
    open: false,
    baseAmount: 1,
    currency: 'United States Dollar',
    currencySearch: '',
  };

  setCurrency = (newCurrencyValue) => {
    console.log('set currency définie dans Converter');

    this.setState({
      currency: newCurrencyValue,
    });
  }

  getConvertedAmount() {
    const { baseAmount, currency } = this.state;
    // on fait un find sur la currency pour trouver le rate
    const currencyObject = currenciesData.find(
      (currencyData) => currencyData.name === currency,
    );
    // on récupère le taux associé
    const { rate } = currencyObject;
    // on multiplie le rate avec le baseAmount
    const amount = rate * baseAmount;
    // on retourne la valeur arrondie au centième
    return Math.round(amount * 100) / 100;
  }

  setCurrencySearch = (newCurrencySearch) => {
    this.setState(
      {
        currencySearch: newCurrencySearch,
      },
    );
  }

  getFilteredCurrencies() {
    const { currencySearch } = this.state;

    const filteredCurrencies = currenciesData.filter(
      (currencyData) => currencyData.name.includes(currencySearch),
    );

    return filteredCurrencies;
  }

  toggle = () => {
    // console.log('exécution de toggle');
    // console.log(this);

    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  render() {
    const { open, baseAmount, currency, currencySearch } = this.state;
    const convertedAmount = this.getConvertedAmount();
    const filteredeCurrencies = this.getFilteredCurrencies();

    return (
      <div className="converter">
        <Header baseAmount={baseAmount} />
        <Toggler open={open} doToggle={this.toggle} />
        {
          open && (
            <Currencies
              currencies={filteredeCurrencies}
              changeCurrency={this.setCurrency}
              currencySearch={currencySearch}
              changeCurrencySearch={this.setCurrencySearch}
            />
          )
        }
        <Amount amount={convertedAmount} currency={currency} />
      </div>
    );
  }
}

// == Export
export default Converter;
