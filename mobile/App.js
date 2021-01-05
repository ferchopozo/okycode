import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/core/redux/store'
import Amplify from 'aws-amplify'
import { YellowBox } from "react-native"

import { AppNavigator } from './src/appNavigator'

import './i18'
import awsconfig from './aws-exports'

YellowBox.ignoreWarnings([""])

export default function App() {
  const configureAmplify = ()=>{
    Amplify.configure(awsconfig)
  }

  useEffect(()=>{
    configureAmplify()
  },[])

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {/* <Notification /> */}
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}

