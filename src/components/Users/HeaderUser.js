import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/argentBankLogo.png';
import { accountService } from '../../utils/accountService';

function HeaderUser() {
  let navigate = useNavigate();

  const logout = () => {
    accountService.logout();
    navigate('/');
  };
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to={'/'}>
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to={''}>
          <i className="fa fa-user-circle"></i> Tony
        </Link>
        <button className="button-logout" onClick={logout}>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </button>
      </div>
    </nav>
  );
}

export default HeaderUser;
