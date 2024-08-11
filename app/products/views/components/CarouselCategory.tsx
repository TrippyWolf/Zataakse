import React, {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import CategoryCard from './CategoryCard';
import {SPACING} from '../../../styles/spacings';
import ViewAllCard from './ViewAllCard';

const CarouselCategory = (props: {subcategory: SubCategory[][]}) => {
  const width = Dimensions.get('window').width;
  const [currentIndex, setCurrentIndex] = useState(0);

  (function () {
    if (props.subcategory.length === 0) {
      return;
    }
    const firstSubCategory = [
      {
        name: 'View All',
        categoryId: 0,
        id: 0,
        image: '',
      },
      ...props.subcategory[0],
    ];
    props.subcategory[0] = firstSubCategory;
  })();

  const renderPaginationDot = () => {
    return (
      <View style={styles.paginationContainer}>
        {Array.from({length: props.subcategory.length}).map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              {backgroundColor: i === currentIndex ? 'orange' : 'gray'},
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={{height: 250, margin: SPACING.S_2}}>
      <Carousel
        data={props.subcategory}
        width={width}
        renderItem={({item}) => {
          return (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                width: '100%',
                flexWrap: 'wrap',
              }}>
              {item.map(data => {
                if (data.id === 0 && data.categoryId === 0) {
                  return (
                    <View
                      key={`${data.id}`}
                      style={{width: '25%', height: '50%'}}>
                      <ViewAllCard label={data.name} />
                    </View>
                  );
                }
                return (
                  <View
                    key={`${data.id}`}
                    style={{width: '25%', height: '50%'}}>
                    <CategoryCard imageSource={data.image} label={data.name} />
                  </View>
                );
              })}
            </View>
          );
        }}
        pagingEnabled
        onSnapToItem={setCurrentIndex}
      />
      {renderPaginationDot()}
    </View>
  );
};

const styles = StyleSheet.create({
  paginationDotContainer: {
    marginHorizontal: 4,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
  },
  paginationContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: SPACING.S_2,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    margin: 4,
  },
});
export default CarouselCategory;
