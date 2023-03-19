import axios from 'axios';

export const getData = async () => {
  try {
    const result = await axios.post('http://localhost:3001/api/v1/user/signup');
    return result;
  } catch (e) {
    console.log(e);
  }
};
