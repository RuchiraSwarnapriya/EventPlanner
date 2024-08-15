import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import './gesture-handler';

import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store';

import MainRoute from './src/navigation/routes';
import {Provider} from 'react-redux';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={styles.mainContainer}>
          <MainRoute />
        </SafeAreaView>
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
