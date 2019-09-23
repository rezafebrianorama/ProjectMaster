import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabNavigationRoot from "./components/tabNavigationRoot";

import HomeScreen from "./screens/home";
import ToolScreen from "./screens/setting";
// you can also import from @react-navigation/native

const TabNavigator = createBottomTabNavigator(
    {
        Home: { screen: HomeScreen },
        Tools: { screen: ToolScreen },
    },
    {
        tabBarComponent: TabNavigationRoot
    }
    
);

const AppNavigator = createStackNavigator(
    {
        LandingScreen: { screen: TabNavigator },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);

const AppContainer = createAppContainer(AppNavigator);

// Now AppContainer is the main component for React to render

export default AppContainer;