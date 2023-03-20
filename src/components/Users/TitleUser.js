import { useEffect, useState } from 'react';
import { getData } from '../../utils/getData';
function TitleUser() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    async function infoLoad() {
      const datas = await getData();
      setDatas(datas);
      console.log(datas);
    }
    infoLoad();
  }, []);
  console.log(datas);
  return (
    <div className="headerUser">
      <h1>
        Welcome back
        <br />
        Tony Jarvis!
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
}

export default TitleUser;
