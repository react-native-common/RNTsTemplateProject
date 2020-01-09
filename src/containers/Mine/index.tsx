import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default class Mine extends Component {
  static navigationOptions = {
    title: '我的',
  };
  render() {
    return (
      <View style={styles.page}>
        <Text>Mine</Text>
      </View>
    );
  }
}
