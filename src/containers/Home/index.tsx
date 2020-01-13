import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';
import { PageBaseProps } from '@/utils';

type Props = PageBaseProps;

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
