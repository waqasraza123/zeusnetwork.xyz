import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowZeusWorks from './components/HowZeusWorks';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <Header />
        <HeroSection />
        <HowZeusWorks />
      </div>
    </div>
  );
}

export default App;