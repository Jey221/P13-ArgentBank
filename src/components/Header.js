//import { useEffect, useState } from 'react';
/* import { accountService } from '../utils/accountService';
import { userService } from '../utils/getData';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/argentBankLogo.png';
 */

// console.log(accountService.isLogged());

function Header() {
  /*   const logout = () => {
    console.log('out');
  };
  if (loc === true) {
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
            <i className="fa fa-user-circle"></i>
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
 */
}

export default Header;

/* function Header() {
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
          {accountService.isLogged() === true ? (
            <i className="fa fa-user-circle"> lol</i>
          ) : (
            ''
          )}
        </Link>
        <Link className="main-nav-item" to={'/SignIn'}>
          <i className="fa fa-user-circle"></i> Sign In
        </Link>
      </div>
    </nav>
  );
}
 */
