import React, {Component} from 'react';
import {
  Animated,
  StyleSheet,
  Dimensions,
  View,
  TextInput,
  Keyboard,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const window = Dimensions.get('window');
const IMAGE_HEIGHT = (window.height / 100) * 35;
const LOGO_HEIGHT = (window.height / 100) * 30;
const LOGO_HEIGHT_SMALL = (window.height / 100) * 10;
const IMAGE_HEIGHT_SMALL = window.height / 5;
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SignupFrom, SigninForm} from './Forms';

export default class SigninAnimated extends Component {
  constructor(props) {
    super(props);
    this.keyboardHeight = new Animated.Value(0);
    this.topViewHeight = new Animated.Value(IMAGE_HEIGHT);
    this.logoHeight = new Animated.Value(LOGO_HEIGHT);

    this.state = {
      name: '',
      email: '',
      password: '',
      showLogin: false,
      loading: false,
      emailError: '',
      passwordError: '',
    };
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
      Animated.timing(this.topViewHeight, {
        duration: event.duration,
        toValue: IMAGE_HEIGHT_SMALL,
      }),
      Animated.timing(this.logoHeight, {
        duration: event.duration,
        toValue: LOGO_HEIGHT_SMALL,
      }),
    ]).start();
  };

  keyboardWillHide = event => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: 0,
      }),
      Animated.timing(this.topViewHeight, {
        duration: event.duration,
        toValue: IMAGE_HEIGHT,
      }),
      Animated.timing(this.logoHeight, {
        duration: event.duration,
        toValue: LOGO_HEIGHT,
      }),
    ]).start();
  };

  _onSignup = props => {
    this.setState({loading: true});
    setTimeout(() => this.setState({loading: false}), 1000 * 2);
  };

  _onSignin = props => {
    this._validateLogin()
      ? (this.setState({loading: true}),
        setTimeout(() => this.setState({loading: false}), 1000 * 2))
      : null;
  };

  _validateLogin = () => {
    this.valide(this.state.email)
      ? this.state.password.length > 6
        ? true
        : (false, this.setState({passwordError: 'minimum 6 charater needed'}))
      : (false, this.setState({emailError: 'Enter valid email'}));
  };

  valide = email => {
    // don't remember from where i copied this code, but this works.
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);
  };

  render() {
    return (
      <ImageBackground
        source={require('../images/img.jpg')}
        style={{width: null, height: null, flex: 1}}>
        <SafeAreaView
          style={
            {
              /* backgroundColor: '#3700b3', */
            }
          }>
          <Animated.View
            style={([styles.container], {paddingBottom: this.keyboardHeight})}>
            <Animated.View
              style={([styles.topView], {height: this.topViewHeight})}>
              <View
                style={{
                  height: '100%',
                  width: '100%',
                  justifyContent: 'center',
                }}>
                {/* <Text
                style={{
                  alignSelf: 'center',
                  color: '#fff',
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  fontSize: 30,
                }}>
                Logo
              </Text> */}
                {/* <Animated.Image
                  source={require('../images/logo.png')}
                  style={([styles.logoView], {height: this.logoHeight})}
                  resizeMode="contain"
                /> */}
              </View>
            </Animated.View>
            <View
              style={{
                height: (window.height / 100) * 65,
                backgroundColor: '#fff',
                opacity: 0.8,
                marginTop: 0,
                borderTopStartRadius:
                  (Dimensions.get('screen').width / 100) * 8,
                borderTopEndRadius: (Dimensions.get('screen').width / 100) * 8,
                padding: 30,
                marginBottom: 0,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              {this.state.showLogin ? (
                <SigninForm
                  emailCallback={email => this.setState({email: email})}
                  passwordCallback={password =>
                    this.setState({password: password})
                  }
                  onSignin={this._onSignin}
                  onSignupCallback={() => this.setState({showLogin: false})}
                  loading={this.state.loading}
                  errors={[this.state.emailError, this.state.passwordError]}
                />
              ) : (
                <SignupFrom
                  nameCallback={name => this.setState({name: name})}
                  emailCallback={email => this.setState({email: email})}
                  passwordCallback={password =>
                    this.setState({password: password})
                  }
                  onSignup={this._onSignup}
                  onSigninCallback={() => this.setState({showLogin: true})}
                  loading={this.state.loading}
                />
              )}
            </View>
          </Animated.View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4c69a5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topView: {
    height: IMAGE_HEIGHT,
    width: '100%',
    marginBottom: 20,
    padding: 10,
    marginTop: 20,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoView: {
    height: LOGO_HEIGHT,
    width: '100%',
    marginBottom: 20,
    padding: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 4,
    height: 60,
    borderBottomColor: '#dadbe3',
    fontSize: 22,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
});
