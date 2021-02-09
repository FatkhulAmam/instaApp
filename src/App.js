import React from 'react';
import Router from './routers';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import Store from './redux/store';

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <Provider store={Store}>
      <Router />
    </Provider>
  );
};

export default App;
