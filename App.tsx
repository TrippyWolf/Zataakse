import React, {useLayoutEffect} from 'react';

import Orientation from 'react-native-orientation-locker';
import AppBody from './app/main/views/AppBody';

const ZataakSe = () => {
  useLayoutEffect(() => {
    // Lock Orientation to Portrait so the app does not rotate unless we unlock it.
    Orientation.lockToPortrait();
  }, []);

  return <AppBody />;
};

export default ZataakSe;
