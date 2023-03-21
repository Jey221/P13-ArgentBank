import './style/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import AuthGuard from './utils/AuthGuard';
import AuthRouter from './utils/AuthRouter';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Users"
          element={
            <AuthGuard>
              <Users />
            </AuthGuard>
          }
        />
        <Route path="/SignIn" element={<AuthRouter />} />
      </Routes>
    </div>
  );
}

export default App;
