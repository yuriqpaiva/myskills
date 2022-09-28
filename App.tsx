import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {Home} from './src/pages/Home';
import codePush from 'react-native-code-push';

import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://eee3cbc955a947b2aa9d926d024ec1b6@o1431087.ingest.sentry.io/6782022',
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
  environment: 'development',
});

function App() {
  useEffect(() => {
    codePush.sync({
      installMode: codePush.InstallMode.IMMEDIATE,
    });
    throw new Error('Não foi possível abrir a aplicação!!!');
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home />
    </>
  );
}

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
})(App);
