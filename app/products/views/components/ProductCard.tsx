import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {SPACING} from '../../../styles/spacings';
import useTheme, {ThemeStyles} from '../../../theme/useTheme';

const ProductCard = (props: {product: Product}) => {
  const {styles} = useTheme(makeStyles);
  const {product} = props;
  const {description, image, price, unit} = product;
  const renderProductDetails = () => {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{description}</Text>
        <View style={styles.quantityPriceContainer}>
          <Text style={styles.quantityPriceText}>{unit}</Text>
          <Text style={styles.quantityPriceText}>{price}</Text>
        </View>
      </View>
    );
  };
  const renderProductImageAndAddBtn = () => {
    return (
      <View style={styles.imageButtonContainer}>
        <Image source={image} style={styles.image} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>+ Add</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {renderProductDetails()}

      {renderProductImageAndAddBtn()}
    </View>
  );
};

const makeStyles = ({colors}: ThemeStyles) =>
  StyleSheet.create({
    mainContainer: {
      flexDirection: 'row',
      backgroundColor: colors['background-tertiary'],
      height: 130,
      marginBottom: SPACING.S_2,
      borderRadius: 10,

      padding: SPACING.S_1,
    },

    contentContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingRight: SPACING.S_3,
    },
    imageButtonContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
    },

    quantityPriceContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 14,
      fontWeight: '400',
      color: colors['content-secondary'],
      flexShrink: 1,
      textAlign: 'justify',
    },
    quantityPriceText: {
      fontSize: 16,
      color: colors['content-secondary'],
      fontWeight: '700',
    },

    image: {
      width: 70,
      height: 70,
      borderRadius: 5,
      resizeMode: 'contain',
    },
    button: {
      backgroundColor: colors['background-secondary'],
      height: 30,
      borderRadius: 5,
      width: 70,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: colors['content-green'],
      fontSize: 16,
      fontWeight: '700',
    },
  });

export default ProductCard;
