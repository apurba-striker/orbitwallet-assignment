import React from 'react';
import { ScrollView, StyleSheet, View, Text, TextInput, Image } from 'react-native';
import TrendingHashtags from '../components/TrendingHashtags';
import TopCommunity from '../components/TopCommunity';

const SearchScreen = () => {
  return (
    <View style={styles.screen}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Discover the world</Text>
          <TextInput style={styles.searchBar} placeholder="Search" placeholderTextColor="#888" />
        </View>

        {/* Top Search */}
        <View style={styles.topSearchContainer}>
          <Image style={styles.topSearch} source={{ uri: 'https://picsum.photos/400/200' }} />
          <Text style={styles.topSearchText}>#Top search of the day</Text>
        </View>

        {/* Trending Hashtags */}
        <TrendingHashtags />

        {/* Top Community */}
        <TopCommunity />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    paddingHorizontal: 10,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  searchBar: {
    height: 40,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  topSearchContainer: {
    marginBottom: 20,
    position: 'relative',
  },
  topSearch: {
    width: '100%',
    height: 180,
    borderRadius: 12,
  },
  topSearchText: {
    position: 'absolute',
    bottom: 15,
    left: 20,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
});

export default SearchScreen;
