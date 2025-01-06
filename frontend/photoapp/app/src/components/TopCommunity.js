import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const TopCommunity = () => {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    // Generate a dynamic number of community items (e.g., 50 items)
    const fetchedCommunities = Array.from({ length: 50 }, (_, i) => ({
      id: i.toString(),
      title: `Community ${i + 1}`,
      posts: `${Math.floor(Math.random() * 200 + 50)} posts/day`,
      uri: `https://picsum.photos/300?random=${i}`,
    }));
    setCommunities(fetchedCommunities);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.uri }} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.posts}>{item.posts}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Top Community</Text>
      <FlatList
        data={communities}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        initialNumToRender={10} // Optimize rendering for large lists
        maxToRenderPerBatch={10} // Number of items rendered at once
        windowSize={5} // Controls how many items are kept in memory
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  item: {
    marginRight: 15,
    position: 'relative',
  },
  image: {
    width: 180,
    height: 120,
    borderRadius: 10,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 8,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  posts: {
    color: '#ccc',
    fontSize: 12,
  },
});

export default TopCommunity;
