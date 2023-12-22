import './App.css';
import DisplayMovies from './components/displayMovies/DisplayMovies.jsx';
import Hero from './components/hero/hero.jsx';
import Navbar from './components/navbar/navbar.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <DisplayMovies />
    </>
  );
}

export default App;
