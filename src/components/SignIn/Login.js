import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../redux/userActions';

function Login() {
  const { loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const submitForm = (data) => {
    dispatch(userLogin(data));
  };
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form className="login-form" onSubmit={submitForm}>
          <div className="input-wrapper">
            <label htmlFor="email">email</label>
            <input
              type="email"
              placeholder="youremail@mail.com"
              name="email"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
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
          <button type="submit" className="sign-in-button" disabled={loading}>
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
