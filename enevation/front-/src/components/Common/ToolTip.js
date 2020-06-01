import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'react-bootstrap';
import { OverlayTrigger, Popover } from 'react-bootstrap';

const ToolTip = props => <Tooltip>{props}</Tooltip>;

const OverlayTriggers = ({
  placement,
  toolTipText,
  children,
}) => {
  return (
    <OverlayTrigger
      trigger='hover'
      placement={placement}
      delay={{ show: 0, hide: 1 }}
      overlay={ToolTip(toolTipText)
      }
    >
      {children}
    </OverlayTrigger>
  );
};

OverlayTriggers.propTypes = {
  placement: PropTypes.string.isRequired,
  toolTipText: PropTypes.any.isRequired,
  children: PropTypes.object.isRequired,
};

export default OverlayTriggers;
