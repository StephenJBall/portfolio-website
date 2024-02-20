import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Bio from './components/Bio';

function App() {
  return (
    <Router>
      <Navbar />
      <Bio />
    </Router>
  );
}

export default App;
