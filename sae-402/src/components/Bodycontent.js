import * as React from "react";
// import project_type from './img/project_type.jpg';
import { Link } from "react-router-dom";

export default function Bodycontent() {
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
        <div class="allaccueil">
            <h2>Dayly projects</h2>
            <div class="maincontent">
                <div class="cards">
                    <article class="card">
                        <div>
                            <h2>Project 1</h2>
                        </div>
                        <img src='https://cdn.discordapp.com/attachments/885543075152289894/1095259997241360434/project_type.jpg' alt="project" />
                        <div class="content">
                            <p> The idea of reaching the North Pole by means of balloons appears to have been entertained many years ago. </p>
                        </div>
                        <p class="User">User here</p>
                    </article>

                    <article class="card">
                        <div>
                            <h2>Project 2</h2>
                        </div>
                        <img src='https://cdn.discordapp.com/attachments/885543075152289894/1095259997241360434/project_type.jpg' alt="project" />
                        <div class="content">
                            <p>Short content.</p>
                        </div>
                        <p class="User">User here</p>
                    </article>

                    <article class="card">
                        <div>
                            <h2>Project 3</h2>
                        </div>
                        <img src='https://cdn.discordapp.com/attachments/885543075152289894/1095259997241360434/project_type.jpg' alt="project" />
                        <div class="content">
                            <p>In a curious work, published in Paris in 1863 by Delaville Dedreux, there is a
                                suggestion for reaching the North Pole by an aerostat.</p>
                        </div>
                        <p class="User">User here</p>
                    </article>

                    <article class="card">
                        <div>
                            <h2>Project 4</h2>
                        </div>
                        <img src='https://cdn.discordapp.com/attachments/885543075152289894/1095259997241360434/project_type.jpg' alt="project" />
                        <div class="content">
                            <p> The idea of reaching the North Pole by means of balloons appears to have been entertained many
                                years ago. </p>
                        </div>
                        <p class="User">User here</p>
                    </article>

                    <article class="card">
                        <div>
                            <h2>Project 4</h2>
                        </div>
                        <img src='https://cdn.discordapp.com/attachments/885543075152289894/1095259997241360434/project_type.jpg' alt="project" />
                        <div class="content">
                            <p> The idea of reaching the North Pole by means of balloons appears to have been entertained many
                                years ago. </p>
                        </div>
                        <p class="User">User here</p>
                    </article>

                    <article class="card">
                        <div>
                            <h2>Project 4</h2>
                        </div>
                        <img src='https://cdn.discordapp.com/attachments/885543075152289894/1095259997241360434/project_type.jpg' alt="project" />
                        <div class="content">
                            <p> The idea of reaching the North Pole by means of balloons appears to have been entertained many
                                years ago. </p>
                        </div>
                        <p class="User">User here</p>
                    </article>
                </div>

            </div>
        </div>
    )
}