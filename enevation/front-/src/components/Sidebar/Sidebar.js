import React, { useState } from 'react';
import Sidebar from 'react-sidebar';
import SidebarContent from './SidebarContent';
import SidebarMainContent from './SidebarContentDetail';
import SidebarStyles from './SidebarConfig';
const SidebarNavigation = ({ isAuth }) => {
  const [sidebarOpen, setSidebarOpen] = useState({
    open: false,
    activeClass: 'fixed-sidebar',
  });
  let onSetSidebarOpen = (open, activeSidebarClass) => {
    setSidebarOpen({ open: open, activeClass: activeSidebarClass });
  };
  return (
    <div className={sidebarOpen.activeClass}>
      <Sidebar
        sidebar={
          <SidebarContent onSetSidebarOpen={onSetSidebarOpen} isAuth={isAuth} />
        }
        open={sidebarOpen.open}
        docked={true}
        styles={SidebarStyles}
      >
        <SidebarMainContent
          onSetSidebarOpen={onSetSidebarOpen}
          isAuth={isAuth}
        />
      </Sidebar>
    </div>
  );
};
export default SidebarNavigation;
