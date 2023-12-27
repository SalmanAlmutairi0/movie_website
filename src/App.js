import './App.css';
import DisplayMovies from './components/displayMovies/DisplayMovies.jsx';
import Hero from './components/hero/hero.jsx';
import LoadingScreen from './components/loadingScreen/LoadingScreen.jsx';
import Navbar from './components/navbar/navbar.jsx';

function App() {
  

  return (
        <>
          <LoadingScreen />
          <Navbar />
          <Hero />
          <DisplayMovies />
        </>
  );
  
}

export default App;
