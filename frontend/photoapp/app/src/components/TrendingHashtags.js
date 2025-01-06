import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const TrendingHashtags = () => {
  const [hashtags, setHashtags] = useState([]);

  useEffect(() => {
    // Generate a dynamic number of hashtags (e.g., 100 items)
    const fetchedHashtags = Array.from({ length: 100 }, (_, i) => ({
      id: i.toString(),
      title: `#hashtag${i + 1}`,
      uri: `https://picsum.photos/200?random=${i}`,
    }));
    setHashtags(fetchedHashtags);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.uri }} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Trending Hashtags</Text>
      <FlatList
        data={hashtags}
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
    marginRight: 10,
    position: 'relative',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  overlay: {
    position: 'absolute',
    bottom: 5,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 4,
    alignItems: 'center',
    borderRadius: 10,
  },
  title: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default TrendingHashtags;
