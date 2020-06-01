import React from 'react';
import * as Routes from 'routes';
import { Link, generatePath } from 'react-router-dom';

export const LegalLinks = ({ user }) => {
  return (
    <ul className='account-settings'>
      <li>
        <Link to={Routes.TERM_AND_CONDITIONS}>
          <span>Terms and Conditions</span>
        </Link>
      </li>
      <li>
        <Link to={Routes.FORM}>
          <span>Idea Submission</span>
        </Link>
      </li>
      <li>
        <Link to={Routes.COMMUNITY_GUIDELINE}>
          <span>Community Guidelines</span>
        </Link>
      </li>
      <li>
        <Link to={Routes.FAQ}>
          <span>FAQs</span>
        </Link>
      </li>
    </ul>
  );
};

export default LegalLinks;
