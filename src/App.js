import './style/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profil from './pages/Profil';

function App() {
  return (
    <div className="Home">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </div>
  );
}

export default App;
