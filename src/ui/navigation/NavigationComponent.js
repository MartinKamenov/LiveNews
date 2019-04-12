import NewsApp from '../main/NewsApp';
import NewsComponent from '../news/NewsComponent';

import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
    NewsApp: {screen: NewsApp },
    NewsComponent: {screen: NewsComponent},
});

const NavigationComponent = createAppContainer(MainNavigator);

export default NavigationComponent;
