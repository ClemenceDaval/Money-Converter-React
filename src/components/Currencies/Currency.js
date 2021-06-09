import React from 'react';
import PropTypes from 'prop-types';

const Currency = ({ name, changeCurrency }) => (
  <li className="currencies__list__item" onClick={() => changeCurrency(name)}>
    {name}
  </li>
);

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  changeCurrency: PropTypes.func.isRequired,
};

export default Currency;
