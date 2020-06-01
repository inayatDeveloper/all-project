import React from 'react';
import { Link } from 'react-router-dom';

import * as Routes from 'routes';

const SideMenu = () => {
  return (
    <div className='ui-block-menu ui-block-menu-sidebar'>
      <ul className='d-flex'>
        <li>
          <Link to={Routes.PRIVACY_POLICY}>Privacy</Link>
        </li>
        <li>
          <Link to={Routes.TERM_AND_CONDITIONS}>Terms</Link>
        </li>
        <li>
          <Link to={Routes.COMMUNITY_GUIDELINE}>Community Guideline</Link>
        </li>
      </ul>
    </div>
  );
};
export default SideMenu;
