import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Dimensions,
  TextInput,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  StatusBar,
  Keyboard,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// need to link vector icon for android

export default class Signnin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#3700b3'}}>
        <StatusBar barStyle="light-content" />
        <View
          style={{
            height: (Dimensions.get('screen').height / 100) * 30,
          }}>
          <Text
            style={{
              fontSize: 26,
              fontWeight: '800',
              alignSelf: 'center',
              color: '#b1b4c7',
              borderTopWidth: 1,
              marginTop: (Dimensions.get('screen').height / 100) * 10,
            }}>
            Sign in
          </Text>
        </View>
        <View
          style={{
            height: (Dimensions.get('screen').height / 100) * 70,
            backgroundColor: '#fff',
            marginTop: 0,
            borderTopStartRadius: (Dimensions.get('screen').width / 100) * 8,
            borderTopEndRadius: (Dimensions.get('screen').width / 100) * 8,
            justifyContent: 'space-between',
            flexDirection: 'column',
            padding: 30,
          }}
          ref={myView => (this.MyView = myView)}>
          <View
            style={{
              marginTop: (Dimensions.get('screen').height / 100) * 10,
              flexDirection: 'column',
            }}>
            <TextInput
              style={{
                padding: 4,
                height: 60,
                borderBottomColor: '#dadbe3',
                fontSize: 22,
                borderBottomWidth: 1,
              }}
              placeholder="Email"
              placeholderTextColor="#95969c"
            />
            <View style={{height: 30}} />
            <TextInput
              style={{
                padding: 4,
                height: 60,
                borderBottomColor: '#dadbe3',
                fontSize: 22,
                borderBottomWidth: 1,
              }}
              placeholder="Password"
              placeholderTextColor="#95969c"
            />
            <View
              style={{
                flexDirection: 'row',
                height: 150,
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 26,
                  fontWeight: '600',
                  alignSelf: 'center',
                }}>
                Sign In
              </Text>

              <View
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                  backgroundColor: '#3700b3',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  shadowRadius: 5,
                  shadowColor: '#95969c',
                  shadowOpacity: 1,
                  shadowOffset: {width: 2, height: 2},
                }}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('AnimatedSignin')
                  }>
                  <View
                    style={{
                      width: '100%',
                      height: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Icon
                      name="arrow-right"
                      size={24}
                      color="#fff"
                      style={{alignSelf: 'center'}}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#fff',
              alignContent: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: 50,
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SigninAnimated')}>
              <Text style={{textDecorationLine: 'underline', fontSize: 16}}>
                Sign up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  textDecorationLine: 'underline',
                  opacity: 0.6,
                  fontSize: 16,
                }}>
                Forgot Password
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
