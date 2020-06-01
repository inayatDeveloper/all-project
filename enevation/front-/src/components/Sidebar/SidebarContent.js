import React from 'react';
import { Link, generatePath, withRouter } from 'react-router-dom';
import Default, { Desktop, Mobile } from '../Wrappers/Queries';
import OverlayTriggers from '../Common/ToolTip';
import { useStore } from 'store';
import * as Routes from 'routes';

const SidebarContent = ({ onSetSidebarOpen, isAuth, location }) => {
  const [{ auth }] = useStore();
  return (
    <div className='fixed-sidebar-left sidebar--small' id='sidebar-left'>
      {isAuth ? (
        <>
          <Default>
            <Link to={generatePath(Routes.HOME)} className='logo'>
              <div className='img-wrap'>
                <img
                  src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avocado-img_fwdb02.png'
                  alt='Olympus'
                />
              </div>
            </Link>
          </Default>
          <Mobile>
            <div className='logo'>
              <div className='img-wrap'>
                <img
                  src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avocado-img_fwdb02.png'
                  alt='Olympus'
                  onClick={() => onSetSidebarOpen(true, 'fixed-sidebar open')}
                />
              </div>
            </div>
          </Mobile>
        </>
      ) : (
        <div className='logo'>
          <div className='img-wrap'>
            <img
              src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avocado-img_fwdb02.png'
              alt='Olympus'
            />
          </div>
        </div>
      )}
      <Default>
        <div className='mCustomScrollbarr' data-mcs-theme='dark'>
          {isAuth && (
            <ul className='left-menu'>
              <li>
                <div className='js-sidebar-open'>
                  <OverlayTriggers toolTipText='OPEN MENU' placement='right'>
                    <img
                      src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/menu-img_powmte.png'
                      alt='OPEN MENU'
                      onClick={() =>
                        onSetSidebarOpen(true, 'fixed-sidebar open')
                      }
                    />
                  </OverlayTriggers>
                </div>
              </li>
              <li>
                <Link to={generatePath(Routes.HOME)}>
                  <OverlayTriggers toolTipText='HOME PAGE' placement='right'>
                    <img
                      src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avocado-icon_rwvve0.png'
                      alt=''
                    />
                  </OverlayTriggers>
                </Link>
              </li>
              <li>
                <Link to={generatePath(Routes.DISCOVER)}>
                  <OverlayTriggers toolTipText='DISCOVER' placement='right'>
                    <img
                      src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/search-icon_vpzkxv.png'
                      alt=''
                    />
                  </OverlayTriggers>
                </Link>
              </li>
              {/* <li>
              <Link to={generatePath(Routes.HOME)}>
                <OverlayTriggers toolTipText='FAVS' placement='right'>
                  <img
                    src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/star-icon_qbwpz1.png'
                    alt=''
                  />
                </OverlayTriggers>
              </Link>
            </li> */}
              <li>
                <Link to={generatePath(Routes.REWARDS)}>
                  <OverlayTriggers toolTipText='REWARDS' placement='right'>
                    <img
                      src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/star-icon_qbwpz1.png'
                      alt=''
                    />
                  </OverlayTriggers>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </Default>
    </div>
  );
};
export default withRouter(SidebarContent);
