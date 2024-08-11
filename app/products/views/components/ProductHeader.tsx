import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import {ProductRouteNames} from '../screens/ProductScreenStack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet} from 'react-native';
import {SPACING} from '../../../styles/spacings';
import useTheme, {ThemeStyles} from '../../../theme/useTheme';
const ProductHeader = ({navigation, options}: NativeStackHeaderProps) => {
  const {styles} = useTheme(makeStyles);
  const renderBackButton = () => {
    return (
      <Icon
        style={styles.icon}
        name={'arrow-back'}
        size={24}
        onPress={() => {
          navigation.goBack();
        }}
      />
    );
  };

  const renderTitle = () => {
    return (
      <View style={{flex: 1}}>
        <Text style={styles.title}>{options.title}</Text>
        <Text style={styles.subTitle}>{'Select any product to add'}</Text>
      </View>
    );
  };
  const renderSearchIcon = () => {
    return (
      <Icon
        style={styles.icon}
        onPress={() => {
          navigation.navigate(ProductRouteNames.SearchProductScreen);
        }}
        name={'search'}
        size={24}></Icon>
    );
  };
  return (
    <View style={styles.container}>
      {renderBackButton()}
      {renderTitle()}
      {renderSearchIcon()}
    </View>
  );
};

export default ProductHeader;

const makeStyles = ({colors}: ThemeStyles) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      backgroundColor: colors['background-secondary'],
      borderBottomStartRadius: 15,
      borderBottomEndRadius: 15,
      elevation: 2,
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
      color: colors['content-secondary'],
      marginHorizontal: SPACING.S_2,
    },
  });
