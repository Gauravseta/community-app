/**
 * Dropdown component
 *
 * It's styled for tc communities
 */

/* global window */

import React from 'react';
import PT from 'prop-types';
import Select from 'react-select';
import './style.scss';

function Dropdown(props) {
  const { options, value, onChange } = props;

  return (
    <div styleName="container">
      <Select
        searchable={false}
        clearable={false}
        onChange={(option) => {
          if (value === option.value) return;
          const op = options.find(item => item.value === option.value) || {};
          if (onChange) {
            onChange(op);
            return;
          }
          if (op.redirect) window.location = op.redirect;
        }}
        options={options}
        value={value}
      />
    </div>
  );
}

Dropdown.defaultProps = {
  onChange: null,
};

const optionType = PT.shape({
  label: PT.string.isRequired,
  value: PT.string.isRequired,
});

Dropdown.propTypes = {
  options: PT.arrayOf(optionType).isRequired,
  value: PT.string.isRequired,
  onChange: PT.func,
};

export default Dropdown;
