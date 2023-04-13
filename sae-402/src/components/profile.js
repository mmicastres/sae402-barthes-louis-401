import { useEffect, useState } from "react";
// import project_type from './img/project_type.jpg';
import { Link } from "react-router-dom";

export default function Profile() {
  const url = "https://lyra.alwaysdata.net/public/api/USER";

  const [users, setUser] = useState([]);

  const fetchOptions = { method: "GET" };
  useEffect(() => {
    fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        setUser(dataJSON);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <article class="card">
      <div>
        {users.map((user) => (
          <h2>Id de l'utilisateur : {user.ID_USER}</h2>
        ))}
      </div>
          
      <div class="content">
        <p>ici les details de l'utilisateur</p>
      </div>
      <p>Age utilisateur</p>
    </article>
  )
}