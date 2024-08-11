import CarouselCategory from '../components/CarouselCategory';
import {
  getCategoryName,
  getProductsByCategoryId,
  getSubcategoriesForCarousel,
} from '../../src/ProductRepository';
import ProductCardList from '../components/ProductCardList';
import {View} from 'react-native';
import {useEffect, useMemo} from 'react';
import {ProductRouteNames, ProductStackParamList} from './ProductScreenStack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type SubCategoryScreenNavigationProp = NativeStackScreenProps<
  ProductStackParamList,
  ProductRouteNames.SubcategoryScreen
>;

const ProductSubCategoryScreen = ({
  route,
  navigation,
}: SubCategoryScreenNavigationProp) => {
  const categoryId = route.params.categoryId;
  const subCategoryId = route.params.id;
  const categoryName = useMemo(() => getCategoryName(categoryId), [categoryId]);

  useEffect(() => {
    navigation.setOptions({
      title: categoryName,
    });
  }, []);

  const subcatorgies = useMemo(
    () => getSubcategoriesForCarousel(categoryId),
    [],
  );
  const productList = useMemo(() => getProductsByCategoryId(categoryId), []);

  return (
    <View style={{flex: 1}}>
      <CarouselCategory subcategory={subcatorgies} />
      <ProductCardList products={productList} />
    </View>
  );
};
export default ProductSubCategoryScreen;
