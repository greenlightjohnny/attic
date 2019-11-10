import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import headerStyles from '../components/header.module.scss'
import { Link } from 'gatsby'
//import Styles from './sidebar.module.scss'


const SideBar = () => {

    var styles = {
        bmBurgerButton: {
          position: 'fixed',
          width: '36px',
          height: '30px',
          right: '36px',
          top: '15px'
        },
        bmBurgerBars: {
          background: '#39dae6'
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '36px',
          width: '36px'
        },
        bmCross: {
          background: 'red',
          height: '36px'
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100%'
        },
        bmMenu: {
          background: '#373a47',
          padding: '2.5em 1.5em 0',
          fontSize: '1.15em'
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
          color: '#b8b7ad',
          padding: '0.8em',
          paddingTop: '1.5rem'
        },
        bmItem: {
          display: 'flex',
          flexDirection: 'column'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        }
      }
      
    return (
      <Menu right styles={ styles }>
       <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  to="/">Home </Link>
                
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About </Link>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  to="/">News </Link>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  to="/Volunteer">Volunteer </Link>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  to="/Donate">Donate </Link>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  to="/Hours">Hours</Link>
                
            
      </Menu>
    );
  };

  export default SideBar