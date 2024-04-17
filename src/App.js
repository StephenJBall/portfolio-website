import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Bio from "./components/Bio";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import reddit from "./pages/reddit";
import MunsterStats from "./pages/MunsterStats";
import Messaging from "./pages/Messaging";
import PortfolioWebsite from "./pages/PortfolioWebsite";

function App() {
  return (
    <Router>
      <Navbar />
      <Bio />
      <Cards />
      <Routes>
        <Route path="/reddit" Component={reddit} />
        <Route path="/munster-stats" Component={MunsterStats} />
        <Route path="/instant-messaging" Component={Messaging} />
        <Route path="/portfolio-website" Component={PortfolioWebsite} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
