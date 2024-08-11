import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductCategoryScreen from './ProductCategoryScreen';
import ProductSubCategoryScreen from './ProductSubCategoryScreen';
import React from 'react';
import ProductSearchScreen from './ProductSearchScreen';
import ProductHeader from '../components/ProductHeader';
import SearchHeader from '../components/SearchHeader';

export enum ProductRouteNames {
  ProductMainScreen = 'ProductMainScreen',
  CategoryScreen = 'CategoryScreen',
  SubcategoryScreen = 'SubCategoryScreen',
  SearchProductScreen = 'SearchProductScreen',
}

export type ProductStackParamList = {
  [ProductRouteNames.ProductMainScreen]: undefined;
  [ProductRouteNames.CategoryScreen]: undefined;
  [ProductRouteNames.SubcategoryScreen]: SubCategory;
  [ProductRouteNames.SearchProductScreen]: undefined;
};

const ProductStack = createNativeStackNavigator<ProductStackParamList>();

function ProductScreenStack() {
  return (
    <ProductStack.Navigator>
      <ProductStack.Screen
        name={ProductRouteNames.CategoryScreen}
        component={ProductCategoryScreen}
        options={{
          header: props => {
            props.options.title = 'Product Categories';
            return <ProductHeader {...props} />;
          },
        }}
      />
      <ProductStack.Screen
        name={ProductRouteNames.SubcategoryScreen}
        component={ProductSubCategoryScreen}
        options={{
          header: props => {
            return <ProductHeader {...props} />;
          },
        }}
      />
      <ProductStack.Screen
        name={ProductRouteNames.SearchProductScreen}
        component={ProductSearchScreen}
        options={{
          header: props => {
            return <SearchHeader {...props} />;
          },
        }}
      />
    </ProductStack.Navigator>
  );
}

export default ProductScreenStack;
