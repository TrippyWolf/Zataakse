import {Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SPACING} from '../../../styles/spacings';
import useTheme from '../../../theme/useTheme';

const OrderStack = createNativeStackNavigator();

function OrderMainScreen() {
  return (
    <Text
      style={{
        margin: SPACING.S_2,
        textAlign: 'center',
        fontSize: 18,
        color: '#2a2a2a',
      }}>
      {'Your Orders will be shown here'}
    </Text>
  );
}

function OrderStackScreen() {
  const {colors} = useTheme();
  return (
    <OrderStack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
          color: colors['content-primary'],
        },
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: colors['background-secondary'],
        },
      }}>
      <OrderStack.Screen name="Order" component={OrderMainScreen} />
    </OrderStack.Navigator>
  );
}

export default OrderStackScreen;
