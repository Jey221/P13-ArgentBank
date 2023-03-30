import { useEffect } from 'react';
// import { userService } from '../../utils/getData';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { getPosts } from '../../redux/redux copy';
//import { fetchUsers } from '../../redux/redux';
//import { loadUser } from '../../redux/redux copy 3';

function TitleUser() {
  let navigate = useNavigate();
  const editUsers = () => {
    navigate('/Users/edit-mode');
  };

  const dispatch = useDispatch();
  const { email, password, firstName, lastName, isLogged } = useSelector(
    (state) => state.user
  );

  /*
    useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);   

    useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

*/

  console.log('email', email);
  console.log('password', password);
  console.log('firstName', firstName);
  console.log('lastName', lastName);
  console.log('isLogged', isLogged);
  // const [firstName, setFirstName] = useState();
  // const users = useSelector((state) => state.user);

  /*   const { posts, loading } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  console.log(posts);
 */
  /*   useEffect(() => {
    userService
      .getUsers()
      .then((res) => {
        setFirstName(res.data.body.firstName);
      })
      .catch((err) => console.log('err', err));
  }, []);
 */
  return (
    <div className="headerUser">
      <h1>
        Welcome back
        <br />
        "lol"
      </h1>
      <button className="edit-button" onClick={editUsers}>
        Edit Name
      </button>
    </div>
  );
}

export default TitleUser;
