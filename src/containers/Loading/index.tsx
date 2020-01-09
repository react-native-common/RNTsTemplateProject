import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import styles from './styles';

interface Props extends NavigationStackScreenProps {}

export default class Loading extends Component<Props> {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('Main');
    }, 3000);
  }
  render() {
    return (
      <View style={styles.page}>
        <ActivityIndicator animating size="large" />
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  }
}
