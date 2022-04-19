// * Modules
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// * Components
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import AboutIconLink from './components/AboutIconLink';

export default function App() {
  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
        </Routes>
      </div>

      <AboutIconLink />
    </Router>
  );
}
