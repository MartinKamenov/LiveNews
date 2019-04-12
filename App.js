import React from 'react';
import NavigationComponent from './src/ui/navigation/NavigationComponent';
import configureStore from './src/store/configurationStore';
import { Provider } from 'react-redux';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <NavigationComponent/>
    </Provider>
);

export default App;
