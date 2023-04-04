import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { dataService } from '../../utils/getData';
import { profilSuccess } from '../../redux/reducers/profilReducer';

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
        console.log(res);
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
