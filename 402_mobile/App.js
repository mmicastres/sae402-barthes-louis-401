import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginForm from './components/login__form';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFBBBB' }}>
      <Text style={{ fontSize: 24, color: '#FFFFFF' }}>Accueil</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFE3E3' }}>
      <Text style={{ fontSize: 24, color: '#000000' }}>Profil</Text>
    </View>
  );
}

function ProjectsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E5D2FF' }}>
      <Text style={{ fontSize: 24, color: '#000000' }}>Projets</Text>
    </View>
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
          activeTintColor: '#FFBBBB',
          inactiveTintColor: '#FFE3E3',
          style: {
            backgroundColor: '#E5D2FF',
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
