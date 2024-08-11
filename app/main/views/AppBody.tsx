import React from 'react';
import {StyleSheet, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import MainNavigation from './MainNavigation';
import ThemeProvider from '../../theme/ThemeProvider';

const AppBody = React.memo(() => {
  return (
    <ThemeProvider>
      <GestureHandlerRootView style={styles.fullFlex}>
        <SafeAreaProvider>
          <View style={styles.fullFlex}>
            <MainNavigation />
          </View>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
});

const styles = StyleSheet.create({
  fullFlex: {
    flex: 1,
  },
});

export default AppBody;
