import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { useStore } from 'store';

import '../assets/svg-icons/back-to-top.svg';
import HeaderTitle from '../pages/Header/HeaderTitle';
import UserReferralModal from '../pages/Header/UserReferralModal';
import DesktopNav, { MobileNav } from '../pages/Header/Navigation';

const TopHeader = ({ refetch }) => {
  const [{ auth }] = useStore();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <header
      className={isMobile ? 'header header-responsive' : 'header'}
      id={isMobile ? 'site-header' : 'site-header-responsive'}
    >
      <HeaderTitle />
      <div className='header-content-wrapper'>
        <DesktopNav refetch={refetch} auth={auth} />
        <MobileNav refetch={refetch} auth={auth} mobileToggle={false} />
      </div>

      <UserReferralModal />
    </header>
  );
};
export default TopHeader;
