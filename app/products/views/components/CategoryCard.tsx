import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {SPACING} from '../../../styles/spacings';

const CategoryCard = ({imageSource, label}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 80,
  },
  imageContainer: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#F1EFEF',
    marginBottom: SPACING.S_1,
    borderRadius: 12,
  },
  image: {
    resizeMode: 'contain',
    height: 50,
  },
  label: {
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center',
    color: '#2A2A2A',
    maxWidth: 75,
  },
});

export default CategoryCard;
