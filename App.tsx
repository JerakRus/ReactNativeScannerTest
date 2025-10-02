/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  CameraView,
  BarcodeScanner,
  BarcodeResult,
} from '@pushpendersingh/react-native-scanner';
import { useEffect } from 'react';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    BarcodeScanner.requestCameraPermission().then((permission: boolean) => {
      if (!permission) {
        return;
      }
      BarcodeScanner.startScanning((result: BarcodeResult) => {
        console.log('Barcode: ', result);
        BarcodeScanner.stopScanning();
      });
    });

    return () => {
      BarcodeScanner.stopScanning();
    };
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <CameraView style={styles.container} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
