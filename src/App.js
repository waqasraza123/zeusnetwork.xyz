import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowZeusWorks from './components/HowZeusWorks';
import InvestorsSection from './components/Investors';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <Header />
        <HeroSection />
        <HowZeusWorks />
        <InvestorsSection />
      </div>
    </div>
  );
}

export default App;