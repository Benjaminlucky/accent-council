import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import TopNavigation from './components/top-navigation/TopNavigation';

function App() {
  return (
    <div className="app">
        <Router>
          <TopNavigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
