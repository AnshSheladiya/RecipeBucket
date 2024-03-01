import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import categories from '../data/categories.json'
const CategorySlider = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const filteredCategories = categories.filter(item => item.value !== '' && item.label !== '');

  // Render item for category tag
  const renderCategory = ({ item }) => {
    return (
      <TouchableOpacity
        style={[styles.category, selectedCategory === item.value && styles.selectedCategory]}
        onPress={() => setSelectedCategory(item.value)}
      >
        <Text style={[styles.categoryText, selectedCategory === item.value && styles.selectedCategoryText]}>
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Popular category ✨</Text>

      {/* Horizontal slider of category tags */}
      <FlatList
        data={filteredCategories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.label}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.slider}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'black',
  },
  slider: {
    paddingLeft: 10,
    marginTop:8
  },
  category: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: '#eee',
    marginRight: 10,
  },
  categoryText: {
    color: '#333',
    fontSize: 15,
  },
  selectedCategory: {
    backgroundColor: 'red',
  },
  selectedCategoryText: {
    color: 'white',
  },
});

export default CategorySlider;
