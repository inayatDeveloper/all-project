import React from 'react';
import PropTypes from 'prop-types';

import { CameraIcon } from '../icons/index';
import OverlayTriggers from '../Common/ToolTip';

const Footer = ({ toggle }) => (
  <div className='add-options-message'>
    <OverlayTriggers
      toolTipText='ADD PHOTO'
      placement='bottom'
    >
      <div
        className='options-message'
        onClick={() => toggle()}
        onKeyDown={() => toggle()}
        tabIndex='0'
        role='button'
      >
        <CameraIcon className='olymp-camera-icon' />
      </div>
    </OverlayTriggers>
    <button className='btn btn-primary btn-md-2'>
      Share Your Avocado Love
    </button>
  </div>
);

Footer.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default Footer;
