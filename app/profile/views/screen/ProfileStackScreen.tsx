import {Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SPACING} from '../../../styles/spacings';

const ProfileStack = createNativeStackNavigator();

function ProfileMainScreen() {
  return (
    <Text
      style={{
        margin: SPACING.S_2,
        textAlign: 'center',
        fontSize: 18,
        color: '#2a2a2a',
      }}>
      {'Your Profile will be shown here'}
    </Text>
  );
}
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
          color: '#6B6062',
        },
        headerTitleAlign: 'center',
      }}>
      <ProfileStack.Screen
        name="ProfileScreen"
        options={{title: 'Profile'}}
        component={ProfileMainScreen}
      />
    </ProfileStack.Navigator>
  );
}

export default ProfileStackScreen;
