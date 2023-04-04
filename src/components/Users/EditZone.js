import { useState } from 'react';
// import { userService } from '../../utils/getData';
import { useNavigate } from 'react-router-dom';
import { dataService } from '../../utils/getData';

const EditZone = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
  });

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const updateUser = { ...user, [e.target.name]: e.target.value };

    dataService.editUsers(updateUser).then((res) => {
      navigate('/Users');
      return res;
    });

    /*     userService
      .editUsers(updateUser)
      .then((res) => {
        navigate('/Users');
      })
      .catch((err) => console.log('err', err));
 */
  };
  const handleReset = (e) => {
    e.preventDefault();
    navigate('/Users');
  };
  return (
    <div>
      <h2>Welcome back</h2>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div className="editInput">
          <input
            value={user.firstName}
            onChange={onChange}
            type="text"
            placeholder="firstname"
            name="firstName"
          ></input>
          <input
            value={user.lastName}
            onChange={onChange}
            type="text"
            placeholder="lastname"
            name="lastName"
          ></input>
        </div>
        <div className="editButton">
          <button type="submit">Save</button>
          <button type="reset">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditZone;
