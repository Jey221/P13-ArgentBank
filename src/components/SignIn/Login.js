import React, { useState } from 'react';
import { dataService } from '../../utils/getData';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/reducers/loginReducer';
import { useNavigate } from 'react-router-dom';

function Login() {
  let navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dataService.login(inputs).then((res) => {
      dispatch(loginSuccess(inputs));
      localStorage.setItem('token', res.data.body.token);
      navigate('/Users');
    });
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">email</label>
            <input
              value={inputs.email}
              onChange={onChange}
              type="email"
              placeholder="youremail@mail.com"
              name="email"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              value={inputs.password}
              onChange={onChange}
              type="password"
              name="password"
              placeholder="**************"
              required
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
