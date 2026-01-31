import { useState } from 'react';
import './App.css';
import Header from './lib/components/Header';
import MainContent from './lib/components/MainContent';
import AboutMe from './lib/components/About Me/AboutMe';
import Proyects from './lib/components/Proyects/Proyects';
import Sidebar from './lib/components/Sidebar';


function App() {
  const [currentView, setCurrentView] = useState('home');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <MainContent onNavigate={setCurrentView} />;
      case 'about':
        return <AboutMe onNavigate={setCurrentView} />;
      // Aquí puedes agregar más casos para Projects, Contact, etc.
      case 'contact':
        return <Proyects onNavigate={setCurrentView} />
      default:
        return <MainContent onNavigate={setCurrentView} />;
    }
  };

  return (
    <>
      <img src="./src/lib/assets/images/frame.png" className='frame' alt="" />
      <Header />
      <Sidebar currentView={currentView} onNavigate={setCurrentView} />
      {renderView()}
    </>
  );
}

export default App;
