import * as React from "react";
import { Link } from "https://lyra.alwaysdata.net/lyra";

export default function body_content(){
    const url = "";

    const [rgaer, rgqerg] = useState([]);

    const fetchOptions = { method: "GET" };
    useEffect(() => {
      fetch(url, fetchOptions)
        .then((response) => {
          return response.json();
        })
        .then((dataJSON) => {
          console.log(dataJSON);
          setRecettes(dataJSON);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    fetch
    return(
            <h1>hello :</h1>
    )
}