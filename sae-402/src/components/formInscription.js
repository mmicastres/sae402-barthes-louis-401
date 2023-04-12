import { useEffect, useState } from "react";
import CreateForm from "../views/formnewacount"

export default function Profile() {
    let handlerutilisateur = (data) => {
        const url = "https://lyra.alwaysdata.net/public/api/USER";

        let myHeaders = new Headers();
        myHeaders.append("Content-type", "application/json");

        const fetchOptions = {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(data.toJSON())
        };
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
    }
    return (
        <div class="formhere">
            <CreateForm handler={handlerutilisateur}></CreateForm>
        </div>
    )
}