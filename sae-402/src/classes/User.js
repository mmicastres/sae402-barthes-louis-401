export default class User {

    constructor(Pseudo, Password, Name, Surname, Mail, Age, date_ajout, Bio, level, admin, Type) {
    this._Mail = Mail;
    this._Name = Name;
    this._Surname = Surname;
    this._Pseudo = Pseudo;
    this._Password = Password;
    this._Age = Age;
    this._Type = Type;
    this._date_ajout = date_ajout;
    this._Bio = Bio;
    this._level = level;
    this._admin = admin
    }

    get Mail() { return this._Mail}
    get Name() { return this._Name}
    get Surname() { return this._Surname}
    get Pseudo() { return this._Pseudo}
    get Password() { return this._Password}
    get Age() { return this._Age}
    get date_ajout() { return this._date_ajout}
    get Bio() { return this._Bio}
    get level() { return this._level}
    get admin() { return this._admin}
    get Type() { return this._Type}

    toJSON(){
        return {
            Mail : this._Mail,
            Name : this._Name,
            Surname : this._Surname,
            Pseudo : this._Pseudo,
            Password : this._Password,
            Age : this._Age,
            Type : this._Type,
            date_ajout : this._date_ajout,
            Bio : this._Bio,
            level : this._level,
            admin : this._admin
        }
    }
}