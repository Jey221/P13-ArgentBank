import { useEffect, useState } from 'react';
// import { userService } from '../../utils/getData';
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../../redux/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';

function TitleUser() {
  const [firstName, setFirstName] = useState();
  let navigate = useNavigate();
  const editUsers = () => {
    navigate('/Users/edit-mode');
  };

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
