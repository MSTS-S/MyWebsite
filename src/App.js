import './App.css';
/* import contents */
import Profile from './components/Section_Profile/Profile'
import Section_Programing from './components/Section_Programing/Programing'
import Section_Qualification from './components/Section_Qualification/Qualification'
/* import img */
import HeaderImage from './components/Header/HeaderImage.jpg';

function App() {

  const contents = [
    Section_Programing,
    Section_Qualification,
  ];

  return (
    <div className="App">
      {/* HEADER */}
      <header className="App-header">
        <div className="App-logo">
          <img src={HeaderImage} alt="Logo" />
        </div>
      </header>

      {/* BODY */}
      <body className="App-body">
        <div className='backgroundColor-profile' style={{ padding: '5%' }}>
          <Profile />
        </div>
        <div>
          {contents.map((Component, index) => (
            <div key={index} className={index % 2 === 0 ? 'backgroundColor-even' : 'backgroundColor-odd'} style={{ padding: '5%' }}>
              <Component />
            </div>
          ))}
        </div>
      </body>
    </div>
  );
}

export default App;
