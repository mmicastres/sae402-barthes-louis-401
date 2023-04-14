export default class User {

    constructor(PSEUDO_USER, PWD_USER, NAME_USER, SURNAME_USER, MAIL_USER, AGE_USER, SUBDATE_USER, BIO_USER, LEVEL_USER, ADMIN, PROF_ETU) {
    this._Mail = MAIL_USER;
    this._Name = NAME_USER;
    this._Surname = SURNAME_USER;
    this._Pseudo = PSEUDO_USER;
    this._Password = PWD_USER;
    this._Age = AGE_USER;
    this._Type = PROF_ETU;
    this._date_ajout = SUBDATE_USER;
    this._Bio = BIO_USER;
    this._level = LEVEL_USER;
    this._admin = ADMIN
    }

    get MAIL_USER() { return this._Mail}
    get NAME_USER() { return this._Name}
    get SURNAME_USER() { return this._Surname}
    get PSEUDO_USER() { return this._Pseudo}
    get PWD_USER() { return this._Password}
    get AGE_USER() { return this._Age}
    get SUBDATE_USER() { return this._date_ajout}
    get BIO_USER() { return this._Bio}
    get LEVEL_USER() { return this._level}
    get ADMIN() { return this._admin}
    get PROF_ETU() { return this._Type}

    toJSON(){
        return {
            MAIL_USER : this._Mail,
            NAME_USER : this._Name,
            SURNAME_USER : this._Surname,
            PSEUDO_USER : this._Pseudo,
            PWD_USER : this._Password,
            AGE_USER : this._Age,
            PROF_ETU : this._Type,
            SUBDATE_USER : this._date_ajout,
            BIO_USER : this._Bio,
            LEVEL_USER : this._level,
            ADMIN : this._admin
        }
    }
}