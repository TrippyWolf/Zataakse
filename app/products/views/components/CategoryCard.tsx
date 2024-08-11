import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {SPACING} from '../../../styles/spacings';
import useTheme, {ThemeStyles} from '../../../theme/useTheme';

const CategoryCard = ({imageSource, label}) => {
  const {styles} = useTheme(makeStyles);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const makeStyles = ({colors}: ThemeStyles) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: 80,
    },
    imageContainer: {
      height: 70,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      backgroundColor: colors['background-secondary'],
      borderColor: colors['border-primary'],
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
      color: colors['content-secondary'],
      maxWidth: 75,
    },
  });

export default CategoryCard;
