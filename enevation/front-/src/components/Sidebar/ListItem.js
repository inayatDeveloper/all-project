import React from 'react';
import { NavLink } from 'react-router-dom';
const ListItem = ({
  linkClass,
  title,
  onSetSidebarOpen,
  image,
  path,
}) => (
  <li
  >
    {path ? (
      <NavLink 
        className={linkClass} 
        to={path} 
        role="link"
        onClick={() => onSetSidebarOpen(false, 'fixed-sidebar')}
        onKeyPress={() => onSetSidebarOpen(false, 'fixed-sidebar')} >
          <img src={image} alt='img' className='left-menu-icon' />
          <span className='collapse-menu-title'>{title}</span>
      </NavLink>
    ) : (
      <div 
      className='collapse-menu-wrap'
      role="button"
      tabIndex="0"
      onClick={() => onSetSidebarOpen(false, 'fixed-sidebar')}
      onKeyPress={() => onSetSidebarOpen(false, 'fixed-sidebar')} >
        <img src={image} alt='img' className='left-menu-icon' />
        <span className='collapse-menu-title'>{title}</span>
      </div>
    )}
  </li>
);
export default ListItem;
