import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { ActivityIndicator } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import { store, persistor } from './reducers';

import ScarletScreen from './screens/ScarletScreen';
import GrayScreen from './screens/GrayScreen';

const ConnectedRouter = connect()(Router);

const Scenes = Actions.create(
  <Scene key="root"
          backTitle=" "
          navBarButtonColor="green">
    <Scene key="scarlet"
          component={ScarletScreen}
          title="Scarletmadams dasm,d asm,d asm,d am,sd asdnasjkfna"
          initial/>
    <Scene key="gray"
          component={GrayScreen}
          title="Gray"/>
  </Scene>
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator size="large"/>} persistor={persistor}>
          <ConnectedRouter scenes={Scenes} />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;