import {View, StyleSheet, Text, TextInput} from 'react-native';
import {SPACING} from '../../../styles/spacings';
import {useState} from 'react';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchHeader = ({
  navigation,
  route,
  options,
  back,
}: NativeStackHeaderProps) => {
  const [text, setText] = useState('');

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
          placeholderTextColor={'#C5BEC0'}
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

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  searchContainer: {
    marginHorizontal: SPACING.S_2,
    marginTop: SPACING.S_2,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 40,
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    color: '#2A2A2A',
    marginTop: SPACING.S_1,
  },
  subTitle: {
    fontWeight: '400',
    fontSize: 12,
    color: '#2A2A2A',
    marginVertical: SPACING.S_0,
  },
  icon: {
    color: '#C5BEC0',
    marginHorizontal: SPACING.S_2,
  },
  textInput: {
    flex: 1,
  },
});
