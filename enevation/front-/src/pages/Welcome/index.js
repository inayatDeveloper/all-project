import React from 'react';
import { Sidebar } from 'components/Sidebar/index';
import WelcomeFooter from './WelcomeFooter';
import WelcomeHeader from './WelcomeHeader';
import MainContent from './MainContent';
import VideoSection from './VideoSection';
import WelcomeIntro from './WelcomeIntro';

const Welcome = () => {
  return (
    <div className='page-has-left-panels page-has-right-panels pr-0'>
      <WelcomeHeader />
      <Sidebar isAutuh={false} />
      <div className='header-spacer'></div>
      <VideoSection />
      <WelcomeIntro />
      <MainContent />
      <WelcomeFooter />
    </div>
  );
};
export default Welcome;
