import {useState} from "react";
import * as React from "react";
import User from "../classes/User"


export default function CreateForm(props) {
    const date = new Date();
    let date_ajout = date.toJSON().slice(0, 10)
    const level = 0
    const admin = 0

    const [Mail, setMail] = useState("")
    const [Name, setName] = useState("")
    const [Surname, setSurname] = useState("")
    const [Pseudo, setPseudo] = useState("")
    const [Password, setPassword] = useState("")
    const [Age, setAge] = useState("")
    const [Type, setType] = useState("")
    const [Bio, setBio] = useState("") 

    const handleChangeMail = (event) => setMail(event.target.value)
    const handleChangeName = (event) => setName(event.target.value)
    const handleChangeSurname = (event) => setSurname(event.target.value)
    const handleChangePseudo = (event) => setPseudo(event.target.value)
    const handleChangePassword = (event) => setPassword(event.target.value)
    const handleChangeAge = (event) => setAge(event.target.value)
    const handleChangeType = (event) => setType(event.target.value)
    const handleChangeBio = (event) => setBio(event.target.value)

    const handleSubmit = (event) => {
        event.preventDefault();
        let data = new User(Pseudo, Password, Name, Surname, Mail, Age, date_ajout, Bio, level, admin, Type);
        console.log(data);
        props.handler(data);
    }

    return (
        <div class="formhere">
            <form>
                <h1>New Account</h1>

                <label><p>Mail</p></label>
                <input onChange={handleChangeMail} type="text" placeholder="Entrer le nom d'utilisateur" name="username" required />

                <label><p>Name</p></label>
                <input onChange={handleChangeName} type="text" placeholder="Enter a Name" name="Name" required />

                <label><p>Surname</p></label>
                <input onChange={handleChangeSurname}type="text" placeholder="Enter a Surname" name="Surname" required />

                <label><p>Pseudo</p></label>
                <input onChange={handleChangePseudo} type="text" placeholder="Enter a Pseudo" name="Pseudo" required />

                <label><p>Bio</p></label>
                <input onChange={handleChangeBio} type="text" placeholder="Enter a Bio" name="Bio" required />

                <label><p>Password</p></label>
                <input onChange={handleChangePassword} type="password" placeholder="Enter a Password" name="password" required />

                <label><p>Age</p></label>
                <input onChange={handleChangeAge} type="number" placeholder="Age" name="Age" required />

                <label><p>Type</p></label>
                <select onChange={handleChangeType} name="pets" id="pet-select">
                    <option >--Please choose a role--</option>
                    <option value="Professor">Professor</option>
                    <option value="Student">Student</option>
                </select>

                <div className="submits">
                    <button onClick={handleSubmit} value='LOGIN' >LOGIN</button>
                </div>
            </form>
        </div>
    )
}