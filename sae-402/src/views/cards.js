import { Link } from "react-router-dom";

export default function Card(data) {
    let link = "/User/" + data.USER_ID
    return (
        <article class="card">
            <div>
                <h2>{data.Title}</h2>
            </div>
            <img src='https://cdn.discordapp.com/attachments/885543075152289894/1095259997241360434/project_type.jpg' alt="project" />
            <div class="content">
                <p>{data.description}</p>
            </div>
            <Link to={link} ><p>{data.USERNAME}</p></Link>
        </article>
    )
}