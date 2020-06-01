import React from 'react';
import theme from 'theme';
import PropTypes from 'prop-types';

/**
 * Close (X) icon
 *
 * @param {string} width
 * @param {string} color
 */
export const RewardIcon = ({ width, color }) => {
  const DEFAULT_WIDTH = '12';
  const DEFAULT_COLOR = theme.colors.primary.main;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width || DEFAULT_WIDTH}
      fill={theme.colors[color] || DEFAULT_COLOR}
      viewBox='0 0 16 20'
    >
      <path d='M16,7h-5l4-7L3.3,0L0,11h3l-1,9l3-2.8v-3.1L4,15l1-6H3l2-7h6L8,9h3v2.6L16,7z M7,14h2v-2H7V14z' />
    </svg>
  );
};

RewardIcon.propTypes = {
  width: PropTypes.any,
  color: PropTypes.any
};