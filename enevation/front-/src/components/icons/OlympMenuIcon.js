import React from 'react';
import theme from 'theme';
import PropTypes from 'prop-types';

/**
 * Close (X) icon
 *
 * @param {string} width
 * @param {string} color
 */
export const OlympMenu = ({ width, color }) => {
  const DEFAULT_WIDTH = '12';
  const DEFAULT_COLOR = theme.colors.primary.main;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width || DEFAULT_WIDTH}
      fill={theme.colors[color] || DEFAULT_COLOR}
      viewBox='0 0 41 32'
    >
      <path d='M4.571 0h-4.571v4.571h4.571v-4.571zM9.143 0v4.571h32v-4.571h-32zM13.714 13.714h-13.714v4.571h13.714v-4.571zM18.286 13.714v4.571h4.571v-4.571h-4.571zM27.429 18.286h13.714v-4.571h-13.714v4.571zM0 32h32v-4.569h-32v4.569zM36.571 32h4.571v-4.569h-4.571v4.569z' />
    </svg>
  );
};

OlympMenu.propTypes = {
  width: PropTypes.any,
  color: PropTypes.any
};