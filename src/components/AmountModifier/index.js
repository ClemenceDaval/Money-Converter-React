import React from 'react';
import PropTypes from 'prop-types';

import './amountModifier.scss';

const AmountModifier = ({ baseAmount, changeBaseAmount }) => {
  function handleChange(event) {
    changeBaseAmount(event.target.value);
  }

  return (
    <div className="amountModifier">
      <p className="amountModifier__text"> Amount in EURO : </p>
      <input type="number" className="amountModifier__input" placeholder="Enter an amount" value={baseAmount} onChange={handleChange} min="0" />
      <p className="amountModifier__text">  </p>
    </div>
  );
};

AmountModifier.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  changeBaseAmount: PropTypes.func.isRequired,
};

export default AmountModifier;
