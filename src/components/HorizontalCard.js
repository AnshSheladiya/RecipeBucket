import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HorizontalCardComponent = ({ business }) => {
  return (
    <View style={styles.card}>
      <Image
        source={require('../assets/factory.png')}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{business.businessId.name}</Text>
        <Text style={styles.description}>{business.businessId.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
      color: 'black',
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
});

export default HorizontalCardComponent;
