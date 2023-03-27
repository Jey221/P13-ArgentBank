import { useEffect, useState } from 'react';
import { userService } from '../../utils/getData';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function TitleUser() {
  let navigate = useNavigate();
  const editUsers = () => {
    navigate('/Users/edit-mode');
  };

  const name = useSelector((state) => state.User);

  const [firstName, setFirstName] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    userService
      .getUsers()
      .then((res) => {
        setFirstName(res.data.body.firstName);
        dispatch({
          type: 'User/userUpdate',
          payload: res.data.body.firstName,
        });
      })
      .catch((err) => console.log('err', err));
  }, []);
  console.log(name.firstName);
  console.log(name);
  console.log(firstName);
  return (
    <div className="headerUser">
      <h1>
        Welcome back
        <br />
        {firstName}
      </h1>
      <button className="edit-button" onClick={editUsers}>
        Edit Name
      </button>
    </div>
  );
}

export default TitleUser;
