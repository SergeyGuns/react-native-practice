import React from 'react';
import { WebView } from 'react-native';
import Menu from './components/Menu.js'
import { Scene, Router, Stack } from 'react-native-router-flux';
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="login" component={Menu} title="Login" />
          <Scene key="register" component={Menu} title="Register" />
          <Scene key="home" component={Menu} />
        </Stack>
      </Router>
    );
  }
}


