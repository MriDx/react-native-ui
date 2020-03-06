import React, {Component} from 'react';
import {
  Keyboard,
  View,
  KeyboardAvoidingView,
  TextInput,
  Animated,
} from 'react-native';
//import Animated from 'react-native-reanimated';
//import {TextInput} from 'react-native-gesture-handler';
import styles, {IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL} from '../styles';

export default class AnimatedSignin extends Component {
  constructor(props) {
    super(props);

    this.keyboardHeight = new Animated.Value(0);
    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
  }

  UNSAFE_componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener(
      'keyboardWillShow',
      this.keyboardWillShow,
    );
    this.keyboardWillHideSub = Keyboard.addListener(
      'keyboardWillHide',
      this.keyboardWillHide,
    );
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = event => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: event.endCoordinates.height,
      }),
      Animated.timing(this.imageHeight, {
        duration: event.duration,
        toValue: IMAGE_HEIGHT_SMALL,
      }),
    ]).start();
  };

  keyboardWillHide = event => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: 0,
      }),
      Animated.timing(this.imageHeight, {
        duration: event.duration,
        toValue: IMAGE_HEIGHT,
      }),
    ]).start();
  };

  render() {
    return (
      <Animated.View
        style={[styles.container, {paddingBottom: this.keyboardHeight}]}>
        <Animated.Image
          source={require('../images/logo.png')}
          style={[styles.logo, {height: this.imageHeight}]}
        />
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Username" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} />
        <TextInput placeholder="Confirm Password" style={styles.input} />
      </Animated.View>
    );
  }
}
