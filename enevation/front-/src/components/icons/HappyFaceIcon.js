import React from 'react';
import theme from 'theme';
import PropTypes from 'prop-types';

/**
 * Envelope open (message) icon
 *
 * @param {string} width
 * @param {string} color
 */
export const HappyFaceIcon = ({ width, color }) => {
  const DEFAULT_WIDTH = '23';
  const DEFAULT_COLOR = theme.colors.text.secondary;

  return (
    <svg
      width={width || DEFAULT_WIDTH}
      fill={theme.colors[color] || DEFAULT_COLOR}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
    >
      <path d='M16 0c-8.837 0-16 7.16-16 15.989 0 7.166 4.715 13.227 11.213 15.262v-3.39c-4.69-1.899-8-6.49-8-11.859 0-7.070 5.731-12.802 12.8-12.802s12.8 5.731 12.8 12.802c0 5.37-3.312 9.96-8 11.859v3.378c6.485-2.040 11.187-8.094 11.187-15.25 0-8.829-7.165-15.989-16-15.989zM11.211 12.8h-3.2v3.202h3.2v-3.202zM20.813 12.8v3.202h3.2v-3.202h-3.2zM11.198 19.365c0 1.675 2.146 3.032 4.794 3.032s4.794-1.357 4.794-3.032v-0.16h-9.587v0.16zM14.413 32.002h3.2v-3.2h-3.2v3.2z' />
    </svg>
  );
};

HappyFaceIcon.propTypes = {
  width: PropTypes.any,
  color: PropTypes.any
};