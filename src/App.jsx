import React, { useEffect, useRef, useState } from 'react';
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

/* import img（ヘッダーのロゴ：ダーク用とライト用） */
import HEADER_LOGO_DARK from './components/img/Header - dark.png';
import HEADER_LOGO_LIGHT from './components/img/Header - light.png';

/* 連絡先・外部リンクのデータ（Link / Contact セクションと共通） */
import { MAIL, LINKS, linkProps } from './components/Section_LinkContact/ContactData';

/* import MUI ICON */
import PROFILE_ICON from '@mui/icons-material/AccountBox';
import CAREER_HISTORY_ICON from '@mui/icons-material/HistoryEdu';
import RESEARCH_ICON from '@mui/icons-material/School';
import PROGRAMING_ICON from '@mui/icons-material/Terminal';
import QUALIFICATION_ICON from '@mui/icons-material/CreditCard';
import UNITY_APPLICATION_ICON from '@mui/icons-material/Apps';
import REACT_FUNCTIONS_ICON from '@mui/icons-material/Functions';
import LINK_ICON from '@mui/icons-material/Link';
import MAIL_ICON from '@mui/icons-material/Mail';
import MENU_ICON from '@mui/icons-material/Menu';
import CLOSE_ICON from '@mui/icons-material/Close';
import DARK_MODE_ICON from '@mui/icons-material/DarkModeOutlined';
import LIGHT_MODE_ICON from '@mui/icons-material/LightModeOutlined';

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
    theme: 'dark', // 背景を暗くする（App.css の backgroundColor-dark）
    component: <Section_History />,
    icon: <CAREER_HISTORY_ICON />,
  },
  {
    id: 'academicresearch',
    title: 'Academic Research',
    theme: 'dark', // 背景を暗くする（App.css の backgroundColor-dark）
    component: <Section_AcademicResearch />,
    icon: <RESEARCH_ICON />,
  },
  {
    id: 'programing',
    title: 'Programming',
    theme: 'dark', // 背景を暗くする（App.css の backgroundColor-dark）
    component: <Section_Programing />,
    icon: <PROGRAMING_ICON />,
  },
  {
    id: 'qualification',
    title: 'Qualifications',
    theme: 'dark', // 背景を暗くする（App.css の backgroundColor-dark）
    component: <Section_Qualification />,
    icon: <QUALIFICATION_ICON />,
  },
  {
    id: 'unity',
    title: 'Unity App',
    theme: 'dark', // 背景を暗くする（App.css の backgroundColor-dark）
    component: <Section_Unity />,
    icon: <UNITY_APPLICATION_ICON />,
  },
  {
    id: 'functions',
    title: 'React Functions',
    theme: 'dark', // 背景を暗くする（App.css の backgroundColor-dark）
    component: <Section_ReactFunctions />,
    icon: <REACT_FUNCTIONS_ICON />,
  },
  {
    id: 'linkcontact',
    title: 'Link / Contact',
    theme: 'dark', // 背景を暗くする（App.css の backgroundColor-dark）
    component: <Section_LinkContact />,
    icon: <LINK_ICON />,
  },
];

/* ヘッダーが使う縦の範囲（カプセルの上のすき間＋カプセル＋下のすき間）を実際の表示から測る */
const getHeaderSpace = () => {
  const bar = document.querySelector('.header__bar');
  if (!bar) return 0;
  const rect = bar.getBoundingClientRect();
  return rect.bottom + rect.top;
};

/* 動きを減らす設定のときは、スクロールのアニメーションをしない */
const scrollBehavior = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';

/* セクションの見出しが、浮いているヘッダーに隠れない位置までスクロールする */
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY;
  const padTop = parseFloat(getComputedStyle(el).paddingTop) || 0;
  const offset = Math.max(0, getHeaderSpace() + 8 - padTop);
  window.scrollTo({ top: Math.max(0, top - offset), behavior: scrollBehavior() });
};

/* 今の配色（public/index.html で、保存してある設定を最初に <html data-theme> に入れている） */
const getInitialTheme = () =>
  document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);
  const [activeId, setActiveId] = useState(null); // 今見ているセクション（メニューで強調する）
  const menuButtonRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  /* 開いた時点で、画面の上の方にあるセクションを「今いる場所」にする */
  const findActiveSection = () => {
    if (location.pathname !== '/') return null;
    const line = getHeaderSpace() + 40;
    let current = null;
    SectionComponentData.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= line) current = id;
    });
    return current ?? SectionComponentData[0].id;
  };

  const toggleMenu = () => {
    if (!isMenuOpen) setActiveId(findActiveSection());
    setIsMenuOpen(!isMenuOpen);
  };

  /* 配色を <html data-theme> に反映する（色の切り替えは App.css の変数で行う） */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  /* ライト／ダークの切り替え。選んだ方は次に開いたときも使う */
  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      /* 保存できない環境（プライベートモードなど）では、今回だけ切り替える */
    }
  };

  /* Esc キーで閉じて、MENU ボタンにフォーカスを戻す */
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  /* ページを移動したらメニューを閉じる */
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  /* メニューの項目：別のページにいるときはトップに戻ってからスクロールする */
  const handleSectionClick = (event, id) => {
    event.preventDefault();
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(id), 50);
    } else {
      scrollToSection(id);
    }
  };

  /* ロゴ：トップページの一番上へ */
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: scrollBehavior() });
  };

  return (
    <>
      {/* メニューを開いているあいだの薄い影（押すと閉じる） */}
      <div
        className={`header__shade ${isMenuOpen ? 'is-open' : ''}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden='true'
      ></div>

      <div className='header__bar'>
        <Link to='/' className='header__logo' onClick={handleLogoClick} aria-label='MSTS-S トップへ戻る'>
          {/* ダーク用・ライト用の両方を置き、表示は CSS で切り替える */}
          <img className='header__logoImg header__logoImg--dark' src={HEADER_LOGO_DARK} alt='' />
          <img className='header__logoImg header__logoImg--light' src={HEADER_LOGO_LIGHT} alt='' />
        </Link>

        <div className='header__actions'>
          {/* ライト／ダークの切り替え（左：ライト、右：ダーク。つまみが今のモードの側にある） */}
          <button
            type='button'
            className={`header__theme ${theme === 'light' ? 'is-light' : ''}`}
            role='switch'
            aria-checked={theme === 'light'}
            aria-label='ライトモード'
            title={theme === 'light' ? 'ダークモードにする' : 'ライトモードにする'}
            onClick={toggleTheme}
          >
            <span className='header__themeKnob' aria-hidden='true'></span>
            <span className='header__themeIcon header__themeIcon--light' aria-hidden='true'><LIGHT_MODE_ICON /></span>
            <span className='header__themeIcon header__themeIcon--dark' aria-hidden='true'><DARK_MODE_ICON /></span>
          </button>

          <button
            type='button'
            ref={menuButtonRef}
            className='header__menuButton'
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls='header-menu'
            aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          >
            {isMenuOpen ? <CLOSE_ICON /> : <MENU_ICON />}
            <span className='header__menuLabel'>{isMenuOpen ? 'CLOSE' : 'MENU'}</span>
          </button>
        </div>
      </div>

      {/* カプセルの下に開くメニュー（スマホでは左右いっぱい） */}
      <nav id='header-menu' className={`header__menu ${isMenuOpen ? 'is-open' : ''}`} aria-label='サイト内メニュー'>
        <div className='header__menuCaption'>CONTENTS</div>
        <ul className='header__menuList'>
          {SectionComponentData.map(({ id, title, icon }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`header__menuItem ${activeId === id ? 'is-active' : ''}`}
                aria-current={activeId === id ? 'location' : undefined}
                onClick={(event) => handleSectionClick(event, id)}
              >
                {icon}
                <span>{title}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className='header__menuDivider'></div>

        <ul className='header__sns'>
          {LINKS.map((link) => (
            <li key={link.name}>
              <a className='header__snsLink' {...linkProps(link.url)} aria-label={link.name}>
                {link.img ? <img src={link.img} alt='' /> : link.icon}
              </a>
            </li>
          ))}
          <li>
            <a className='header__snsLink' {...linkProps(MAIL.url)} aria-label='メール'>
              <MAIL_ICON />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

function Body() {
  return (
    <div className="body__container">
      {SectionComponentData.map(({ id, component, theme }, index) => (
        <div
          id={id.toLowerCase()}
          key={index}
          className={`section__outer ${
            theme === 'dark' ? 'backgroundColor-dark'
              : index === 0 ? 'backgroundColor-profile'
              : index % 2 === 0 ? 'backgroundColor-even'
                : 'backgroundColor-odd'
          }`}
        >
          {/* 背景は画面幅いっぱい、中身は最大幅で中央寄せ */}
          <div className='section__inner'>
            {component}
          </div>
        </div>
      ))}
    </div>);
}

function Footer() {
  const year = new Date().getFullYear(); // 今年の年（毎年書き換えなくてよいように自動で入れる）

  return (
    <div className='footer__container'>
      <div className='footer__text'>
        <div> Copyright © {year} Masatoshi SERIZAWA </div>
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
