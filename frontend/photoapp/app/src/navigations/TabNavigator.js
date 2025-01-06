// /src/navigation/TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Search" component={SearchScreen} />
        {/* Add other tabs as needed */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
