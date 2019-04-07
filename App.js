import NewsApp from './src/ui/NewsApp';
import NewsComponent from './src/ui/news/NewsComponent';

import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
    NewsApp: {screen: NewsApp},
    NewsComponent: {screen: NewsComponent},
});

const App = createAppContainer(MainNavigator);

export default App;
