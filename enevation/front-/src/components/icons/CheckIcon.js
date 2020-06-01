import React from 'react';
import theme from 'theme';
import PropTypes from 'prop-types';

/**
 * Close (X) icon
 *
 * @param {string} width
 * @param {string} color
 */
export const CheckIcon = ({ width, color }) => {
  const DEFAULT_WIDTH = '12';
  const DEFAULT_COLOR = theme.colors.primary.main;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width || DEFAULT_WIDTH}
      fill={theme.colors[color] || DEFAULT_COLOR}
      viewBox='0 0 37 32'
    >
      <path d='M11.243 23.184l-7.424-7.421-3.712 3.712 11.136 11.136 18.557-18.557-3.712-3.715-14.845 14.845zM33.512 0.915l-3.712 3.712 3.712 3.712 3.712-3.712-3.712-3.712z' />
    </svg>
  );
};

CheckIcon.propTypes = {
  width: PropTypes.any,
  color: PropTypes.any
};