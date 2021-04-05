/* eslint-disable react/prefer-stateless-function */
// == Import npm
import React from 'react';

// == Import locaux
import currenciesData from 'src/data/currencies';

import Header from '../Header';
import Currencies from '../Currencies';
import Amount from '../Amount';

import './converter.scss';

class Converter extends React.Component {
  state = {
    baseAmount: 1,
    currency: 'United States Dollar',
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

  render() {
    const { baseAmount, currency } = this.state;
    const convertedAmount = this.getConvertedAmount();

    return (
      <div className="converter">
        <Header baseAmount={baseAmount} />
        <Currencies currencies={currenciesData} changeCurrency={this.setCurrency} />
        <Amount amount={convertedAmount} currency={currency} />
      </div>
    );
  }
}

// == Export
export default Converter;
