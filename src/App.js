import './style/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import AuthGuard from './utils/AuthGuard';
import AuthRouter from './utils/AuthRouter';
import EditUser from './pages/EditUser';

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
        <Route
          path="/Users/edit-mode"
          element={
            <AuthGuard>
              <EditUser />
            </AuthGuard>
          }
        />
        <Route path="/SignIn" element={<AuthRouter />} />
      </Routes>
    </div>
  );
}

export default App;

/*  */
