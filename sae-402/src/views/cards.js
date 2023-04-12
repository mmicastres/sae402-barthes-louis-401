import { Link } from "react-router-dom";

export default function Card(data) {

    return (
        <article class="card">
            <div>
                <h2>{data.Title}</h2>
            </div>
            <img src='{data.img}' alt="project" />
            <div class="content">
                <p>{data.description}</p>
            </div>
            <Link to="/User/${data.USER_ID}"><p>{data.USERNAME}</p></Link>
        </article>
    )
}