import  { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Wall_painting from './components/Wall_painting';
import Graffiti from './components/Graffiti';
import Sculpture from './components/Sculpture';
import Stencil_art from './components/Stencil_art';
import Statue from './components/Statue';
import Murals from './components/Murals';
import Portrait from './components/Portrait';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/wall-painting" element={<Wall_painting/>} />
        <Route path="/graffiti" element={<Graffiti/>} />
        <Route path="/sculpture" element={<Sculpture/>} />
        <Route path="/stencil-art" element={<Stencil_art/>} />
        <Route path="/statue" element={<Statue/>} />
        <Route path="/murals" element={<Murals/>} />
        <Route path="/portrait" element={<Portrait/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
