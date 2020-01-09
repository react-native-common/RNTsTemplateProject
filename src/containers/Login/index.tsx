import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { connect, DispatchProp } from 'react-redux';
import { AppModelState } from 'src/models/app';
import { NavigationStackScreenProps } from 'react-navigation-stack';

type Props = NavigationStackScreenProps & DispatchProp & { app: AppModelState };

class Login extends Component<Props> {
  render() {
    return (
      <View style={styles.page}>
        <Text
          onPress={() => {
            this.props.dispatch({ type: 'login', payload: {} });
            this.props.navigation.replace('Main');
          }}>
          Login
        </Text>
      </View>
    );
  }
}

export default connect(({ app }: { app: AppModelState }) => ({ app }))(Login);
