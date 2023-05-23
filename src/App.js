import axios from "axios";
import UsersList from "./UsersList";
import { useEffect, useState } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((result) => {
      setUsersList(result.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <UsersList usersList={usersList} />
        <h1>hello</h1>
      </header>
    </div>
  );
}

export default App;
