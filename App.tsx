import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import './gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store';

import MainRoute from './src/navigation/routes';
import {Provider} from 'react-redux';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={styles.mainContainer}>
          <SafeAreaView style={styles.mainContainer}>
            <MainRoute />
          </SafeAreaView>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default App;
