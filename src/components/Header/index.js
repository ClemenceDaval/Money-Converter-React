import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

const Header = ({ baseAmount }) => (
  <header className="header">
    <h1 className="header__title">Converter</h1>
    <p className="header__text">{baseAmount} {baseAmount > 1 ? 'euros' : 'euro'}</p>
  </header>
);

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
};

export default Header;
