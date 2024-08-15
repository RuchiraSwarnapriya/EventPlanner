import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import './gesture-handler';

import MainRoute from './src/navigation/routes';
function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <MainRoute />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default App;
