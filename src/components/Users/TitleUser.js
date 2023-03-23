import { useEffect, useState } from 'react';
import { userService } from '../../utils/getData';
import { useNavigate } from 'react-router-dom';

function TitleUser() {
  let navigate = useNavigate();
  const editUsers = () => {
    navigate('/Users/edit-mode');
  };

  const [firstName, setFirstName] = useState();
  useEffect(() => {
    userService
      .getUsers()
      .then((res) => {
        console.log('res.data', res.data);
        setFirstName(res.data.body.firstName);
      })
      .catch((err) => console.log('err', err));
  }, []);
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

/*     
  let navigate = useNavigate();
  const edit



const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  useEffect(() => {
    setFirstName(localStorage.getItem('firstName'));
    setLastName(localStorage.getItem('lastName'));
  }, []);
  console.log('firstName', firstName);
  console.log('lastName', lastName);


 */
