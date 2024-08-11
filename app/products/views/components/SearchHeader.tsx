import {View, StyleSheet, Text, TextInput} from 'react-native';
import {SPACING} from '../../../styles/spacings';
import {useState} from 'react';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import useTheme, {ThemeStyles} from '../../../theme/useTheme';

const SearchHeader = ({
  navigation,
  route,
  options,
  back,
}: NativeStackHeaderProps) => {
  const [text, setText] = useState('');
  const {styles, colors} = useTheme(makeStyles);
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon
          style={styles.icon}
          name={'arrow-back'}
          size={24}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <TextInput
          style={styles.textInput}
          placeholder={'Search to add products'}
          placeholderTextColor={colors['content-secondary-alt']}
          onChange={options.headerSearchBarOptions?.onChangeText}
          inputMode="text"
          value={text}
          onChangeText={(value: string) => {
            setText(value);
          }}
        />
        {
          <Icon
            name="clear"
            size={20}
            color="gray"
            onPress={() => setText('')}
            style={styles.icon}
          />
        }
        <Icon style={styles.icon} name={'search'} size={24}></Icon>
      </View>
    </View>
  );
};

export default SearchHeader;

const makeStyles = ({colors}: ThemeStyles) =>
  StyleSheet.create({
    container: {
      width: '100%',
    },
    searchContainer: {
      marginHorizontal: SPACING.S_2,
      marginTop: SPACING.S_2,
      flexDirection: 'row',
      backgroundColor: colors['background-secondary'],
      borderRadius: 40,
      justifyContent: 'space-between',
      alignContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontWeight: '700',
      fontSize: 16,
      color: colors['content-secondary'],
      marginTop: SPACING.S_1,
    },
    subTitle: {
      fontWeight: '400',
      fontSize: 12,
      color: colors['content-secondary'],
      marginVertical: SPACING.S_0,
    },
    icon: {
      color: colors['content-secondary-alt'],
      marginHorizontal: SPACING.S_2,
    },
    textInput: {
      flex: 1,
      color:colors['content-primary']
    },
  });
