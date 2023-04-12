import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/argentBankLogo.png';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../redux/reducers/loginReducer';
import { profilOut } from '../redux/reducers/profilReducer';

/**
 * This is a React component that renders a navigation bar with different options depending on whether
 * the user is logged in or not.
 * @returns The Header component is being returned, which displays a navigation bar with a logo and
 * links/buttons depending on whether the user is logged in or not. If the user is logged in, it
 * displays the user's first name and a "Sign Out" button. If the user is not logged in, it displays a
 * "Sign In" button.
 */
function Header() {
  let navigate = useNavigate();

  const dispatch = useDispatch();

  const firstName = useSelector((state) => state.profil.userInfos.firstName);

  const islogged = useSelector((state) => state.profil.isLogged);

  const logout = () => {
    localStorage.removeItem('token');
    dispatch(logoutAction());
    dispatch(profilOut());
    navigate('/');
    navigate(0);
  };
  if (islogged === true) {
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
          <Link className="main-nav-item" to={'/Users'}>
            <i className="fa fa-user-circle"></i> {firstName}
          </Link>
          <button className="button-logout" onClick={logout}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </button>
        </div>
      </nav>
    );
  } else {
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
          <Link className="main-nav-item" to={'/SignIn'}>
            <i className="fa fa-user-circle"></i> Sign In
          </Link>
        </div>
      </nav>
    );
  }
}

export default Header;
