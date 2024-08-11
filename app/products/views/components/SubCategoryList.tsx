import {FlatList, StyleSheet, View} from 'react-native';
import CategoryCard from './CategoryCard';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {
  ProductRouteNames,
  ProductStackParamList,
} from '../screens/ProductScreenStack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type SubCategoryScreenNavigationProp = NativeStackNavigationProp<
  ProductStackParamList,
  ProductRouteNames.SubcategoryScreen
>;

const SubCategoryList = (props: {subcategories: SubCategory[]}) => {
  const navigation = useNavigation<SubCategoryScreenNavigationProp>();

  return (
    <View style={styles.listContainer}>
      {props.subcategories.map(data => {
        return (
          <View key={data.id} style={styles.container}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(ProductRouteNames.SubcategoryScreen, data);
              }}>
              <CategoryCard imageSource={data.image} label={data.name} />
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default SubCategoryList;

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 24,
  },
  container: {
    minWidth: '25%',
  },
});
