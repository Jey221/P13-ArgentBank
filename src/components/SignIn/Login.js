import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  let navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: 'tony@stark.com',
    password: 'password123',
  });

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    axios
      .post('http://localhost:3001/api/v1/user/login', inputs)
      .then((res) => {
        console.log(res);
        navigate('/Users');
      })
      .catch((error) => console.log(error));
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
