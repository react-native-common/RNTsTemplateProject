import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { connect } from '@/utils/dva';

@connect(({ app }) => ({ app }))
class Mine extends Component<any, any> {
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

export default Mine;
