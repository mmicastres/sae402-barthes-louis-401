import * as React from "react";
// import project_type from './img/project_type.jpg';
import { Link } from "react-router-dom";

export default function Connectform() {
    // const url = "https://lyra.alwaysdata.net/public/api/PROJECT";

    // const [recettes, setRecettes] = useState([]);

    // const fetchOptions = { method: "GET" };
    // useEffect(() => {
    //   fetch(url, fetchOptions)
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((dataJSON) => {
    //       console.log(dataJSON);
    //       setRecettes(dataJSON);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }, []);


    return (
        <div class="formhere">
            <form action="verification.php" method="POST">
                <h1>Connexion</h1>

                <label><p>Nom d'utilisateur :</p></label>
                <input type="text" placeholder="Entrer le nom d'utilisateur" name="username" required />

                <label><p>Mot de passe :</p></label>
                <input type="password" placeholder="Entrer le mot de passe" name="password" required />
                <div class="submits">
                    <input type="submit" id='submit' value='LOGIN' />
                    <Link to="/CreateForm" id='submit'><input type="submit" id='submit' value='REGISTER' /></Link>
                </div>
            </form>

        </div>
    )
}