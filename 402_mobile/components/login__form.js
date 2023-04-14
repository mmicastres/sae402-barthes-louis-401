import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import User from "../classes/User"

const LoginForm = () => {
    let handlerutilisateur = (data) => {
        const url = "https://lyra.alwaysdata.net/public/api/USER";

        let myHeaders = new Headers();
        myHeaders.append("Content-type", "application/json");
        console.log(data.toJSON());
        const fetchOptions = {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(data.toJSON())
        };
            fetch(url, fetchOptions)
                .then((response) => {
                    return response.json();
                })
                .then((dataJSON) => {
                    console.log(dataJSON);
                })
                .catch((error) => {
                    console.log(error);
                });
    }

    const [utilisator, setUtilisator] = useState([]);

    let handlerconnect = (data) => {
        const url = "https://lyra.alwaysdata.net/public/api/CONNEXION";

        let myHeaders = new Headers();
        myHeaders.append("Content-type", "application/json");
        console.log(data.toJSON());
        const fetchOptions = {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(data.toJSON())
        };
            fetch(url, fetchOptions)
                .then((response) => {
                    return response.json();
                })
                .then((dataJSON) => {
                    console.log(dataJSON);
                    setUtilisator(dataJSON)
                    console.log(utilisator)
                })
                .catch((error) => {
                    console.log(error);
                });

        return utilisator
    }

    const date = new Date();
    let date_ajout = date.toJSON().slice(0, 10)
    const level = 0
    let admin = 0

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showLoginForm, setShowLoginForm] = useState(true);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [age, setAge] = useState('');
    const [role, setRole] = useState('');


    const handleSubmitConnect = () => {
        console.log(`Email: ${username}, Password: ${password}`);
        let data = new User(username, password);
        handlerconnect(data)
    };
 
    const handleSubmitRegister = () => {
        console.log(`Email: ${email}, name: ${name}, surname: ${surname}, username: ${username}, description: ${description}, age: ${age}, Password: ${password}`);
        let data = new User(username, password, name, surname, email, age, date_ajout, description, level, admin, role);
        console.log(data);
        handlerutilisateur(data)
    };

    const handleRegister = () => {
        setShowLoginForm(false);
    };

    const handleBack = () => {
        setShowLoginForm(true);
    };

    return (
        <View style={styles.container}>
            {showLoginForm ? (
                <>
                    <Text style={styles.title}>Connexion :</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Pseudo"
                            placeholderTextColor="#444444"
                            onChangeText={text => setUsername(text)}
                            value={username}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Mot de passe"
                            placeholderTextColor="#444444"
                            onChangeText={text => setPassword(text)}
                            value={password}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.registerButton]}
                            onPress={handleRegister}
                        >
                            <Text style={[styles.buttonText, styles.registerButtonText]}>Register</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleSubmitConnect}
                        >
                            <Text style={styles.buttonText}>Connexion</Text>
                        </TouchableOpacity>
                    </View>
                </>
            ) : (
                <>
                    <Text style={styles.title}>Register :</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Adresse email"
                            placeholderTextColor="#444444"
                            onChangeText={text => setEmail(text)}
                            value={email}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Prénom"
                            placeholderTextColor="#444444"
                            onChangeText={text => setName(text)}
                            value={name}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Nom"
                            placeholderTextColor="#444444"
                            onChangeText={text => setSurname(text)}
                            value={surname}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Pseudo"
                            placeholderTextColor="#444444"
                            onChangeText={text => setUsername(text)}
                            value={username}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Description"
                            placeholderTextColor="#444444"
                            onChangeText={text => setDescription(text)}
                            value={description}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Mot de passe"
                            placeholderTextColor="#444444"
                            onChangeText={text => setPassword(text)}
                            value={password}
                            secureTextEntry={true}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Âge"
                            placeholderTextColor="#444444"
                            onChangeText={text => setAge(text)}
                            value={age}
                        />
                        <View style={styles.selectContainer}>
                            <Text style={styles.selectLabel}>Rôle :</Text>
                            <TouchableOpacity
                                style={role === 0 ? styles.selectButtonSelected : styles.selectButton}
                                onPress={() => setRole(0)}
                            >
                                <Text style={styles.selectButtonText}>Student</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={role === 1 ? styles.selectButtonSelected : styles.selectButton}
                                onPress={() => setRole(1)}
                            >
                                <Text style={styles.selectButtonText}>Professor</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.backButton]}
                            onPress={handleBack}
                        >
                            <Text style={[styles.buttonText, styles.backButtonText]}>Retour</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, styles.registerButton]}
                            onPress={handleSubmitRegister}
                        >
                            <Text style={[styles.buttonText, styles.registerButtonText]}>Enregistrer</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '80%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333333',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        height: 50,
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        color: '#444444',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        backgroundColor: '#FFFFFF',
        borderColor: '#333333',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        flex: 1,
        marginLeft: 10,
    },
    registerButton: {
        backgroundColor: '#333333',
        borderColor: '#333333',
        borderWidth: 2,
        marginLeft: 0,
    },
    buttonText: {
        color: '#333333',
        fontSize: 18,
        fontWeight: 'bold',
    },
    registerButtonText: {
        color: '#FFFFFF',
    },
    selectContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    selectLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
    },
    selectButton: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#000',
        marginRight: 10,
    },
    selectButtonSelected: {
        backgroundColor: '#F0FFF0',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginRight: 10,
    },
    selectButtonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    selectButtonTextSelected: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default LoginForm;
