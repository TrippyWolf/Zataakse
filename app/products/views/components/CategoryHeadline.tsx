import {StyleSheet, Text, View} from 'react-native';
import {SPACING} from '../../../styles/spacings';
import useTheme, {ThemeStyles} from '../../../theme/useTheme';

const CategoryHeadline = (props: {title: string}) => {
  const {styles} = useTheme(makeStyles);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.line} />
    </View>
  );
};

const makeStyles = ({colors}: ThemeStyles) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: SPACING.S_2,
    },
    line: {
      width: '70%',
      height: 1,
      backgroundColor: colors['border-primary'],
      marginLeft: SPACING.S_1,
      paddingRight: SPACING.S_2,
    },
    title: {
      color: colors['content-primary'],
      fontWeight: '500',
      fontSize: 10,
    },
  });
export default CategoryHeadline;
