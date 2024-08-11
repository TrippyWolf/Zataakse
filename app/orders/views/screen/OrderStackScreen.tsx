import {Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SPACING } from '../../../styles/spacings';

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
  return (
    <OrderStack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
          color: '#6B6062',
        },
        headerTitleAlign: 'center',
      }}>
      <OrderStack.Screen name="Order" component={OrderMainScreen} />
    </OrderStack.Navigator>
  );
}

export default OrderStackScreen;
