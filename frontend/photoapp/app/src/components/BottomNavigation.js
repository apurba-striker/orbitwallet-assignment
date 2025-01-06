import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const BottomNavigation = () => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="home" size={24} color="#333" />
      <FontAwesome5 name="search" size={24} color="#333" />
      <FontAwesome5 name="plus-circle" size={24} color="#333" />
      <FontAwesome5 name="users" size={24} color="#333" />
      <FontAwesome5 name="user" size={24} color="#333" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
});

export default BottomNavigation;
