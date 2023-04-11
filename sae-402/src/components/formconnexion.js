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
            <form>
                <label>
                    Choisissez votre parfum favori :
                    <select>
                        <option value="grapefruit">Pamplemousse</option>
                        <option value="lime">Citron vert</option>
                        <option selected value="coconut">Noix de coco</option>
                        <option value="mango">Mangue</option>
                    </select>
                </label>
                <input type="submit" value="Envoyer" />
            </form>
        </div>
    )
}