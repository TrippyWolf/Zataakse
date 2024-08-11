import React from 'react';
import {
  NavigationContainer,
  NavigationContainerProps,
} from '@react-navigation/native';
import {useTheme} from '@react-navigation/native';
import {ReactNode} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OverviewStackScreen from '../../overview/views/screen/OverviewStackScreen';
import ProductScreenStack from '../../products/views/screens/ProductScreenStack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProfileStackScreen from '../../profile/views/screen/ProfileStackScreen';
import OrderStackScreen from '../../orders/views/screen/OrderStackScreen';

export interface ThemedNavigationProps extends NavigationContainerProps {
  children: ReactNode;
}

export interface Screenprops extends NavigationContainerProps {
  children: ReactNode;
}

const Tab = createBottomTabNavigator();

const ThemedNavigation = () => {
  const {colors: themeColor, dark} = useTheme();
  const colors = {...themeColor, background: '#FCFCFC'};
  return (
    <NavigationContainer theme={{dark, colors}}>
      <Tab.Navigator
        initialRouteName="Products"
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarStyle: {
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            color: '#6B6062',
          },
          tabBarActiveBackgroundColor: '#F1EFEF',
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

            return <Icon name={iconName} size={24} color={'#6B6062'} />;
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
