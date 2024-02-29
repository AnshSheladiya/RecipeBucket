import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from '../../layouts/SearchBar';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Find best recipes for cooking</Text>
      </View>
      <View>
        <SearchBar placeholder="Search recipes" />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Background color for the screen
    paddingHorizontal: 30, // Adjust the padding as needed
  },
  headerContainer: {
    marginRight: '7%',
    marginVertical: 15,
  },
  headerText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
});
