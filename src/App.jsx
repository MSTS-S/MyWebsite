import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import useMediaQuery from '@mui/material/useMediaQuery';

/* import contents */
import Section_Profile from './components/Section_Profile/Profile';
import Section_History from './components/Section_History/History';
import Section_AcademicResearch from './components/Section_AcademicResearch/AcademicResearch';
import Section_Programing from './components/Section_Programing/Programing';
import Section_Qualification from './components/Section_Qualification/Qualification';
import Section_Unity from './components/Section_Unity/Unity';
import Section_LinkContact from './components/Section_LinkContact/LinkContact';
import Section_Copyright from './components/Section_Copyright/Copyright';

/* import img */
import HeaderImage from './components/img/Header.png';

/* import MUI ICON */
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import SchoolIcon from '@mui/icons-material/School';
import TerminalIcon from '@mui/icons-material/Terminal';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AppsIcon from '@mui/icons-material/Apps';
import LinkIcon from '@mui/icons-material/Link';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';

/* https://mui.com/material-ui/react-drawer/#persistent-drawer */
/* MUI Drawer */
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';

// const drawerWidth = 300;

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:768px)');
  const drawerWidth = isMobile ? '100vw' : 300;

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLinkClick = (url) => {
    window.open(url, '_blank');
};

  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
      flexGrow: 1,
      padding: theme.spacing(0),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
      position: 'relative',
      variants: [
        {
          props: ({ open }) => open,
          style: {
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: 0,
          },
        },
      ],
    }),
  );

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    justifyContent: 'flex-start',
  }));

  const SectionComponentData = [
    {
      id: 'profile',
      title: 'Profile',
      component: <Section_Profile />,
      icon: <AccountBoxIcon />,
    },
    {
      id: 'history',
      title: 'Career History',
      component: <Section_History />,
      icon: <HistoryEduIcon />,
    },
    {
      id: 'academicresearch',
      title: 'Academic Research',
      component: <Section_AcademicResearch />,
      icon: <SchoolIcon />,
    },
    {
      id: 'programing',
      title: 'Programing',
      component: <Section_Programing />,
      icon: <TerminalIcon />,
    },
    {
      id: 'qualification',
      title: 'Qulifications',
      component: <Section_Qualification />,
      icon: <CreditCardIcon />,
    },
    {
      id: 'unity',
      title: 'Unity App',
      component: <Section_Unity />,
      icon: <AppsIcon />,
    },
    {
      id: 'linkcontact',
      title: 'Link / Contact',
      component: <Section_LinkContact />,
      icon: <LinkIcon />,
    },
  ];

  const ContactData = [
    {
      name: 'X (Twitter)',
      icon: <XIcon />,
      link: 'https://msts-hp.com/'
    },
    {
      name: 'Instagram',
      icon: <InstagramIcon />,
      link: 'https://www.instagram.com/m_seri_m/'
    },
    {
      name: 'E-Mail',
      icon: <MailIcon />,
      link: 'mailto:serizawa-masatoshi@ed.tmu.ac.jp'
    },
  ];

  return (
    <Box sx={{ display: 'flex' }} className="App">
      <CssBaseline />
      <Main open={open} sx={{ marginRight: open ? 0 : `-${drawerWidth}` }}>
        <DrawerHeader />
        {/* ----- Your Main Content ----- */}
        {/* <Router> */}
        <div className="App">

          {/* HEADER */}
          <header className="App-header">
            <div className="header-left">
              <div className="App-logo">
                <img src={HeaderImage} alt="Logo" />
              </div>
            </div>
            <div className="header-right">
              {/* 
              aria-label="open drawer" : スクリーンリーダーなどのアクセシビリティのための属性
              sx={[open && { display: 'none'}]} : openがtrueのとき，displayプロパティが'none'に設定され非表示になる
              */}
              <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} sx={[open && { display: 'none' }]}>
                <MenuIcon />
              </IconButton>
            </div>
          </header>

          {/* BODY */}
          <div className="App-body">
            {/* <Routes>
                <Route path="/" element={
                  <> */}
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
            {/* </>
                } />
                <Route path="/BusinessCard" element={<Section_BusinessCard />} />
              </Routes> */}
          </div>

          {/* FOOTER */}
          <div className="App-footer">
            <div className='backgroundColor-copyright' style={{ padding: '5%' }}>
              <Section_Copyright />
            </div>
          </div>
        </div >
        {/* </Router> */}
        {/* ----- Your Main Content ----- */}
      </Main>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            position: 'fixed',
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </DrawerHeader>
        <br />
        CONTENTS
        <Divider />
        <List>
          {SectionComponentData.map(({ id, title, icon }, index) => (
            <ListItem key={id} disablePadding>
              <ListItemButton component="a" href={`#${id.toLowerCase()}`} onClick={isMobile ? handleDrawerClose : undefined}>
                <ListItemIcon >
                  {icon}
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <br />
        SNS / CONTACT
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
      </Drawer>
    </Box>
  );
}

export default App;
