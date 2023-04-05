import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { dataService } from '../../utils/getData';
import { profilSuccess } from '../../redux/reducers/profilReducer';

/**
 * This function displays the user's first name and allows them to edit it by clicking a button.
 * @returns A React functional component that displays a header with the user's first name and an "Edit
 * Name" button. When the button is clicked, it navigates to the "/Users/edit-mode" route. The
 * component also fetches user data from a data service using Redux and displays the user's first name
 * using the useSelector hook.
 */
function TitleUser() {
  let navigate = useNavigate();
  const editUsers = () => {
    navigate('/Users/edit-mode');
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dataService
      .getUsers()
      .then((res) => {
        dispatch(profilSuccess(res.data.body));
      })
      .catch((err) => console.log('err', err));
  }, [dispatch]);

  const firstName = useSelector((state) => state.profil.userInfos.firstName);
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
