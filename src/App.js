import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Particles from "./components/Particle";
import Navbar from "./components/Navbar";
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Experience from "./components/Experience";
function App() {
  return (
    <>
    <Particles />
    <Navbar />
    <Header />
    <AboutMe />
    <Services />
    <Experience />
    </>
  );
}

export default App;
