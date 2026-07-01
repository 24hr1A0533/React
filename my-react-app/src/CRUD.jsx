import  { useState, useEffect } from "react";
import axios from "axios";

function Crud() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");

  const getUser = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.log("Failed", err);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  const addUser = () => {
    const newUser = { name: name };
    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((response) => {
        alert("User Added");
        console.log(response.data);
        setUser([...user, response.data]);
        setName("");
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  const updateUser = (id) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${id}`, {
        name: "Charan",
      })
      .then((response) => {
        alert("User Updated");
        console.log(response.data);

        // Update local state
        setUser(
          user.map((u) =>
            u.id === id ? { ...u, name: response.data.name } : u
          )
        );
      })
      .catch((err) => {
        console.log("Update Error", err);
      });
  };

  return (
    <div>
      <h1>CRUD Example</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={addUser}>Add User</button>

      <ul>
        {user.map((u) => (
          <li key={u.id}>
            {u.name}{" "}
            <button onClick={() => updateUser(u.id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Crud;
