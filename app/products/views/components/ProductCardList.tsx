import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ProductCard from './ProductCard';
import {SPACING} from '../../../styles/spacings';

const ProductCardList = (props: {
  products: Product[];
  header?: React.ReactElement;
}) => {
  return (
    <FlatList
      data={props.products}
      renderItem={({item}) => <ProductCard product={item} />}
      keyExtractor={(item, index) => item.name + index}
      contentContainerStyle={styles.listContainer}
      ListHeaderComponent={props.header}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#ffffff',
    padding: SPACING.S_0,
    borderRadius: 10,
    margin: SPACING.S_2,
  },
});

export default ProductCardList;
