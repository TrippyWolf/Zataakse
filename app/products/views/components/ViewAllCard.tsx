import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {SPACING} from '../../../styles/spacings';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  ProductStackParamList,
  ProductRouteNames,
} from '../screens/ProductScreenStack';
import {useNavigation} from '@react-navigation/native';
import useTheme, {ThemeStyles} from '../../../theme/useTheme';

type SubCategoryScreenNavigationProp = NativeStackNavigationProp<
  ProductStackParamList,
  ProductRouteNames.CategoryScreen
>;

const ViewAllCard = ({label}) => {
  const navigation = useNavigation<SubCategoryScreenNavigationProp>();
  const {styles} = useTheme(makeStyles);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(ProductRouteNames.CategoryScreen);
      }}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Text style={styles.label}>{label}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
      borderColor: colors['background-tertiary'],
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
      color: colors['content-primary'],
      maxWidth: 75,
    },
  });

export default ViewAllCard;
