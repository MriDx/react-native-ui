import React, {Component} from 'react';
import {SafeAreaView, Animated} from 'react-native';
import {styles} from '../styles/signup_in_styles';

export default class SignupAnimated extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView>
        <Animated.View
          style={
            ([styles.container], {paddingBottom: this.keyboardHeight})
          }></Animated.View>
      </SafeAreaView>
    );
  }
}
