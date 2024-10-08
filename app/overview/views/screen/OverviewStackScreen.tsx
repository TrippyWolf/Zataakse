import {Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SPACING} from '../../../styles/spacings';
import useTheme from '../../../theme/useTheme';

const OverviewStack = createNativeStackNavigator();

function OverviewMainScreen() {
  return (
    <Text
      style={{
        margin: SPACING.S_2,
        textAlign: 'center',
        fontSize: 18,
        color: '#2a2a2a',
      }}>
      {'Overview will be shown here'}
    </Text>
  );
}
function OverviewStackScreen() {
  const {colors} = useTheme();
  return (
    <OverviewStack.Navigator
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
      <OverviewStack.Screen
        name="Overview Screen"
        options={{title: 'Overview'}}
        component={OverviewMainScreen}
      />
    </OverviewStack.Navigator>
  );
}

export default OverviewStackScreen;
