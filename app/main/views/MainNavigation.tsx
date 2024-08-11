import React from 'react';
import {
  DefaultTheme,
  NavigationContainer,
  NavigationContainerProps,
} from '@react-navigation/native';
import {ReactNode} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OverviewStackScreen from '../../overview/views/screen/OverviewStackScreen';
import ProductScreenStack from '../../products/views/screens/ProductScreenStack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProfileStackScreen from '../../profile/views/screen/ProfileStackScreen';
import useTheme from '../../theme/useTheme';
import OrderStackScreen from '../../orders/views/screen/OrderStackScreen';

export interface ThemedNavigationProps extends NavigationContainerProps {
  children: ReactNode;
}

export interface Screenprops extends NavigationContainerProps {
  children: ReactNode;
}

const Tab = createBottomTabNavigator();

const ThemedNavigation = () => {
  const {colors: themeColor} = useTheme();
  const colors = {
    ...DefaultTheme.colors,
    background: themeColor['background-primary'],
  };
  return (
    <NavigationContainer theme={{...DefaultTheme, colors}}>
      <Tab.Navigator
        initialRouteName="Products"
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarStyle: {
            height: 60,
            backgroundColor: themeColor['background-main'],
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            color: themeColor['content-primary'],
          },
          tabBarActiveBackgroundColor: themeColor['background-tertiary'],
          tabBarItemStyle: {
            margin: 4,
            borderRadius: 8,
          },

          tabBarIcon: () => {
            let iconName;
            if (route.name === 'Orders') {
              iconName = 'add-shopping-cart';
            } else if (route.name === 'Products') {
              iconName = 'inventory-2';
            } else if (route.name === 'Overview') {
              iconName = 'currency-rupee';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            }

            return (
              <Icon
                name={iconName}
                size={24}
                color={themeColor['content-primary']}
              />
            );
          },
        })}>
        <Tab.Screen name="Orders" component={OrderStackScreen} />
        <Tab.Screen name="Products" component={ProductScreenStack} />
        <Tab.Screen name="Overview" component={OverviewStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default ThemedNavigation;
