import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleSubmit = () => {
    console.log(`Email: ${email}, Password: ${password}`);
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
              placeholder="Adresse email"
              placeholderTextColor="#444444"
              onChangeText={text => setEmail(text)}
              value={email}
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
              onPress={handleSubmit}
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
              onPress={() => console.log('Enregistrement')}
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
});

export default LoginForm;
