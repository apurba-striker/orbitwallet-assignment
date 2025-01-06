// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import SearchScreen from './src/screens/SearchScreen';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

// Placeholder components for Profile and Settings
const ProfileScreen: React.FC = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Profile Screen</Text>
  </View>
);
const HomeScreen: React.FC = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Profile Screen</Text>
  </View>
);

const SettingsScreen: React.FC = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Settings Screen</Text>
  </View>
);

const App: React.FC = () => {
  return (
    
     <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } 
            if (route.name === 'Search') {
              iconName = 'search';
            } else if (route.name === 'Profile') {
              iconName = 'users';
            } else if (route.name === 'Settings') {
              iconName = 'settings';
            }
            return <FontAwesome5 name={iconName} size={24} color="#333" />;
          },
        })}
      >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
    
  );
};

export default App;
