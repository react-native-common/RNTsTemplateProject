import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationTabScreenProps } from 'react-navigation-tabs';
import styles from './styles';

interface Props extends NavigationTabScreenProps {}

export default class Home extends Component<Props> {
  static navigationOptions = {
    title: '首页',
  };
  render() {
    return (
      <View style={styles.page}>
        <Text>Home</Text>
        <Button
          title="Login"
          onPress={() => {
            this.props.navigation.navigate('Login');
          }}
        />
        <Button
          title="Mine"
          onPress={() => {
            this.props.navigation.navigate('Mine');
          }}
        />
      </View>
    );
  }
}
