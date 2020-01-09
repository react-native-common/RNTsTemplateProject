import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Loading from './containers/Loading';
import Login from './containers/Login';
import Main from './containers/Main';

const AppNavigator = createStackNavigator(
  {
    Loading: { screen: Loading },
    Login: { screen: Login },
    Main: { screen: Main },
  },
  { defaultNavigationOptions: { headerTitleAlign: 'center' } },
);

export default createAppContainer(AppNavigator);
