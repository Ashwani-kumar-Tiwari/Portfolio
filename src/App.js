import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "./components/Particle";
import Navbar from "./components/Navbar";
import Header from './components/Header';
import AboutMe from './components/AboutMe';
function App() {
  return (
    <>
    <Particles/>
    <Navbar/>
    <Header/>
    <AboutMe/>
    </>
  );
}

export default App;
