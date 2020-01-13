import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { AppModelState } from '@/models/app';
import { connect } from '@/utils/dva';
import { PageBaseProps } from '@/utils';

type Props = PageBaseProps & { app: AppModelState };

@connect(({ app }) => ({ app }))
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

export default Login;
