import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dataService } from '../../utils/getData';

/**
 * The EditZone function is a form component that allows users to edit their first and last name and
 * submit or cancel the changes.
 * @returns The component `EditZone` is being returned, which contains a form for editing user data.
 */
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
            required
          ></input>
          <input
            value={user.lastName}
            onChange={onChange}
            type="text"
            placeholder="lastname"
            name="lastName"
            required
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
