import { StyleSheet, Text, View} from 'react-native';
import {
  getSearchedProduct,
  getTrendingSubcategories,
} from '../../src/ProductRepository';
import {useEffect, useMemo, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProductRouteNames, ProductStackParamList} from './ProductScreenStack';
import ProductCardList from '../components/ProductCardList';
import HorizontalCarousel from '../components/HorizontalCarousel';
import SearchResultList from '../components/SearchResultList';

type ProductSearchScreenNavigationProp = NativeStackNavigationProp<
  ProductStackParamList,
  ProductRouteNames.SearchProductScreen
>;
const ProductSearchScreen = () => {
  const [searchKey, setSearchKey] = useState('');

  const navigation = useNavigation<ProductSearchScreenNavigationProp>();

  useEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        onChangeText: event => {
          setSearchKey(event.nativeEvent.text);
        },
      },
    });
  }, []);

  const trendingCategory = useMemo(() => getTrendingSubcategories(), []);

  const searchProductList = useMemo(
    () => getSearchedProduct(searchKey),
    [searchKey],
  );

  const renderTrendingItem = () => {
    if (searchKey.length !== 0) {
      return null;
    }
    return <HorizontalCarousel subcategory={trendingCategory} />;
  };

  const renderSearchResult = () => {
    if (searchProductList.length === 0) {
      return <></>;
    }
    return <SearchResultList products={searchProductList} />;
  };

  const renderSearchProductList = () => {
    if (searchProductList.length === 0) {
      return null;
    }
    return (
      <ProductCardList
        products={searchProductList}
        header={renderSearchResult()}
      />
    );
  };

  return (
    <View style={styles.container}>
      {renderTrendingItem()}
      {renderSearchProductList()}
    </View>
  );
};

export default ProductSearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
