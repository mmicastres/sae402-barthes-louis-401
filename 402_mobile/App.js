import React from 'react';
import { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginForm from './components/login__form';
import MainContent from './components/main_content';
import Allcards from './components/all_cards'

function HomeScreen() {
  return (
    <MainContent />
  );
}



function ProfileScreen() {

  const url = "https://lyra.alwaysdata.net/public/api/Cross/1";

  const [uti, setUti] = useState({});
  // const [mes_projects, setMes_projects] = useState({});


  const fetchOptions = { method: "GET" };
  useEffect(() => {
    fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        setUti(dataJSON);
        
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(uti.projects);

  const user = {
    avatar: 'https://via.placeholder.com/100x100',
    projects: [
      {
        title: 'Projet 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit tempus risus, ac faucibus leo hendrerit nec.',
      },
      {
        title: 'Projet 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit tempus risus, ac faucibus leo hendrerit nec.',
      },
      {
        title: 'Projet 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit tempus risus, ac faucibus leo hendrerit nec.',
      },
      {
        title: 'Nouveau project',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit tempus risus, ac faucibus leo hendrerit nec.',
      },
    ],
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFE3E3' }}>
        <Image source={{ uri: user.avatar }} style={{ width: 120, height: 120, borderRadius: 60, marginBottom: 20 }} />
          <View style={{ alignItems: 'center', marginBottom: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>{uti.PSEUDO_USER}</Text>
            <Text style={{ fontSize: 16, color: '#666', marginTop: 5 }}>Level: {uti.LEVEL_USER}</Text>
            <Text style={{ fontSize: 16, marginTop: 5 }}>Subscribed since: {uti.SUBDATE_USER}</Text>
            <Text style={{ fontSize: 16, marginTop: 10, color: '#333', backgroundColor: '#fff', padding: 10 }}>{uti.BIO_USER}</Text>
          </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          {user.projects.map((project, index) => (
            <View key={index} style={{ margin: 10, backgroundColor: '#FFF', borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
              <Image source={{ uri: project.image }} style={{ width: 150, height: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
              <Text style={{ fontSize: 16, fontWeight: 'bold', padding: 10 }}>{project.title}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '80%',
    height: 400,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
  },
})



function ProjectsScreen() {
  return (
      <Allcards />
  );
}

function ConnectionScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F0FFF0' }}>
      <LoginForm />
    </View>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Profile') {
              iconName = 'user';
            } else if (route.name === 'Projects') {
              iconName = 'folder';
            } else if (route.name === 'Connexion') {
              iconName = 'sign-in';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#AF71FF',
          inactiveTintColor: '#444444',
          style: {
            backgroundColor: '#444444',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          tabStyle: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}
        tabBarStyle={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Projects" component={ProjectsScreen} />
        <Tab.Screen name="Connexion" component={ConnectionScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
