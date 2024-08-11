import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {SPACING} from '../../../styles/spacings';

const SearchResultList = (props: {products: Product[]}) => {
  return (
    <FlatList
      style={{marginBottom: SPACING.S_1}}
      data={props.products}
      renderItem={({item}) => (
        <View style={styles.itemContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={item.image} />
          </View>
          <Text style={styles.title}>{item.name}</Text>
        </View>
      )}
      keyExtractor={item => item.name}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  itemContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: SPACING.S_1,
  },
  imageContainer: {
    marginRight: SPACING.S_1,
    borderWidth: 1,
    borderColor: '#F1EFEF',
    borderRadius: 4,
    padding: SPACING.S_0,
  },
  image: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 12,
    fontWeight: '400',
    color: '#2A2A2A',
  },
});

export default SearchResultList;
