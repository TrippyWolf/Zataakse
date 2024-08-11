import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {SPACING} from '../../../styles/spacings';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  ProductStackParamList,
  ProductRouteNames,
} from '../screens/ProductScreenStack';
import {useNavigation} from '@react-navigation/native';

type SubCategoryScreenNavigationProp = NativeStackNavigationProp<
  ProductStackParamList,
  ProductRouteNames.CategoryScreen
>;

const ViewAllCard = ({label}) => {
  const navigation = useNavigation<SubCategoryScreenNavigationProp>();

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

export default ViewAllCard;
