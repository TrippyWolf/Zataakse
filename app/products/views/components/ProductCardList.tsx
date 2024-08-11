import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ProductCard from './ProductCard';
import {SPACING} from '../../../styles/spacings';
import useTheme, {ThemeStyles} from '../../../theme/useTheme';

const ProductCardList = (props: {
  products: Product[];
  header?: React.ReactElement;
}) => {
  const {styles, colors} = useTheme(makeStyles);
  return (
    <FlatList
      data={props.products}
      renderItem={({item, index}) => (
        <View
          style={{
            paddingHorizontal: SPACING.S_0,
            paddingTop: index === 0 ? SPACING.S_0 : 0,
          }}>
          <ProductCard product={item} />
        </View>
      )}
      keyExtractor={(item, index) => item.name + index}
      contentContainerStyle={styles.listContainer}
      ListHeaderComponent={props.header}
      ListHeaderComponentStyle={{
        backgroundColor: colors['background-primary'],
      }}
    />
  );
};

const makeStyles = ({colors}: ThemeStyles) =>
  StyleSheet.create({
    listContainer: {
      backgroundColor: colors['background-secondary'],
      borderRadius: 10,
      margin: SPACING.S_2,
    },
  });

export default ProductCardList;
