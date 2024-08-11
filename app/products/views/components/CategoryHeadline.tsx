import {StyleSheet, Text, View} from 'react-native';
import {SPACING} from '../../../styles/spacings';

const CategoryHeadline = (props: {title: string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: SPACING.S_2,
  },
  line: {
    width: '70%',
    height: 1,
    backgroundColor: '#F1EFEF',
    marginLeft: SPACING.S_1,
    paddingRight: SPACING.S_2,
  },
  title: {
    color: '#6B6062',
    fontWeight: '500',
    fontSize: 10,
  },
});
export default CategoryHeadline;
