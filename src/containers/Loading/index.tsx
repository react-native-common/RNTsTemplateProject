import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import styles from './styles';
import { DispatchProp, connect } from 'react-redux';
import { AppModelState } from '@/models/app';

// interface Props extends NavigationStackScreenProps {}
type Props = NavigationStackScreenProps & DispatchProp & { app: AppModelState };

class Loading extends Component<Props> {
  componentDidMount() {
    setTimeout(() => {
      if (this.props.app.login) {
        this.props.navigation.replace('Main');
      } else {
        this.props.navigation.replace('Login');
      }
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

export default connect(({ app }: any) => ({ app }))(Loading);
