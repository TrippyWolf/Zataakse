import {Switch, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SPACING} from '../../../styles/spacings';
import useThemeNameContext from '../../../theme/useThemeNameContext';
import useTheme from '../../../theme/useTheme';
import ThemeName from '../../../theme/ThemeName';

const ProfileStack = createNativeStackNavigator();

function ProfileMainScreen() {
  const themeContext = useThemeNameContext();
  const {colors} = useTheme();
  return (
    <View>
      <Text
        style={{
          margin: SPACING.S_2,
          textAlign: 'center',
          fontSize: 18,
          color: colors['content-primary'],
        }}>
        {'Your Profile will be shown here'}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: SPACING.S_2,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: colors['content-primary'],
            fontSize: 20,
            marginRight: SPACING.S_2,
          }}>
          {'Dark Theme'}
        </Text>
        <Switch
          onValueChange={themeContext.toggleTheme}
          value={themeContext.themeName === ThemeName.DARK}
        />
      </View>
    </View>
  );
}
function ProfileStackScreen() {
  const {colors} = useTheme();
  return (
    <ProfileStack.Navigator
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
      <ProfileStack.Screen
        name="ProfileScreen"
        options={{title: 'Profile'}}
        component={ProfileMainScreen}
      />
    </ProfileStack.Navigator>
  );
}

export default ProfileStackScreen;
