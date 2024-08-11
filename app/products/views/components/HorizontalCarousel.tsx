import {
  View,
  ScrollView,
  FlatList,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {SPACING} from '../../../styles/spacings';
import useTheme, {ThemeStyles} from '../../../theme/useTheme';

const HorizontalCarousel = (props: {subcategory: SubCategory[]}) => {
  const {subcategory} = props;
  const {styles} = useTheme(makeStyles);
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        directionalLockEnabled={true}
        alwaysBounceVertical={false}>
        <FlatList
          contentContainerStyle={{alignSelf: 'flex-start'}}
          numColumns={4}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={subcategory}
          pagingEnabled={true}
          directionalLockEnabled={true}
          alwaysBounceVertical={false}
          renderItem={({item, index}) => {
            return (
              <View style={styles.itemContainer}>
                <Text style={styles.title}>{item.name}</Text>
                <Image style={styles.image} source={item.image} />
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

const makeStyles = ({colors}: ThemeStyles) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: SPACING.S_1,
    },
    itemContainer: {
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors['border-primary'],
      borderRadius: 4,
      flexDirection: 'row',
      margin: SPACING.S_1,
      padding: SPACING.S_0,
    },
    image: {
      width: 24,
      height: 24,
    },
    title: {
      fontSize: 12,
      fontWeight: '500',
      color: colors['content-secondary'],
      marginRight: SPACING.S_1,
    },
  });

export default HorizontalCarousel;
