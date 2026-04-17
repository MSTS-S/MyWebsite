import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useLocation } from 'react-router-dom';
import './App.css';

/* import contents */
import Section_Profile from './components/Section_Profile/Profile';
import Section_History from './components/Section_History/History';
import Section_AcademicResearch from './components/Section_AcademicResearch/AcademicResearch';
import Section_Programing from './components/Section_Programing/Programing';
import Section_Qualification from './components/Section_Qualification/Qualification';
import Section_Unity from './components/Section_Unity/Unity';
import Section_ReactFunctions from './components/Section_ReactFunctions/ReactFunction';
import Section_LinkContact from './components/Section_LinkContact/LinkContact';

/* import functions */
import QRCodeGenerator from './functions/QRCodeGenerator/QRCodeGenerator';
import LoginForm from './functions/LoginForm/LoginForm';

/* import img */
import HEADER_IMAGE from './components/img/Header.png';

/* import MUI ICON */
import PROFILE_ICON from '@mui/icons-material/AccountBox';
import CAREER_HISTORY_ICON from '@mui/icons-material/HistoryEdu';
import RESEARCH_ICON from '@mui/icons-material/School';
import PROGRAMING_ICON from '@mui/icons-material/Terminal';
import QUALIFICATION_ICON from '@mui/icons-material/CreditCard';
import UNITY_APPLICATION_ICON from '@mui/icons-material/Apps';
import REACT_FUNCTIONS_ICON from '@mui/icons-material/Functions';
import LINK_ICON from '@mui/icons-material/Link';
import X_ICON from '@mui/icons-material/X';
import INSTAGRAM_ICON from '@mui/icons-material/Instagram';
import MAIL_ICON from '@mui/icons-material/Mail';

/* https://mui.com/material-ui/react-drawer/#persistent-drawer */
/* MUI Drawer */
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const SectionComponentData = [
  {
    id: 'profile',
    title: 'Profile',
    component: <Section_Profile />,
    icon: <PROFILE_ICON />,
  },
  {
    id: 'history',
    title: 'Career History',
    component: <Section_History />,
    icon: <CAREER_HISTORY_ICON />,
  },
  {
    id: 'academicresearch',
    title: 'Academic Research',
    component: <Section_AcademicResearch />,
    icon: <RESEARCH_ICON />,
  },
  {
    id: 'programing',
    title: 'Programing',
    component: <Section_Programing />,
    icon: <PROGRAMING_ICON />,
  },
  {
    id: 'qualification',
    title: 'Qualifications',
    component: <Section_Qualification />,
    icon: <QUALIFICATION_ICON />,
  },
  {
    id: 'unity',
    title: 'Unity App',
    component: <Section_Unity />,
    icon: <UNITY_APPLICATION_ICON />,
  },
  {
    id: 'functions',
    title: 'React Functions',
    component: <Section_ReactFunctions />,
    icon: <REACT_FUNCTIONS_ICON />,
  },
  {
    id: 'linkcontact',
    title: 'Link / Contact',
    component: <Section_LinkContact />,
    icon: <LINK_ICON />,
  },
];

const ContactData = [
  {
    name: 'X (Twitter)',
    icon: <X_ICON />,
    link: 'https://msts-hp.com/'
  },
  {
    name: 'Instagram',
    icon: <INSTAGRAM_ICON />,
    link: 'https://www.instagram.com/rn._sts/'
  },
  {
    name: 'E-Mail',
    icon: <MAIL_ICON />,
    link: 'https://msts-hp.com/'
  },
];

/* Constant Number regarding Drawer */
const DRAWER_POSITION = "right"; // can change to 'left', 'top', 'bottom'
const DRAWER_WIDTH = 300;

function Header() {
  const [_isMenuOpen, setIsMenuOpen] = useState(false); // メニューのオープン状態を管理

  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate('/');
  };

  const handleLinkClick = (url) => {
    window.open(url, '_blank');
  };

  /* Switching the state of drawer (open : close) */
  const toggleDrawer = () => (event) => {
    /* Assuming an external keyboard on the ipad, do not close the drawer with tab or shift key. */
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    // unfocus
    if (document.activeElement) {
      document.activeElement.blur();
    }

    /* update bool of _isMenuOpen */
    setIsMenuOpen(!_isMenuOpen);
  };

  /* Tab list display in hamburger menu */
  const renderList = () => (
    <Box
      sx={{ width: DRAWER_POSITION === 'top' || DRAWER_POSITION === 'bottom' ? 'auto' : DRAWER_WIDTH }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <br />
      <List>
        <br />
        <div className='header__categoryName'>
          CONTENTS
        </div>
        <Divider />
        {SectionComponentData.map((tab) => (
          <ListItem key={tab.id} disablePadding>
            <ListItemButton component="a" href={`#${tab.id.toLowerCase()}`}>
              <ListItemIcon >
                {tab.icon}
              </ListItemIcon>
              <ListItemText primary={tab.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <br />
      <div className='header__categoryName'>
        SNS / CONTACT
      </div>
      <Divider />
      <List>
        {ContactData.map(({ name, icon, link }, index) => (
          <ListItem key={name} disablePadding>
            <ListItemButton onClick={() => handleLinkClick(link)}>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className='header__container'>
      <a className='header__webSiteTitle'>
        <div className='header__logoTMU'
         onClick={() => handleTitleClick()}
         href={'/'}
         >
          <img src={HEADER_IMAGE} alt='header image' />
        </div>
      </a>

      {/* Display hamburger menu */}
      <div className='header__hamburgerMenu'>
        <div className={`header__hamburgerMenuIcon ${_isMenuOpen ? 'active' : ''}`} onClick={toggleDrawer()}>
          <React.Fragment>
            {/* Drawer Trigger */}
            <Button
              disableRipple
              disableElevation
              sx={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: 'transparent'
                },
                minWidth: 0,
                padding: 0
              }}
            >
              <HamburgerMenu />
            </Button>
            <Drawer
              className='header__customDrawer'
              anchor={DRAWER_POSITION}
              open={_isMenuOpen}
              onClose={toggleDrawer()}
              ModalProps={{
                keepMounted: true,
                disableScrollLock: false,
              }}
            >
              {renderList()}
            </Drawer>
          </React.Fragment>
        </div>
      </div>
    </div>
  );
}

function HamburgerMenu() {
  return (
    <div className='hamburgerMenu__Line'>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
    </div>
  );
}

function Body() {
  return (
    <div className="body__container">
      {SectionComponentData.map(({ id, component }, index) => (
        <div
          id={id.toLowerCase()}
          key={index}
          className={
            index === 0 ? 'backgroundColor-profile'
              : index % 2 === 0 ? 'backgroundColor-even'
                : 'backgroundColor-odd'
          }
          style={{ padding: '5%' }}
        >
          {component}
        </div>
      ))}
    </div>);
}

function Footer() {
  return (
    <div className='footer__container'>
      <div className='footer__text'>
        <div> Copyright © 2025 Masatoshi SERIZAWA </div>
        <div> &nbsp; All rights reserved. &nbsp; </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className='App__container'>
        <div className='App__header'>
          <Header />
        </div>
        <div className='App__body'>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/qrcodegenerator" element={<QRCodeGenerator />} />
            <Route path="/loginform" element={<LoginForm />} />
          </Routes>
        </div>
        <div className='App__footer'>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
