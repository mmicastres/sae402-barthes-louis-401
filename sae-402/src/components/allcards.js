import { useEffect, useState } from "react";
import Card from "../views/cards"

export default function Allcards() {
    const url = "https://lyra.alwaysdata.net/public/api/PROJECT";

    const [Projects, setProjects] = useState([]);

    const fetchOptions = { method: "GET" };
    useEffect(() => {
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                console.log(dataJSON);
                setProjects(dataJSON);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div class="allaccueil">
            <div class="cards">
                {Projects.map((project) =>
                    <Card img={project.IMG_PROJ} USER_ID={project.ID_USER_IS_POSTED} USERNAME={project.ID_USER_IS_POSTED} Title={project.NAME_PROJ} description={project.DESCRIPTION_PROJ}></Card>
                )}
            </div>
        </div>
    )
}