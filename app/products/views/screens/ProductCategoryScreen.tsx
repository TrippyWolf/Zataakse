import {SafeAreaView, SectionList, StyleSheet, Text, View} from 'react-native';
import {getCategorySectionData} from '../../src/ProductRepository';
import {useMemo} from 'react';
import CategoryHeadline from '../components/CategoryHeadline';
import SubCategoryList from '../components/SubCategoryList';
import {SPACING} from '../../../styles/spacings';

const ProductCategoryScreen = () => {
  const data = useMemo(() => getCategorySectionData(), []);

  return (
    <SafeAreaView>
      <SectionList
        contentContainerStyle={styles.container}
        sections={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <View>
            <SubCategoryList subcategories={item} />
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <View style={styles.headerContainer}>
            <CategoryHeadline title={title} />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ProductCategoryScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: SPACING.S_2,
    marginHorizontal: SPACING.S_2,
    paddingBottom: SPACING.S_3,
  },
  headerContainer: {
    marginVertical: SPACING.S_2,
  },
});
