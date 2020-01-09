import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../Home';
import Mine from '../Mine';

const Main = createBottomTabNavigator({
  Home: { screen: Home },
  Mine: { screen: Mine },
});

Main.navigationOptions = ({ navigation }: { navigation: any }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const headerTitleMap: { [key: string]: string } = {
    Home: '首页',
    Mine: '我的',
  };
  const headerTitle = headerTitleMap[routeName] || routeName;
  return {
    headerTitle,
  };
};

export default Main;
