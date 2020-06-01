import React from 'react';
import theme from 'theme';
import PropTypes from 'prop-types';

/**
 * Close (X) icon
 *
 * @param {string} width
 * @param {string} color
 */
export const LoadMoreButton = ({ width, color }) => {
  const DEFAULT_WIDTH = '12';
  const DEFAULT_COLOR = theme.colors.primary.main;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width || DEFAULT_WIDTH}
      fill={theme.colors[color] || DEFAULT_COLOR}
      viewBox='0 0 128 32'
    >
      <path d='M112-0.008c-8.84 0-16 7.16-16 16 0 8.832 7.16 15.992 16 15.992s16-7.16 16-15.992c0-8.84-7.16-16-16-16zM64-0.008c-8.84 0-16 7.16-16 16 0 8.832 7.16 15.992 16 15.992s16-7.16 16-15.992c0-8.84-7.16-16-16-16zM16-0.008c-8.832 0-16 7.16-16 16s7.168 15.992 16 15.992 16-7.16 16-15.992c0-8.84-7.16-16-16-16z'></path>
    </svg>
  );
};

LoadMoreButton.propTypes = {
  width: PropTypes.any,
  color: PropTypes.any,
};
