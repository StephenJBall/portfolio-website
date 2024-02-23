import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Bio from './components/Bio';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Bio />
      <Cards />
      <Footer />
    </Router>
  );
}

export default App;
