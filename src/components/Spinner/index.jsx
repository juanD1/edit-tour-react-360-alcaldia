import React from 'react';
import { DefaultSpinner } from './styles';

const Spinner = ({ color, size, sizeUnit }) => (
  <DefaultSpinner color={color} size={size} sizeUnit={sizeUnit}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </DefaultSpinner>
);

Spinner.defaultProps = {
  size: 50,
  color: '#a5180dcc',
  sizeUnit: 'px',
};

export default Spinner;
