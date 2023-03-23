import { useEffect, useState } from 'react';
import { userService } from '../../utils/getData';

const EditZone = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
  });

  useEffect(() => {
    userService
      .getUsers()
      .then((res) => {
        console.log('res.data', res.data.body);
        setUser(res.data.body);
      })
      .catch((err) => console.log('err', err));
  }, []);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('user', user);
    const updateUser = { ...user, [e.target.name]: e.target.value };
    userService
      .editUsers(updateUser)
      .then((res) => console.log('res', res))
      .catch((err) => console.log('err', err));
  };
  console.log('user', user);
  return (
    <div>
      <h2>Welcome back</h2>
      <form onSubmit={handleSubmit}>
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

/*   const [user, setUser] = useState({
    firstName: '',
    lastName: '',
  });
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('save');
    console.log('firstName', user.firstName);
    console.log('lastName', user.lastName);
  };

  const handleReset = (e) => {
    e.preventDefault();
    console.log('reset');
    console.log('firstName', user.firstName);
    console.log('lastName', user.lastName);
  };
 */

/* userService
      .editUsers()
      .then((res) => {
        console.log('res.data', res.data);
        setEditInput(res.data.body);
      })
      .catch((err) => console.log(err)); */

/* function EditZone() {
  const [firstName, setFirstName] = useState();
  useEffect(() => {
    userService
      .editUsers()
      .then((res) => {
        console.log('res.data', res.data);
        setFirstName(editInput.firstName);
      })
      .catch((err) => console.log('err', err));
  }, []);
  const [editInput, setEditInput] = useState({
    firstName: '',
    lastName: '',
  });
  const onChange = (e) => {
    setEditInput({ ...editInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('save');
    console.log('firstName', editInput.firstName);
    console.log('lastName', editInput.lastName);
    userService
      .editUsers(editInput)
      .then((res) => console.log('res', res.data.body))
      .catch((err) => console.log('err', err));
  };

  const handleReset = (e) => {
    e.preventDefault();
    console.log('reset');
    console.log('firstName', editInput.firstName);
    console.log('lastName', editInput.lastName);
    userService.getUsers(editInput.firstName);
  };

  return (
    <div>
      <h2>Welcome back</h2>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div className="editInput">
          <input
            value={editInput.firstName}
            onChange={onChange}
            type="text"
            placeholder=""
            name="firstName"
          ></input>
          <input
            value={editInput.lastName}
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
}

export default EditZone;
 */
