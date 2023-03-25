
import './App.css';
import Home from './components/Home';
import FirstHero from './components/FirstHero';
import SecondHero from './components/SecondHero';
import ThirdHero from './components/ThirdHero';
import FourthHero from './components/FourthHero';
import AskQuestion from './components/AskQuestion';
import Footer from './components/Footer';
function App() {



  return (
    <div>
    <Home/>
    <div className='brder_color h-3 '/>
    <FirstHero/>
    <div className='brder_color h-3 '/>
    <SecondHero/>
    <div className='brder_color h-3 '/>
    <ThirdHero/>
    <div className='brder_color h-3 '/>
    <FourthHero/>
    <div className='brder_color h-3 '/>
    <AskQuestion/>
    <div className='brder_color h-3 '/>
    <Footer/>
    </div>
  );
}

export default App;
